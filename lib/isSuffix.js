import canonize from './canonize';

export default function (suffixes, candidate) {
  return Boolean(canonize(suffixes, candidate));
}
