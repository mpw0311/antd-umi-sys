import _ from 'lodash';
export const showLoading = (data) => {
    if (_.isArray(data) && data.length > 0) {
        return false;
    } else if (_.isObject(data)) {
        const { columns, rows } = data;
        if (columns && columns.length > 0 && rows && rows.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    return true;
};