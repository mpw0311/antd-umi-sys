/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.1
 * @description 
 */
import getType from './type';
export default (props) => {
    const { series, source, type, seriesLayoutBy, seriesSettings, showY2, Y2Series, stack, showLabel, labelPosition } = props;
    /**
     * 生成对应的y2轴对应index索引
     * index第一个索引从0开始
     * Y2Series:[
     *   {
     *       type: 'bar',
     *       index: 2,
     *   },
     *   {
     *       type: 'bar',
     *       name: 'Cheese Cocoa'
     *   }
     * ]
     */
    const GetY2Series = (source, Y2Series) => {
        return Y2Series.map(item => {
            if (!(source && source[0] && item.index === undefined)) return item;
            if (seriesLayoutBy === 'row') {
                const index = source.findIndex(curr => curr[0] === item.name) - 1;
                if (index < 0) {
                    console.warn(`echarts-series:未找到要匹配的Y2值(${item.name})`);
                }
                return {
                    ...item,
                    index: index
                };
            } else {
                const index = source[0].indexOf(item.name) - 1;
                if (index < 0) {
                    console.warn(`echarts-series:未找到要匹配的Y2值(${item.name})`);
                }
                return {
                    ...item,
                    index: index
                };
            }
        })
            .filter(item => item.index > -1);
    };
    const _getSeries = () => {
        const _series = [];
        const len = seriesLayoutBy === 'row' ? source.length - 1 : source[0].length - 1;
        for (let i = 0; i < len; i++) {
            _series.push({
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
            });
        }
        if (showY2 === true) {
            const _Y2Series = GetY2Series(source, Y2Series);
            _Y2Series.forEach(item => {
                const { type, index } = item;
                _series[index] = { ..._series[index], type, yAxisIndex: 1 };
            });
        }
        return _series;
    };

    return series || _getSeries();
};