import { isArray, cloneDeep } from 'lodash';
import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';
const _queryKeysByPath = (pathname, menusData) => {
    if (typeof (pathname) !== "string" || (typeof (pathname) === "string" && pathname.indexOf("frame") > -1)) return {};
    const reg = /(^\/*)|(\/*$)/g;// 匹配字符串首尾斜杠
    const path = pathname.replace(reg, '');
    const searchMenu = (value, data, pathtitles = []) => {
        if (value === undefined || value === null) return {};
        data = cloneDeep(data);
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
export const queryKeysByPath = memoizeOne(_queryKeysByPath, isEqual);
const _testMenusData = (item, err) => {
    const { title, icon, key, link, url, children } = item;
    if (!(title && key)) {
        return err && err();
    }
    if (children) {
        if (isArray(children) && icon) {
            _testMenusData(children, err);
        } else {
            err();
        };
    } else {
        if (!(url || link)) {
            return err && err();
        }
    }
}
export const testMenusData = memoizeOne(_testMenusData, isEqual);