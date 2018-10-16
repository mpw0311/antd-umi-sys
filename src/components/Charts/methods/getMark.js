
import _ from 'lodash';
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
