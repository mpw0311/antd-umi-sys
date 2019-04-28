/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.1
 * @description 
 */
import { PureComponent } from 'react';
import Chart from '../core';
import { _isData } from '../methods';
import getTooltip from './tooltip';
import getTitle from '../components/title';
import getToolbox from '../components/toolbox';
import getLegend from '../components/legend';
import getDataset from './dataset';
import getSeries from './series';
import propTypes from './index.propTypes';

class BasicChart extends PureComponent {
    static defaultProps = {
        height: '100%',
        data: {},
        dataType: 'dataset',
        type: 'funnel',
        loading: false,
        showTooltip: true,
        showLegend: true,
        legendLeft: 'center',
        showToolbox: false,
        showToolboxDataZoom: false,
        showToolboxDataView: false,
        showToolboxMagicType: true,
        toolboxMagicType: ['line', 'bar'],
        showToolboxRestore: true,
        showToolboxSaveAsImage: false,
        seriesSettings: {},
        sort: 'none',
    }
    render() {
        const {
            type,
            data,
            dataType,
            loading,
            style,
            height,
            onChartReady,
            onEvents,
            color
        } = this.props;
        if (!_isData(data, dataType)) {
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
        const option = {
            title: getTitle(this.props),
            tooltip: getTooltip(this.props),
            toolbox: getToolbox(this.props),
            legend: getLegend(this.props),
            dataset: getDataset(this.props),
            series: getSeries(this.props),
            color
        };
        if (type === 'radar') {
            option.radar = this.props.radar;
        }
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

BasicChart.propTypes = propTypes;