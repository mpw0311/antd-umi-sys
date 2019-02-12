import { Component } from 'react';
import Chart from '../basic';
import _ from 'lodash';
import '../mapData/china';
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
class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            data = {},
            style,
            target,
            title,
            seriesName = '',
            tooltipFormatter
        } = this.props;
        const { rows } = data;
        const sortdata = sort(rows, target);
        const seriesdata = replace(sortdata, target);
        const max = _.maxBy(seriesdata, o => o.value).value;
        const option = {
            title: {
                text: title,
                top: '10%',
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
                min: 0,
                max,
                left: '10',
                top: 'bottom',
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true,
                // color: ['#002766','#bae7ff']
                color: ['orangered', 'yellow', 'lightskyblue']
            },
            series: {
                name: seriesName,
                type: 'map',
                mapType: 'china',
                roam: false,
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
            }
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