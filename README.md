# name-suffixes [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/doug-wade/name-suffixes.svg)](https://greenkeeper.io/)
> Identify name suffixes

For the most part, this is just the code version of the [Wikipedia page on name suffixes](https://en.wikipedia.org/wiki/Suffix_(name)).  Each suffix has three parts: a list of variants, which is a list of all of the versions of the same suffix that differ in more than punctation, whitespace, or capitalization; a canonical version, which is a standard way of identifying a single suffix, and a type, which is one of: generational, academic, professional or religious.

## Installation

```sh
$ npm install --save name-suffixes
```

## Usage

```js
var nameSuffixes = require('name-suffixes').suffixes;

nameSuffixes.forEach(suffix => {
  console.log(suffix.variants); // ['Jr', 'II', 'Junior']
  console.log(suffix.canonical); // 'Jr'
  console.log(suffix.type); // generational
});

var isSuffix = require('nameSuffixes').isSuffix;

console.log(isSuffix('Sr')); // true
console.log(isSuffix('Wade')); // false

var canonize = require('nameSuffixes').canonize;

console.log(canonize('II')); // { variants: ['Jr', 'II', 'Junior'], canonical: 'jr', type: 'generational' }
console.log(canonize('Wade')); // undefined
```

## License

MIT © [Doug Wade](dougwade.io)


[npm-image]: https://badge.fury.io/js/name-suffixes.svg
[npm-url]: https://npmjs.org/package/name-suffixes
[travis-image]: https://travis-ci.org/doug-wade/name-suffixes.svg?branch=master
[travis-url]: https://travis-ci.org/doug-wade/name-suffixes
[daviddm-image]: https://david-dm.org/doug-wade/name-suffixes.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/doug-wade/name-suffixes
[coveralls-image]: https://coveralls.io/repos/doug-wade/name-suffixes/badge.svg
[coveralls-url]: https://coveralls.io/r/doug-wade/name-suffixes
