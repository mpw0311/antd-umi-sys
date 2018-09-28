import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import _ from 'lodash';
import chartConfig from '../config';
import { showLoading } from '../_';
const data = [
    {
        name: '直达',
        children: [
            { value: 335, name: '直达' },
        ]
    },
    {
        name: '营销广告',
        children: [
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
        ]
    },
    {
        name: '搜索引擎',
        children: [
            { value: 1048, name: '百度' },
            { value: 251, name: '谷歌' },
            { value: 147, name: '必应' },
            { value: 102, name: '其他' }
        ]
    },

];
class PieNest extends Component {
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
            // data = [],
            name = '访问来源',
            style,
            title,
            subtitle,
        } = this.props;
        const { onEvents } = this.state;
        const innerData = data.map(item => {
            const { name, children } = item;
            return {
                name,
                value: children.reduce((total, item) => {
                    return total + item.value;
                }, 0)
            };
        });
        const outsideData = _.flatten(data.map(item => item.children));
        const legendData = [...innerData, ...outsideData].map(item => item.name);
        const series = [
            {
                name,
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: innerData
            },
            {
                name,
                type: 'pie',
                radius: ['40%', '55%'],
                label: {
                    normal: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'center'
                            },
                            // abg: {
                            //     backgroundColor: '#333',
                            //     width: '100%',
                            //     align: 'right',
                            //     height: 22,
                            //     borderRadius: [4, 4, 0, 0]
                            // },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data: outsideData
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
export default PieNest;