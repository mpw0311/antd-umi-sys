import _ from 'lodash';
import { dataSerialize } from './methods/dataSerialize';
import { formatNumer } from './methods/formatNumer';
import { showLoading } from './methods/showLoading';
import { getMark } from './methods/getMark';
export {
    dataSerialize,
    formatNumer,
    showLoading,
    getMark
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