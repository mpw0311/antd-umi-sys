/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.1
 * @description 
 */
import getType from './type';
import setY2Series from './setY2Series';
export default (props) => {
    const {
        series,
        dataSource,
        type,
        seriesLayoutBy,
        seriesSettings,
        showY2,
        stack,
        showLabel,
        labelPosition,
        maxPoint,
        minPoint,
        averageLine
    } = props;
    const setting = { ...seriesSettings };
    if (maxPoint === true) {
        const { markPoint = {} } = setting;
        const { data = [] } = markPoint;
        markPoint.data = [...data, { type: 'max', name: '最大值' }];
        setting.markPoint = markPoint;
    }
    if (minPoint === true) {
        const { markPoint = {} } = setting;
        const { data = [] } = markPoint;
        markPoint.data = [...data, { type: 'min', name: '最小值' }];
        setting.markPoint = markPoint;
    }
    if (averageLine === true) {
        const { markLine = {} } = setting;
        const { data = [] } = markLine;
        markLine.data = [...data, { type: 'min', name: '最小值' }];
        setting.markLine = markLine;
    }
    const _getSeries = () => {
        const _series = [];
        const len = seriesLayoutBy === 'row' ? dataSource.length - 1 : dataSource[0].length - 1;
        for (let i = 0; i < len; i++) {
            _series.push({
                type: getType(type),
                stack: stack === true ? '总量' : null,
                ...setting,
                seriesLayoutBy,
                label: {
                    normal: {
                        show: showLabel,
                        position: labelPosition
                    }
                }
            });
        }
        return _series;
    };
    const y1Series = series || _getSeries();
    if (showY2 === true) {
        return setY2Series({ ...props, series: y1Series });
    }
    return y1Series;
};