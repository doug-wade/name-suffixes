/* eslint-disable no-unused-expressions */

import isSuffix from '../lib/isSuffix';
import chai from 'chai';

const expect = chai.expect;
const mockSuffixes = [
  {variants: ['Time Lord', 'T.L.'], canonical: 'T. L.', type: 'fictional'}
];

describe('isSuffix', () => {
  it('should return false for a value not in suffixes', () => {
    expect(isSuffix(mockSuffixes, 'Wade')).to.be.false;
  });

  it('should return true for a value in suffixes', () => {
    expect(isSuffix(mockSuffixes, 'T. L.')).to.be.true;
  });

  it('should return true for an improperly-cased value in suffixes', () => {
    expect(isSuffix(mockSuffixes, 't l')).to.be.true;
  });

  it('should return true for a value in suffixes with periods omitted', () => {
    expect(isSuffix(mockSuffixes, 'T L')).to.be.true;
  });

  it('should return true for a value in suffixes with spaces omitted', () => {
    expect(isSuffix(mockSuffixes, 'T.L.')).to.be.true;
  });

  it('should return true for a improperly-cased value in suffixes with spaces and periods omitted', () => {
    expect(isSuffix(mockSuffixes, 'tl')).to.be.true;
  });
});
