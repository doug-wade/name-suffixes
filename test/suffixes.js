import chai from 'chai';
import suffixes from '../lib/suffixes';

const expect = chai.expect;

describe('canonize', () => {
  it('should be properly formatted', () => {
    suffixes.forEach(suffix => {
      expect(suffix.variants).to.be.a('array');
      expect(suffix.variants[0]).to.be.a('string');
      expect(suffix.canonical).to.be.a('string');
      expect(suffix.type).to.be.a('string');
      expect(['generational', 'academic', 'professional', 'religious'].indexOf(suffix.type)).to.be.above(-1);
    });
  });
});
