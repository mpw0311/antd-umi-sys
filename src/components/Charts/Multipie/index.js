import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartConfig from '../config';
import Loading from '../Loading';
import { _getCoord, _getSeries, _getLegendData } from './_';
import { showLoading } from '../_';

const dataCheck = (data) => {
    return showLoading(data);
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
            style,
            title,
            subtitle,
            loading
        } = this.props;
        if (loading === true) {
            return (<Loading loading style={style} />);
        } else if (dataCheck(data)) {
            return (<Loading nodata style={style} />);
        }
        const { onEvents } = this.state;
        const legendData = _getLegendData;
        const seriesSettings = {
            type: 'pie',
            label: {
                normal: {
                    formatter: '{b}：{d}%',
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.8)',
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
        };
        const coords=_getCoord(data);
        const series = _getSeries(data, seriesSettings, coords);
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
            />
        );
    }
}
export default Pie;