import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartConfig from '../config';
import { toDataset, getMark, showLoading } from '../_';


const onChartReadyCallback = (echartObj) => {
    setTimeout(() => {
        echartObj.resize();
    }, 200);
};
class Bar extends Component {
    constructor(props) {
        super(props);
        const { handleClick } = props;
        this.state = {
            onEvents: {
                click: (params) => {
                    handleClick(params);
                }
            }
        };
    }
    render() {
        const {
            data = {},
            style,
            title = '',
            maxShow = false,
            minShow = false,
            averageShow = false
        } = this.props;
        const { onEvents } = this.state;
        const datasetSource = toDataset(data);
        const mark = getMark({ maxShow, minShow, averageShow });
        const series = [];
        for (let i = 1; i < datasetSource.length; i++) {
            series.push({
                type: 'bar',
                ...mark,
                seriesLayoutBy: 'row'
            });
        }
        const option = {
            title: {
                text: title
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                bottom: 10
            },
            grid: {
                top: 40,
                bottom: 70
            },
            dataset: {
                source: datasetSource
            },
            xAxis: {
                type: 'category',
                // gridIndex: 0
            },
            yAxis: {
                type: 'value'
            },
            series
        };
        return (
            <ReactEcharts
                option={option}
                {...chartConfig}
                style={style}
                onChartReady={onChartReadyCallback}
                onEvents={onEvents}
                showLoading={showLoading(data)}
            />
        );
    }
}
export default Bar;