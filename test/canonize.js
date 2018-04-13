/* eslint-disable no-unused-expressions */
import canonize from '../lib/canonize';
import chai from 'chai';

const expect = chai.expect;
const mockSuffixes = [
  {
    variants: ['Time Lord', 'T.L.'],
    canonical: 'T. L.',
    type: 'fictional'
  }
];

describe('canonize', () => {
  it('should return false for a value not in suffixes', () => {
    expect(canonize(mockSuffixes, 'Wade')).to.be.undefined;
  });

  it('should return the canonical suffix object for a value in suffixes', () => {
    expect(canonize(mockSuffixes, 'T. L.')).to.be.eql(mockSuffixes[0]);
  });

  it('should return the canonical suffix object for an improperly-cased value in suffixes', () => {
    expect(canonize(mockSuffixes, 't l')).to.be.eql(mockSuffixes[0]);
  });

  it('should return the canonical suffix object for a value in suffixes with periods omitted', () => {
    expect(canonize(mockSuffixes, 'T L')).to.be.eql(mockSuffixes[0]);
  });

  it('should return the canonical suffix object for a value in suffixes with spaces omitted', () => {
    expect(canonize(mockSuffixes, 'T.L.')).to.be.eql(mockSuffixes[0]);
  });

  it('should return the canonical suffix object for a improperly-cased value in suffixes with spaces and periods omitted', () => {
    expect(canonize(mockSuffixes, 'tl')).to.be.eql(mockSuffixes[0]);
  });
});
