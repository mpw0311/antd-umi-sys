/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import { PureComponent } from 'react';
import Chart from '../../core';
import getTitle from '../../components/title';
import getToolbox from '../../components/toolbox';
import getGrid from '../../components/grid';

export default class extends PureComponent {
    static defaultProps = {
        data: {},
        type: 'k',
        loading: false,
    }
    render() {
        const { data, height, style, loading, onChartReady, onEvents, YName, yAxis, xAxis } = this.props;
        const dataSource = Array.isArray(data) ? data.slice(1) : [];
        const xAxisData = Array.isArray(dataSource) ? dataSource.map(item => item[0]) : [];
        const seriesData = Array.isArray(data) ? dataSource.map(item => item.slice(1)) : [];
        const option = {
            title: getTitle(this.props),
            toolbox: getToolbox(this.props),
            xAxis: {
                data: xAxisData,
                ...xAxis
            },
            yAxis: {
                name: YName,
                ...yAxis,
            },
            series: [{
                type: 'k',
                data: seriesData
            }],
            grid: getGrid(this.props),
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