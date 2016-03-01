import canonize from './canonize';
import isSuffix from './isSuffix';
import suffixes from './suffixes';

export default {
  canonize: candidate => canonize(suffixes, candidate),
  isSuffix: candidate => isSuffix(suffixes, candidate),
  suffixes
};
