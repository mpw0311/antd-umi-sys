import { isArray } from 'lodash';
import { toDatasetReverse, toDataset, swap } from '../_';
export const _getType = (type) => {
    const _type = type.toLowerCase();
    switch (_type) {
        case 'line':
            return {
                type: 'line'
            };
        case 'bar':
            return {
                type: 'bar'
            };
        case 'area':
            return {
                type: 'line',
                areaStyle: {},
            };
        default:
            return {
                type: 'line'
            };
    }
};
export const _getYAxis = opts => {
    const { YUnit, Y2Show, Y2Unit, } = opts;
    const setting = {
        type: 'value',
        name: YUnit,
    };
    if (Y2Show === true) {
        return [
            setting,
            {
                type: 'value',
                name: Y2Unit,
                splitLine: {
                    // show: false,
                    lineStyle: {
                        type: 'dashed',
                        color: '#ddd'
                    }
                }
            }
        ];
    } else {
        return setting;
    }
};
export const _getSeries = opts => {
    const { datasetSource = [], setting, label, Y2Show, Y2Type, Y2Index } = opts;
    const type = _getType(Y2Type);
    const series = [];
    for (let i = 1, len = datasetSource.length; i < len; i++) {
        if (isArray(label)) {
            setting.label = label[i];
        } else {
            setting.label = label;
        }
        if (Y2Show && Y2Index === i - 1) {
            series.push({ ...setting, ...type, yAxisIndex: 1 });
        } else {
            series.push(setting);
        }
    }
    return series;
};
export const _resetLegend = opts => {
    const { legendData, legendDict, datasetSource = [] } = opts;
    if (_.isArray(legendData)) {
        return datasetSource.map((row, i) => {
            if (i === 0) {
                row[0] = "legendType";
            } else {
                row[0] = legendData[i - 1];
            }
            return row;
        });
    } else if (_.isObject(legendDict)) {
        return datasetSource.map((row, i) => {
            if (i === 0) {
                row[0] = "legendType";
            } else {
                const name = row[0];
                row[0] = legendDict[name];
            }
            return row;
        });
    } else {
        return datasetSource;
    }
};
export const _toDataset = opts => {
    const { data, yIndex, dataReverse } = opts;
    if (dataReverse) {
        const datasetSource = toDatasetReverse(data, yIndex);
        return datasetSource.map(row => {
            return swap(row, yIndex);
        });
    } else {
        const datasetSource = toDataset(data, yIndex);
        return swap(datasetSource, yIndex);
    }
};