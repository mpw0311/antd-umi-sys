import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';
/**
 *
 * {
    columns: [
        {
            field: "product",
            name: "分类",
            type: "string"
        },
        {
            field: "2015",
            name: "2015",
            type: "number"
        },
        {
            field: "2016",
            name: "2016",
            type: "number"
        },
        {
            field: "2017",
            name: "2017",
            type: "number"
        }
    ],
    rows: [
        {
            product: 'Matcha Latte',
            2015: 43.3,
            2016: 85.8,
            2017: 93.7
        },
        {
            product: 'Milk Tea',
            2015: 83.1,
            2016: 73.4,
            2017: 55.1
        },
        {
            product: 'Cheese Cocoa',
            2015: 86.4,
            2016: 65.2,
            2017: 82.5
        },
        {
            product: 'Walnut Brownie',
            2015: 72.4,
            2016: 53.9,
            2017: 39.1
        },
    ]
 }
 *
 * @param {*} data
 * [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
 *
*/
const toDataset = (data) => {
    const { columns, rows } = data;
    const row_0 = columns.map(item => item.name);
    const rest = rows.map(row => columns.map(item => row[item.field]));
    return [row_0, ...rest];
}
export default memoizeOne(toDataset, isEqual);