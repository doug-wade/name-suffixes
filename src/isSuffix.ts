import canonize from './canonize';
import SuffixInterface from './SuffixInterface';

export default function(suffixes: Array<SuffixInterface>, candidate: String) {
  return Boolean(canonize(suffixes, candidate));
}
