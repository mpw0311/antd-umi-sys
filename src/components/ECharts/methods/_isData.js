import { isObject, isArray } from 'lodash';
export default (data) => {
    if (!isObject(data)) {
        return false;
    }
    if (!isArray(data.columns) || !isArray(data.rows)) {
        return false;
    }
    if (data.columns.length === 0 || data.rows.length === 0) {
        return false
    }
    return true;
}