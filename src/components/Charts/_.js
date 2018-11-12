import _ from 'lodash';
import { dataSerialize, dataSerializeReverse } from './methods/dataSerialize';
import { formatNumer } from './methods/formatNumer';
import { showLoading } from './methods/showLoading';
export {
    dataSerialize,
    formatNumer,
    showLoading
};
/**
 * @param {array|array} rows
 *  [
 *      [120, 132, 101, 134, 90, 230, 210],
 *      [220, 182, 191, 234, 290, 330, 310],
 *      [150, 232, 201, 154, 190, 330, 410]
 *  ];
 * @param {number} length |colmuns length
 * @returns {array|array} values
 * [
 *  [120,220,150],
 *  [132,182,232],
 *  [101,191,201],
 *  [134,234,154],
 *  [90,290,190],
 *  [230,330,330],
 *  [210,310,410]
 * ]
*/
export const rowsToColumns = (rows, length = rows[0].length) => {
    const values = [];
    for (let i = 0; i < length; i++) {
        values[values.length] = getColumnByIndex(rows, i);
    }
    return values;
};

export const getColumnByIndex = (rows, index) => rows.map(row => row[index]);
/**
 * @param {*} data
 * @param {*} yIndex
 * {
    columns: [
        {
            field: "amount01",
            name: "1千至3千",
            type: "number"
        },
        {
            field: "amount02",
            name: "3千至1万",
            type: "number"
        },
        {
            field: "amount03",
            name: "1万至3万",
            type: "number"
        },
        {
            field: "amount04",
            name: "3万至5万",
            type: "number"
        },
        {
            field: "amount05",
            name: "5万至10万",
            type: "number"
        },
    ],
    rows: [
        {
            amount01: 83,
            amount02: 123,
            amount03: 123,
            amount04: 223,
            amount05: 323,
        }
    ]
  }
 * @returns {array|array} values
 * [
        {
            name: "1千至3千",
            type: "number",
            data:83
        },
        {
            name: "3千至1万",
            type: "number",
            data:123
        },
        {
            name: "1万至3万",
            type: "number",
            data:123
        },
        {
            name: "3万至5万",
            type: "number",
            data:223
        },
        {
            name: "5万至10万",
            type: "number",
            data:323
        },
    ]
*/
export const dataSerialize01 = (data, yIndex = 0) => {
    return {
        data,
        yIndex
    };
};

/**
 * {
    columns: [
        {
            field: "category",
            name: "分类",
            type: "string"
        },
        {
            field: "amount_1",
            name: "1k-3k",
            type: "number"
        },
        {
            field: "amount_2",
            name: "3k-1w",
            type: "number"
        },
    ],
    rows: [
        {
            category: '低于30%',
            amount_1: 24,
            amount_2: 53,
        },
        {
            category: '30%-50%',
            amount_1: 24,
            amount_2: 53,
        },
        {
            category: '50%-65%',
            amount_1: 24,
            amount_2: 53,
        },
        {
            category: '65%-75%',
            amount_1: 24,
            amount_2: 53,
        },
    ]
 }
 * @param {*} data
*/
export const toDataset = (data) => {
    const { legendData, seriesData } = dataSerialize(data, -1);
    seriesData.map((row, i) => row.unshift(legendData[i]));
    return seriesData;
};
export const toDatasetReverse = (data) => {
    const { axisData, seriesData } = dataSerializeReverse(data,  -1);
    seriesData.unshift(axisData);
    return seriesData;
};
export const toValuesArry = (data = {}, yIndex = 0) => {
    const { columns = [], rows = [] } = data;
    const values = [];
    columns.forEach((col, i) => {
        const { field } = col;
        if (i !== yIndex) {
            rows.forEach(row => {
                values.push(
                    row[field]
                );
            });
        }
    });
    return values;
};

export const deleteColumnByIndexs = (dd = {}, indexs = []) => {
    const data = _.cloneDeep(dd);
    const { columns = [], rows = [] } = data;
    const drows = [];
    _.remove(columns, (v, i) => {
        return indexs.indexOf(i) > -1;
    });
    rows.forEach(row => {
        const drow = {};
        columns.forEach(col => {
            const { field } = col;
            drow[field] = row[field];
        });
        drows.push(drow);
    });
    return {
        columns,
        rows: drows
    };
};
export const deleteColumnByFields = (dd = {}, fields = []) => {
    const data = _.cloneDeep(dd);
    const { columns = [], rows = [] } = data;
    const drows = [];
    _.remove(columns, v => {
        const { field } = v;
        return fields.indexOf(field) > -1;
    });
    rows.forEach(row => {
        const drow = {};
        columns.forEach(col => {
            const { field } = col;
            drow[field] = row[field];
        });
        drows.push(drow);
    });
    return {
        columns,
        rows: drows
    };
};
export const getMark = (params) => {
    // 最大值，最小值，平均值
    const { maxShow, minShow, averageShow } = params;
    const markLine = {};
    const markPoint = {};
    const maxPoint = {
        data: [{ type: 'max', name: '最大值' }]
    };
    const minPoint = {
        data: [{ type: 'min', name: '最小值' }]
    };
    function customizer(objValue, srcValue) {
        if (_.isArray(objValue)) {
            return objValue.concat(srcValue);
        }
    }
    if (maxShow) {
        _.mergeWith(markPoint, maxPoint, customizer);
    }
    if (minShow) {
        _.mergeWith(markPoint, minPoint, customizer);
    }
    if (averageShow) {
        markLine.data = [
            { type: 'average', name: '平均值' }
        ];
    }
    return {
        markPoint,
        markLine
    };
};

//数据模型转换
export const toArray = (data) => {
    const { columns = [], rows = [] } = data;
    const row = rows[0] || {};
    return columns.map(item => {
        const { field, name, type } = item;
        return {
            name,
            type,
            value: row[field]
        };
    });
};
//数组值交换位置
export const swap = (arr, startIndex, endIndex = 0) => {
    const startVal = arr[startIndex];
    const endVal = arr[endIndex];
    arr[endIndex] = startVal;
    arr[startIndex] = endVal;
    return arr;
  };