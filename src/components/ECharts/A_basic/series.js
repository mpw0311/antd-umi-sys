/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import getType from './type';
export default (props) => {
    const { series, data: { rows }, type, seriesLayoutBy, seriesSettings, showY2, Y2Series, stack, showLabel, labelPosition } = props;
    const _geySeries = () => {
        const _series = rows.map(() => {
            return {
                type: getType(type),
                stack: stack === true ? '总量' : null,
                ...seriesSettings,
                seriesLayoutBy,
                label: {
                    normal: {
                        show: showLabel,
                        position: labelPosition
                    }
                }
            };
        });
        if (showY2 === true) {
            Y2Series.forEach(item => {
                const { type, index } = item;
                _series[index] = { ..._series[index], type, yAxisIndex: 1 };
            });
        }
        return _series;
    };

    return series || _geySeries();
};