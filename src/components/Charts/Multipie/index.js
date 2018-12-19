import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartConfig from '../config';
import Loading from '../Loading';
import { _getCoord, _getSeries, _getLegendData, _getGraphic } from './_';
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
            loading
        } = this.props;
        if (loading === true) {
            return (<Loading loading style={style} />);
        } else if (dataCheck(data)) {
            return (<Loading nodata style={style} />);
        }
        const { onEvents } = this.state;
        const legendData = _getLegendData(data);
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
        const coords = _getCoord(data);
        const series = _getSeries(data, seriesSettings, coords);
        const graphic = _getGraphic(data);
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                left: 'left',
                data: legendData
            },
            graphic,
            series
        };
        console.log(JSON.stringify(option));
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