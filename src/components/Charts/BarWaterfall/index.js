import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import _ from 'lodash';
import chartConfig from '../config';
import { formatNumer, showLoading } from '../_';

class BarWaterfall extends Component {
    constructor(props) {
        super(props);
        const { handleClick = () => { }, } = props;
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
            data = [],
            style,

            title = '',
            unit = '', // eslint-disable-line
        } = this.props;

        const dd = _.cloneDeep(data);
        let sum = 0;
        for (let i = dd.length - 1; i >= 0; i--) {
            dd[i].data1 = sum;
            sum += dd[i].data;
        }
        dd.unshift({
            name: "总计",
            type: "number",
            data: sum,
            data1: 0,
        });
        const xAxisData = dd.map(item => item.name);
        const seriesData = ["data1", "data"].map(index => {
            return dd.map(item => item[index]);
        });
        const setting = [
            {
                name: '辅助',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)',
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)',
                    },
                },
            },
            {
                name: '生活费',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function (params) { // eslint-disable-line
                            const { value } = params;
                            return formatNumer(value);
                        },
                    },
                },
            },
        ];
        const series = seriesData.map((row, i) => {
            return {
                ...setting[i],
                data: row,
            };
        });
        const option = {
            title: {
                text: title,
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 14,
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow',     // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) { // eslint-disable-line
                    const { name, value } = params[1];
                    const percent = (value / sum * 100).toFixed(2);
                    return `${name}：${formatNumer(value)} <br/>占比：${percent}%`;// + unit;
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                splitLine: { show: false },
                data: xAxisData,
            },
            yAxis: {
                type: 'value',
            },
            series,
        };

        return (
            <ReactEcharts
                option={option}
                {...chartConfig}
                style={style}
                onEvents={this.state.onEvents}
                showLoading={showLoading(data)}
            />
        );
    }
}
export default BarWaterfall;
