import PropTypes from 'prop-types';
import titlePropTypes from '../components/title.propTypes';
import legendPropTypes from '../components/legend.propTypes';
import toolboxPropTypes from '../components/toolbox.propTypes';
import gridPropTypes from '../components/grid.propTypes';

export default {
    ...titlePropTypes,
    ...legendPropTypes,
    ...toolboxPropTypes,
    ...gridPropTypes,
    //调色盘颜色列表
    color: PropTypes.array,
    //支持的图形类型
    type: PropTypes.oneOf(['line', 'area', 'bar', 'bar-y', 'k']),
    //数据格式校验
    data: PropTypes.shape({
        columns: PropTypes.array,
        rows: PropTypes.array,
    }),
    //echart组件div样式
    style: PropTypes.object,
    //是否显示正在加载中
    loading: PropTypes.bool,
    //是否显示dataZoom 组件
    showDataZoom: PropTypes.bool,
    //可以传入tooltip配置，校验
    tooltip: PropTypes.object,
    //是否显示tootip
    showTooltip: PropTypes.bool,
    //axisPointer类型
    axisPointer: PropTypes.oneOf(['shadow', 'cross', undefined]),
    //x轴配置
    xAxis: PropTypes.object,
    //坐标轴刻度标签的显示间隔，在类目轴中有效。
    interval: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
    //旋转的角度从 -90 度到 90 度。
    xAxisRotate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    //y轴配置
    yAxis: PropTypes.object,
    //最大值
    maxPoint: PropTypes.bool,
    //最小值
    minPoint: PropTypes.bool,
    //平均值
    averageLine: PropTypes.bool,
    //图形系列(series)配置项
    series: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    //单个图形系列(series[i])配置项
    seriesSettings: PropTypes.object,
    //指定 dataset 的列（column）还是行（row）映射为图形系列（series）
    seriesLayoutBy: PropTypes.oneOf(['column', 'row']),
    //y轴name
    YName: PropTypes.string,
    //y2轴name
    Y2Name: PropTypes.string,
    //y轴单位
    YUnit: PropTypes.string,
    //是否显示y2轴
    showY2: PropTypes.bool,
    //Y2Series，Y2SeriesName,Y2SeriesIndex和Y2Type都用来指定y2轴绑定的数据，选其一
    //y2轴映射数据索引及类型，权重：3
    Y2Series: PropTypes.arrayOf(PropTypes.object),
    //y2轴图形类型，权重：2
    Y2Type: PropTypes.oneOf(['line', 'bar']),
    //通过属性名指定y2轴图形索引，权重2
    Y2SeriesName: PropTypes.array,
    //y2轴图形索引，权重1
    Y2SeriesIndex: PropTypes.array,
    //y2轴单位
    Y2Unit: PropTypes.string,
    //系列列表堆叠
    stack: PropTypes.bool,
    //系列列表文本标签
    showLabel: PropTypes.bool,
    //系列列表文本标签的显示位置
    labelPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'inside', 'insideLeft', 'insideRight', 'insideTop', 'insideBottom', 'insideTopLeft', 'insideBottomLeft', 'insideTopRight', 'insideBottomRight']),
    //when the chart is ready, will callback the function with the echarts object as it's paramter.
    onChartReady: PropTypes.func,
    //binding the echarts event, will callback with the echarts event object, and the echart object as it's paramters
    onEvents: PropTypes.object,
};