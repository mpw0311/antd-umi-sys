import PropTypes from 'prop-types';
import titlePropTypes from '../components/title.propTypes';
import legendPropTypes from '../components/legend.propTypes';
import toolboxPropTypes from '../components/toolbox.propTypes';

export default {
    ...titlePropTypes,
    ...legendPropTypes,
    ...toolboxPropTypes,
    //调色盘颜色列表
    color: PropTypes.array,
    //支持的图形类型
    type: PropTypes.oneOf(['funnel', 'pie', 'sankey']),
    //数据格式校验
    data: PropTypes.shape({
        columns: PropTypes.array,
        rows: PropTypes.array,
    }),
    dataType: PropTypes.oneOf(['dataset', 'tabel', 'special']),
    //echart组件div样式
    style: PropTypes.object,
    //是否显示正在加载中
    loading: PropTypes.bool,
    //可以传入tooltip配置，校验
    tooltip: PropTypes.object,
    //是否显示tootip
    showTooltip: PropTypes.bool,
    //图形系列(series)配置项
    series: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    //单个图形系列(series[i])配置项
    seriesSettings: PropTypes.object,
    //漏斗图数据排序
    sort: PropTypes.oneOf(['ascending', 'descending', 'none']),
    //图形系列(series)name
    seriesName: PropTypes.string,
    //when the chart is ready, will callback the function with the echarts object as it's paramter.
    onChartReady: PropTypes.func,
    //binding the echarts event, will callback with the echarts event object, and the echart object as it's paramters
    onEvents: PropTypes.object,
};