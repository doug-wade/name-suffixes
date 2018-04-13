import chai from 'chai';
import nameSuffixes from '../lib';

const expect = chai.expect;

describe('name-suffixes', () => {
  it('should export a list of suffixes', () => {
    expect(nameSuffixes.suffixes).to.be.a('array');

    const suffix = nameSuffixes.suffixes[Math.floor(Math.random() * nameSuffixes.suffixes.length)];

    expect(suffix.variants).to.be.a('array');
    expect(suffix.canonical).to.be.a('string');
    expect(suffix.type).to.be.a('string');
  });

  it('should export an isSuffix function', () => {
    expect(nameSuffixes.isSuffix).to.be.a('function');
  });

  // Doug wade -- I think this is kinda weird.  The ideal would be to test that isSuffix
  // Is properly curried without testing the actual logic.
  it('should export an isSuffix function that takes a single argument', () => {
    expect(nameSuffixes.isSuffix('Jr')).to.be.true;
  });

  it('should export a canonize function', () => {
    expect(nameSuffixes.canonize).to.be.a('function');
  });

  it('should export an canonize function that takes a single argument', () => {
    expect(nameSuffixes.canonize('II')).to.be.eql({
      variants: ['Jr', 'II', 'Junior', 'Jnr'],
      canonical: 'jr',
      type: 'generational'
    });
  });
});
