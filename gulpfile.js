const path = require('path');
const gulp = require('gulp');
const tslint = require("gulp-tslint");
const excludeGitignore = require('gulp-exclude-gitignore');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const snyk = require('gulp-snyk');
const plumber = require('gulp-plumber');
const coveralls = require('gulp-coveralls');
const babel = require('gulp-babel');
const del = require('del');
const isparta = require('isparta');
const ts = require('gulp-typescript');

// Initialize the babel transpiler so ES2015 files gets compiled
// When they're loaded
require('babel-core/register');
 
gulp.task('typescript', () => {
    return gulp.src('src/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outDir: '.'
        }))
        .pipe(gulp.dest('lib'));
});

gulp.task('static', () => gulp.src("./src/*.ts")
  .pipe(tslint({
      formatter: "verbose"
  }))
  .pipe(tslint.report()));

gulp.task('protect', cb => snyk({command: 'protect'}, cb));

gulp.task('audit-dependencies', cb => snyk({command: 'test'}, cb));

gulp.task('pre-test', () => gulp.src('lib/**/*.js')
  .pipe(excludeGitignore())
  .pipe(istanbul({
    includeUntested: true,
    instrumenter: isparta.Instrumenter
  }))
  .pipe(istanbul.hookRequire()));

gulp.task('test', ['pre-test'], cb => {
  let mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({
      reporter: 'spec',
      compilers: [
        'js:babel-register'
      ]
    }))
    .on('error', err => mochaErr = err)
    .pipe(istanbul.writeReports())
    .on('end', () => cb(mochaErr));
});

gulp.task('watch', () => gulp.watch(['lib/**/*.js', 'test/**'], ['test']));

gulp.task('coveralls', ['test'], () => {
  if (!process.env.CI) {
    return;
  }

  gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('babel', ['clean'], () => gulp.src('lib/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('dist')));

gulp.task('clean', () => del('dist'));

gulp.task('prepublish', ['protect', 'typescript', 'babel']);
gulp.task('default', ['static', 'test', 'coveralls', 'audit-dependencies']);
