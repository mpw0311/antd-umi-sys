/**
 * author：M
 * E-mail: mpw0311@163.com
 */
import getType from './type';
export default (props) => {
    const { series, data: { rows }, type, seriesLayoutBy, showY2, Y2Series, stack, showLabel, labelPosition } = props;
    const setting = type.toLowerCase() === 'area' ? {
        areaStyle: {},
    } : {};
    const _series = rows.map((item, i) => {
        if (i === 0) {
            return undefined;
        } else {
            return {
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
            };
        }
    })
        .filter(item => item !== undefined);
    if (showY2 === true) {
        Y2Series.forEach(item => {
            const { type, index } = item;
            _series[index] = { ..._series[index], type, yAxisIndex: 1 }
        });
    }
    return series || _series;
}