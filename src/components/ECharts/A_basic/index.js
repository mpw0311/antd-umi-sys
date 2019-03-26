/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import { PureComponent } from 'react';
import Chart from '../core';
import { _isData } from '../methods';
import PropTypes from 'prop-types';
import getTooltip from './tooltip';
import getToolbox from './toolbox';
import getLegend from './legend';
import getDataset from './dataset';
import getXAxis from './xAxis';
import getYAxis from './yAxis';
import getSeries from './series';
import getGrid from './grid';
import getTitle from './title';
import getDataZoom from './dataZoom';
import { _toDataset } from '../methods';
class BasicChart extends PureComponent {
    static defaultProps = {
        height: '100%',
        data: {},
        type: 'line',
        loading: false,
        showTooltip: true,
        interval: 'auto',
        xAxisRotate: 0,
        axisPointer: 'shadow',
        showLegend: true,
        legendOrient: 'horizontal',
        legendLeft: 'center',
        seriesLayoutBy: 'row',
        seriesSettings: {},
        showY2: false,
        Y2Series: [
            {
                type: 'line',
                index: 1
            }
        ],
        showY2SplitLine: false,
        showToolbox: false,
        showToolboxDataZoom: false,
        showToolboxDataView: false,
        showToolboxMagicType: true,
        toolboxMagicType: ['line', 'bar', 'stack', 'tiled'],
        showToolboxRestore: true,
        showToolboxSaveAsImage: false,
        stack: false,
        showLabel: false,
        labelPosition: 'insideTop',
        showDataZoom: false
    }
    render() {
        const { data, loading, height, style, onChartReady, onEvents } = this.props;
        if (!_isData(data)) {
            return (
                <div style={{
                    width: '100%',
                    height,
                    color: '#555',
                    fontSize: 16,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...style
                }}>
                    <span >无数据</span>
                </div>
            );
        }
        const source = _toDataset(data);
        const option = {
            title: getTitle(this.props),
            tooltip: getTooltip(this.props),
            toolbox: getToolbox(this.props),
            dataZoom: getDataZoom(this.props),
            legend: getLegend(this.props),
            dataset: getDataset({ source, ...this.props }),
            xAxis: getXAxis(this.props),
            yAxis: getYAxis(this.props),
            grid: getGrid(this.props),
            series: getSeries({ source, ...this.props })
        };
        return (
            <Chart
                height={height}
                style={style}
                option={option}
                showLoading={loading}
                onChartReady={onChartReady}
                onEvents={onEvents}
            />
        );
    }
}
export default BasicChart;

BasicChart.propTypes = {
    //组件标题配置项
    title: PropTypes.object,
    //组件标题
    titleText: PropTypes.string,
    //调色盘颜色列表
    color: PropTypes.array,
    //支持的图形类型
    type: PropTypes.oneOf(['line', 'area', 'bar', 'bar-y']),
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
    //图形图例配置项
    legend: PropTypes.object,
    //是否显示图例
    showLegend: PropTypes.bool,
    //图例列表的布局朝向。
    legendOrient: PropTypes.oneOf(['horizontal', 'vertical']),
    //图例组件离容器左侧的距离。
    legendLeft: PropTypes.oneOf(['left', 'right', 'center']),
    //图例组件离容器右侧的距离。
    legendRight: PropTypes.oneOf(['left', 'right', 'center']),
    //图例组件离容器上侧的距离。
    legendTop: PropTypes.oneOf(['top', 'bootom', 'middle']),
    //图例组件离容器底侧的距离。
    legendBottom: PropTypes.oneOf(['top', 'bootom', 'middle']),
    //直角坐标系内绘图网格配置
    grid: PropTypes.object,
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
    //y2轴单位
    Y2Unit: PropTypes.string,
    //y2轴映射数据索引及类型
    Y2Series: PropTypes.arrayOf(PropTypes.object),
    //工具栏配置项
    toolbox: PropTypes.object,
    //是否显示工具栏
    showToolbox: PropTypes.bool,
    //区域缩放
    showToolboxDataZoom: PropTypes.bool,
    //数据视图
    showToolboxDataView: PropTypes.bool,
    //是否图形切换
    showToolboxMagicType: PropTypes.bool,
    //图形切换类型['stack', 'tiled']或['line','bar']或['line','bar','stack', 'tiled']
    toolboxMagicType: PropTypes.array,
    //刷新还原
    showToolboxRestore: PropTypes.bool,
    //保存为图片
    showToolboxSaveAsImage: PropTypes.bool,
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