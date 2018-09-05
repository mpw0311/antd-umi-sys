import ReactEcharts from 'echarts-for-react';
import { message } from 'antd';
import chartConfig from './config';

function Sankey(props) {
    const { data, style, handleClick = () => { } } = props;
    let series = [];
    const getDrain = (data = {}, node) => {
        const { nodes = [], links = [] } = data;
        let nodeSource = 0;
        let nodeTarget = 0;
        for (let d of nodes) {
            if (d.name === node) {
                nodeSource = d.value;
                break;
            }
        }
        for (let d of links) {
            if (d.source === node) {
                nodeTarget += d.value;
            }
        }
        return nodeSource - nodeTarget;
    };
    if (data) {
        series = [
            {
                type: 'sankey',
                layout: 'none',
                data: data.nodes,
                links: data.links,
                nodeWidth: 140,
                // nodeHeight: 100,
                focusNodeAdjacency: 'allEdges',
                draggable: false,
                right: 20,
                left: 20,
                label: {
                    normal: {
                        position: 'insideLeft|insideTop',
                        formatter: function (a) { // eslint-disable-line
                            // var data = eval(a['data']);
                            // return (data.label + '\n\n' + 'P1: ' + data.p1 + '\n'
                            //     + 'P2: ' + data.p2 + '\n' + 'P3: '
                            //     + data.p3 + '\n' + 'P4: ' + data.p4);
                            const name = a.name;
                            const drain = getDrain(data, name);
                            if (name.length > 13) {
                                return `${name.slice(0, 13)}...：${a.value}`;
                            }
                            const str = a.value === drain ? '' : `\n{b|流失：${drain}}`;
                            return `{a|${a.name}：${a.value}}${str}`;
                        },
                        // color : '#fff',
                        padding: [10, 0, 0, 10],
                        rich: {
                            a: {
                                // color: 'red',
                                lineHeight: 20
                            },
                            b: {
                                // color: 'red',
                                lineHeight: 20
                            },
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ];
    } else {
        message.error('无数据');
    }
    const option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        color: [
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
            "#35C6E9",
        ],
        series
    };
    const onChartReadyCallback = (echartObj) => {
        setTimeout(() => {
            echartObj.resize();
        }, 1000);
    };
    const onEvents = {
        click: (params) => {
            if (params.dataType === "node") {
                handleClick(params);
            }
        }
    };
    return (
        <ReactEcharts
            option={option}
            {...chartConfig}
            style={style}
            onChartReady={onChartReadyCallback}
            onEvents={onEvents}
        />
    );
}
export default Sankey;
