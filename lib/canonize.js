export default function (suffixes, candidate) {
  for (const suffix of suffixes) {
    for (const variant of suffix.variants) {
      if (isEqual(candidate, variant)) {
        return suffix;
      }
    }
  }
  return undefined;
}

function isEqual(candidate, variant) {
  return standardize(candidate) === standardize(variant);
}

function standardize(suffix) {
  return suffix.toLowerCase().replace(/\./gi, '').replace(/\s/g, '');
}
