import _ from 'lodash';
/**
  * 序列化数据
  * @param {*} data
  *  {
  *   "columns": [
  *       {
  *           "field": "date",
  *           "name": "时间",
  *           "type": "string"
  *       },
  *       {
  *           "field": "T0",
  *           "name": "T0",
  *           "type": "number"
  *       },
  *       {
  *           "field": "T1",
  *           "name": "T1",
  *           "type": "number"
  *       },
  *       {
  *           "field": "T2",
  *           "name": "T2",
  *           "type": "number"
  *       }
  *   ],
  *   "rows": [
  *       {
  *           "date": "06-01",
  *           "T0": 123,
  *           "T1": 123,
  *           "T2": 123
  *       },
  *       {
  *           "date": "06-02",
  *           "T0": 123,
  *           "T1": 123,
  *           "T2": 123
  *       }
  *   ]
  * }
  * @param {*} y_index |y轴索引默认0
  * @returns {object}
  * var legendData = ['T0', 'T1', 'T2'];
  *  var xAxisData = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '0600'];
  *  var seriesData = [
  *      [120, 132, 101, 134, 90, 230, 210],
  *      [220, 182, 191, 234, 290, 330, 310],
  *      [150, 232, 201, 154, 190, 330, 410]
  *  ];
*/
export function dataSerialize(data, yIndex = 0) {
    let { columns = [] } = data;
    const { rows = [] } = data;
    if (typeof (columns) === "string") {
        columns = JSON.parse(columns);
    }
    const axisData = [];
    const legendData = [];
    const seriesData = [];

    columns.map((column, i) => {
        const field = column.field;
        const name = column.name;
        const d = [];
        if (i !== yIndex) {
            legendData.push(name);
        }
        rows.map((row) => {
            let value = row[field];
            if (i === yIndex) {
                axisData.push(value);
            } else {
                if (value === undefined || value === null || value === "") {
                    value = 0;
                }
                d.push(value);
            }
            return row;
        });
        if (i !== yIndex) {
            seriesData.push(d);
        }
        return column;
    });

    return {
        axisData,
        legendData,
        seriesData
    };
}
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
 * 数字加逗号显示
 * @param {number} number
 * @param {number} limit
 * @returns {string} d
 */
export const formatNumer = (num, limit) => {
    if (num === undefined || num === null || num === "") return num;
    num += "";
    if (num === "NaN") return num;
    limit = limit || 1000;
    const n = num.indexOf('.');
    let str = "";
    if (n > -1) {
        str = num.slice(n);
        num = num.slice(0, n);
    }
    const arr = num.split("");
    const len = arr.length;
    if (limit === 1000) {
        if (len >= 4) {
            arr.splice(-3, 0, ',');
        }
        if (len >= 7) {
            arr.splice(-7, 0, ',');
        }
        if (len >= 10) {
            arr.splice(-11, 0, ',');
        }
        if (len >= 13) {
            arr.splice(-15, 0, ',');
        }
    }
    num = arr.join("") + str;
    return num;
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