import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartConfig from '../config';
import { showLoading } from '../_';

class PieCustom extends Component {
    constructor(props) {
        super(props);
        const { handleClick = () => { } } = props;
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
                data: data.sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            // color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            // color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) { //eslint-disable-line
                    return Math.random() * 200;
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
export default PieCustom;