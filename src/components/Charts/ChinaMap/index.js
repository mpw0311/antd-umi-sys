import React, { Component } from 'react';
import Chart from '../basic';
import _ from 'lodash';
import Loading from '../Loading';
import { showLoading } from '../_';
//替换值
const replace = (rows, target) => {
    return rows.map((item, i) => {
        return {
            value: item[target] || 0,
            rank: i + 1,
            ...item
        };
    });
};
//倒序排序
const sort = (rows, target) => rows.sort(function (a, b) { return b[target] - a[target]; });
const dataCheck = (data) => {
    return showLoading(data);
};
class Index extends Component {

    render() {
        const {
            data = {},
            loading,
            style,
            target,
            title,
            seriesName = '',
            tooltipFormatter,
            roam = false
        } = this.props;
        import("../mapData/china");
        if (loading === true) {
            return (<Loading loading style={style} />);
        } else if (dataCheck(data)) {
            return (<Loading nodata style={style} />);
        }
        const { rows } = data;
        const sortdata = sort(rows, target);
        const seriesdata = replace(sortdata, target);
        const barData = seriesdata.sort((a, b) => a.value - b.value);
        const yData = barData.map(item => item.name);
        const max = _.maxBy(seriesdata, o => o.value).value;
        const option = {
            title: {
                text: title,
                top: '5%',
                left: 'center',
                textStyle: {
                    color: '#666',
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: 'normal'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: tooltipFormatter || function (params) {
                    const { seriesName, name, value, marker } = params;
                    return `<div>
                        ${seriesName} <br/>
                        ${marker}
                        ${name}:${value}<br/>
                    </div>`;
                },
                backgroundColor: 'rgba(220,220,220,0.9)'
            },
            visualMap: {
                seriesIndex: [0],
                min: 0,
                max,
                left: '10',
                top: 'bottom',
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true,
                // color: ['#002766','#bae7ff']
                inRange: {
                    color: ['#e3fbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096',]
                },
                // color: ['orangered', 'yellow', 'lightskyblue']
            },
            grid: {
                right: 70,
                top: 60,
                bottom: 30,
                width: '15%'
            },
            xAxis: {
                type: 'value',
                scale: true,
                position: 'top',
                splitNumber: 1,
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 2,
                    textStyle: {
                        color: '#aaa'
                    }
                }
            },
            yAxis: {
                type: 'category',
                nameGap: 16,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#999'
                    }
                },
                data: yData
            },
            // geo: {
            //     right:'300',
            //     layoutSize: '80%',
            // },
            series: [{
                name: seriesName,
                type: 'map',
                geoIndex: 0,
                left: '20%',
                right: '25%',
                mapType: 'china',
                roam,//鼠标放大缩小
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        color: '#333'
                    }
                },
                itemStyle: {
                    // normal: {
                    //     areaColor: '#323c48',
                    //     borderColor: '#111'
                    // },
                    // emphasis: {
                    //     areaColor: '#2a333d'
                    // }
                },
                data: seriesdata
            },
            {
                name: 'barSer',
                type: 'bar',
                roam: false,
                visualMap: false,
                zlevel: 2,
                barMaxWidth: 20,
                itemStyle: {
                    normal: {
                        color: '#40a9ed'
                    },
                    emphasis: {
                        color: "#3596c0"
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        // offset: [0, 10]
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        offset: [10, 0]
                    }
                },
                data: barData
            }
            ]
        };
        return (
            <Chart
                option={option}
                style={style}
            />
        );
    };
};
export default Index;