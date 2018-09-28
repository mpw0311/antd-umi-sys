import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
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

        const total = data.reduce((total, item) => {
            return total + item.value;
        }, 0);

        let residue = total;

        const row0 = data.map(item => {
            const res = residue - item.value;
            residue = res;
            return res;
        });
        row0.unshift(0);

        const row1 = data.map(item => item.value);
        row1.unshift(total);
        const xAxisData = data.map(item => item.name);
        xAxisData.unshift('总计');



        const series = [
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
                data: row0
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
                data: row1
            },
        ];
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
                    const percent = (value / total * 100).toFixed(2);
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
