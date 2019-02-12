import { Component } from 'react';
import Chart from '../basic';
import { message } from 'antd';

class Sankey extends Component {
    constructor(props) {
        super(props);
        const { handleClick } = props;
        this.state = {
            onEvents: {
                contextmenu: (params) => {
                    const { event } = params;
                    const e = event.event;
                    e.preventDefault();
                    handleClick(params, e);
                }
            }
        };
    }
    componentDidUpdate(nextProps, nextState) { //eslint-disable-line
    }
    render() {
        const {
            data,
            style,
            loading,
            showDrain = false //是否显示流失
        } = this.props;
        const { onEvents } = this.state;
        let series = [];
        const getDrain = (data = {}, node) => {
            const { nodes = [], links = [] } = data;
            let nodeSource = 0;
            let nodeTarget = 0;
            for (let d of nodes) {
                if (d.name === node) {
                    nodeSource = parseFloat(d.value);
                    break;
                }
            }
            for (let d of links) {
                const { source, value } = d;
                if (source === node) {
                    nodeTarget += parseFloat(value);
                }
            }
            return nodeSource - nodeTarget;
        };
        if (data) {
            series = [
                {
                    type: 'sankey',
                    layoutIterations: 64,
                    layout: 'none',
                    data: data.nodes,
                    links: data.links,
                    // nodeWidth: 40,
                    // nodeHeight: 100,
                    focusNodeAdjacency: 'allEdges',
                    draggable: true,
                    right: 200,
                    left: 20,
                    label: {
                        // show: false
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
                triggerOn: 'mousemove',
                formatter: function (a) { // eslint-disable-line
                    const { name, value, dataType } = a;
                    if (dataType === 'edge') {
                        return name;
                    }
                    // const _name = name.length > 10 ? `${name.slice(0, 10)}...` : name;
                    if (showDrain) {
                        const drain = getDrain(data, name);
                        const str = parseFloat(value) === drain ? '' : `流失：${drain}`;
                        return `${name}：${value} <br/> ${str}`;
                    } else {
                        return `${name}：${value}`;
                    }
                },
            },
            series
        };

        return (
            <Chart
                option={option}
                style={style}
                onEvents={onEvents}
                showLoading={loading}
            // opts={{ renderer: 'svg' }}
            />
        );
    }

}
export default Sankey;
