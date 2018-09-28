import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartConfig from '../config';
import { showLoading } from '../_';

class Pie extends Component {
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
            data = [],
            name = '访问来源',
            style,
            title,
            subtitle,
        } = this.props;
        const { onEvents } = this.state;
        const legendData = data.map(item => item.name);
        const series = [
            {
                name,
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ];
        const option = {
            title: {
                text: title,
                subtext: subtitle,
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: legendData
            },
            series
        };
        return (
            <ReactEcharts
                option={option}
                {...chartConfig}
                style={style}
                onEvents={onEvents}
                showLoading={showLoading(data)}
            />
        );
    }
}
export default Pie;