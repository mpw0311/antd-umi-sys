import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';

import formatNumer from './_formatNumer';
import toDataset from './_toDataset_A';
import isData from './_isData';

const _formatNumer = memoizeOne(formatNumer);
const _toDataset = memoizeOne(toDataset, isEqual);
const _isData = memoizeOne(isData, isEqual);

export {
    _formatNumer,
    _toDataset,
    _isData
};