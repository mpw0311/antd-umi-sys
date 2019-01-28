import _ from 'lodash';
import memoizeOne from 'memoize-one';
export const _queryKeysByPath = (pathname, menusData) => {
    if (typeof (pathname) !== "string" || (typeof (pathname) === "string" && pathname.indexOf("frame") > -1)) return {};
    const reg = /(^\/*)|(\/*$)/g;// 匹配字符串首尾斜杠
    const path = pathname.replace(reg, '');
    const searchMenu = (value, data, pathtitles = []) => {
        if (value === undefined || value === null) return {};
        data = _.cloneDeep(data);
        for (const item of data) {
            const { title, link, children } = item;
            if (children && children.length > 0) {
                return searchMenu(value, children, pathtitles.concat(title));
            } else if (value === link.replace(reg, '')) {
                return { ...item, pathtitles: pathtitles.concat(title) };
            }
        }
    };
    const result = searchMenu(path, menusData);
    return { key: undefined, ...result };
};
export const queryKeysByPath = memoizeOne(_queryKeysByPath);