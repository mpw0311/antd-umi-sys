import { _formatNumer, _isData, _toDataset } from './index';
// import renderer from 'react-test-renderer';

describe('methods', () => {
    const data = {
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
    };
    it('_formatNumer', () => {
        expect(_formatNumer(10000000000)).toBe('10,000,000,000');
        expect(_formatNumer(10000000)).toBe('10,000,000');
        expect(_formatNumer(10000)).toBe('10,000');
        expect(_formatNumer(1000)).toBe('1,000');
        expect(_formatNumer(1000.12)).toBe('1,000.12');
        expect(_formatNumer(100)).toBe('100');
        expect(_formatNumer([])).toEqual([]);
    });
    it('_isData', () => {
        expect(_isData(data)).toBe(true);
        expect(_isData({
            columns: [],
            rows: []
        })).toBe(false);
        expect(_isData({})).toBe(false);
    });
    it('_toDataset', () => {
        expect(_toDataset(data)).toEqual([["分类", "2015", "2016", "2017"], ["Matcha Latte", 43.3, 85.8, 93.7], ["Milk Tea", 83.1, 73.4, 55.1], ["Cheese Cocoa", 86.4, 65.2, 82.5], ["Walnut Brownie", 72.4, 53.9, 39.1]]);
    });
});
