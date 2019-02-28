import { PureComponent } from 'react';
import Chart from '../core';
import { _isData } from '../methods';
import PropTypes from 'prop-types';
import getTooltip from './tooltip';
import getLegend from './legend';
import getDataset from './dataset';
import getXAxis from './xAxis';
import getYAxis from './yAxis';
import getSeries from './series';
class BasicChart extends PureComponent {
    static defaultProps = {
        data: {},
        type: 'line',
        loading: false,
        showTooltip: true,
        axisPointer: 'shadow',
        showLegend: true
    }
    render() {
        const { data } = this.props;
        if (!_isData(data)) {
            return (<div>无数据</div>);
        }
        const option = {
            tooltip: getTooltip(this.props),
            legend: getLegend(this.props),
            dataset: getDataset(this.props),
            xAxis: getXAxis(this.props),
            yAxis: getYAxis(this.props),
            series: getSeries(this.props)
        }
        return (
            <Chart
                option={option}
            />
        );
    }
}
export default BasicChart;

BasicChart.propTypes = {
    type: PropTypes.oneOf(['line', 'area', 'bar']),
    data: PropTypes.shape({
        columns: PropTypes.array,
        rows: PropTypes.array,
    }),
    loading: PropTypes.bool,
    title: PropTypes.string,

    tooltip: PropTypes.object,
    showTooltip: PropTypes.bool,
    axisPointer: PropTypes.oneOf(['cross', 'shadow', undefined]),

    legend: PropTypes.object,
    showLegend: PropTypes.bool,

    xAxis: PropTypes.object,
    yAxis: PropTypes.object,

    series: PropTypes.object,
    seriesLayoutBy: PropTypes.oneOf(['column', 'row']),
};