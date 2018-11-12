import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import _ from 'lodash';
import chartConfig from '../config';
import { showLoading } from '../_';
const transformdata = (data = {}) => {
    const { columns = [], rows = [] } = data;
    const { field: nameId } = columns[0] || {};
    const { field: valueId } = columns[1] || {};
    return rows.map((item) => {
        return {
            name: item[nameId],
            value: item[valueId]
        };
    });
};
class Pie extends Component {
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
        const _data = _.isArray(data) ? data : transformdata(data);
        const { onEvents } = this.state;
        const legendData = _data.map(item => item.name);
        const series = [
            {
                name,
                type: 'pie',
                radius: '65%',
                center: ['50%', '55%'],
                data: _data,
                label: {
                    normal: {
                        formatter: '{b}：{d}%',
                        textStyle: {
                            // color: 'rgba(0, 0, 0, 0.8)'
                            fontSize: 14
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            // color: 'rgba(0, 0, 0, 0.7)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
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