import _ from 'lodash';
export const searchFilter = (value, data, names = [], pathtitles = []) => {
    if (value === undefined || value === null) return [];
    data = _.cloneDeep(data);
    data.forEach((item) => {
        const { title, children } = item;
        if (children && children.length > 0) {
            searchFilter(value, children, names, pathtitles.concat(title));
        } else if (title.indexOf(value) > -1) {
            names.push({ ...item, pathtitles: pathtitles.concat(title) });
        }
    });
    return names;
};
export const searchEqual = (value, data) => {
    data = _.cloneDeep(data);
    if (value === undefined || value === null || _.trim(value) === "") return {};
    value = _.trim(value);
    let res = {};
    for (const item of data) {
        const { key, children } = item;
        if (children && children.length > 0) {
            return searchFilter(value, children);
        } else if (key === value) {
            res = item;
            break;
        }
    }
    return res;
};