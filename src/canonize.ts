import SuffixInterface from './SuffixInterface';

export default function(suffixes: Array<SuffixInterface>, candidate: String) {
  for (const suffix of suffixes) {
    for (const variant of suffix.variants) {
      if (isEqual(candidate, variant)) {
        return suffix;
      }
    }
  }

  return undefined;
}

function isEqual(candidate: String, variant: String) {
  return standardize(candidate) === standardize(variant);
}

function standardize(suffix: String) {
  return suffix.toLowerCase().replace(/\./gi, '').replace(/\s/g, '');
}
