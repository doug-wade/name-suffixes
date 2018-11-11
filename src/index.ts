import canonize from './canonize';
import isSuffix from './isSuffix';
import suffixes from './suffixes';

export default {
  canonize: (candidate: String) => canonize(suffixes, candidate),
  isSuffix: (candidate: String) => isSuffix(suffixes, candidate),
  suffixes
};
