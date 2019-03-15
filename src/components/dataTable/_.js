import { isString, includes, filter, isNumber } from 'lodash';
import { methods } from '@utils';
const { toTableData } = methods;
const compare = (a, b, dataIndex, type) => {
    const _type = type ? type.toLowerCase() : 'string';
    if (_type === "string") {
        if (a[dataIndex] > b[dataIndex]) {
            return 1;
        } else {
            return -1;
        }
    } else if (_type === "number") {
        return parseFloat(a[dataIndex]) - parseFloat(b[dataIndex]);
    } else if (type === 'date') {
        if (a[dataIndex] > b[dataIndex]) {
            return 1;
        } else {
            return -1;
        }
    }
};
//列表头排序功能
const getSortColumns = (columns, sortIndexs) => {
    return columns.map(item => {
        const { dataIndex, type } = item;
        const res = sortIndexs.includes(dataIndex);
        if (res === true) {
            return {
                ...item,
                sorter: (a, b) => {
                    return compare(a, b, dataIndex, type);
                },
            };
        } else {
            return item;
        }
    });
};
//列表头排序功能
const getAllSortColumns = (columns) => {
    return columns.map(item => {
        const { dataIndex, type } = item;
        return {
            ...item,
            sorter: (a, b) => {
                return compare(a, b, dataIndex, type);
            },
        };
    });
};
const searchTable = (dataSource, key) => {
    if (key === undefined || key === '') {
        return dataSource;
    } else {
        return filter(dataSource, item => {
            for (const name in item) {
                const v = item[name];
                if (v === key) {
                    return true;
                } else if (isString(v) && includes(v, key)) {
                    return true;
                } else if (isNumber(v) && v === parseFloat(key)) {
                    return true;
                }
            }
            return false;
        });
    }
};
//配置列属性
const mergeColumnSetting = (columns, setting) => {
    if (!(setting && setting.length > 0)) return columns;
    return columns.map((item, i) => {
        const set = setting[i];
        if (set) {
            return {
                ...item,
                ...set
            };
        }
        return item;
    });
};
export const _getData = (props, key) => {
    const { data, sort, sortIndexs, columnSetting } = props;
    const { columns, dataSource } = toTableData(data);
    let _columns = sort ? getAllSortColumns(columns) : sortIndexs.length > 0 ? getSortColumns(columns, sortIndexs) : columns;
    _columns = mergeColumnSetting(_columns, columnSetting);
    return {
        columns: props.columns || _columns,
        dataSource: searchTable(dataSource, key)
    };
};