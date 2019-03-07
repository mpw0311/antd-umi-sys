/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
export default (props) => {
    const { yAxis, YName, YUnit, showY2, Y2Name, Y2Unit, showY2SplitLine } = props;
    const YFormatter = YUnit ? { formatter: `{value}${YUnit}` } : {};
    const Y2Formatter = Y2Unit ? { formatter: `{value}${Y2Unit}` } : {};
    if (showY2) {
        return [
            {
                name: YName,
                axisLabel: {
                    ...YFormatter
                },
            },
            {
                name: Y2Name,
                axisLabel: {
                    ...Y2Formatter
                },
                splitLine: {
                    show: showY2SplitLine,
                    lineStyle: {
                        type: 'dashed',
                        color: '#ddd'
                    }
                }
            }

        ];
    } else {
        return {
            name: YName,
            axisLabel: {
                ...YFormatter
            },
            ...yAxis,
        };
    }
};