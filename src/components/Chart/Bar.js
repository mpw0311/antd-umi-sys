import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartConfig from './config';
import { toDataset, getMark, showLoading } from './_';

// const data = {
//     columns: [
//         {
//             field: "category",
//             name: "分类",
//             type: "string"
//         },
//         {
//             field: "amount_1",
//             name: "1k-3k",
//             type: "number"
//         },
//         {
//             field: "amount_2",
//             name: "3k-1w",
//             type: "number"
//         },
//         {
//             field: "amount_3",
//             name: "1w-3w",
//             type: "number"
//         },
//         {
//             field: "amount_4",
//             name: "3w-5w",
//             type: "number"
//         },
//         {
//             field: "amount_4",
//             name: "5w-10w",
//             type: "number"
//         },
//         {
//             field: "amount_5",
//             name: ">=10w",
//             type: "number"
//         },

//     ],
//     rows: [
//         {
//             category: '低于30%',
//             amount_1: 24,
//             amount_2: 53,
//             amount_3: 23,
//             amount_4: 73,
//             amount_5: 93,
//         },
//         {
//             category: '30%-50%',
//             amount_1: 24,
//             amount_2: 53,
//             amount_3: 23,
//             amount_4: 73,
//             amount_5: 93,
//         },
//         {
//             category: '50%-65%',
//             amount_1: 24,
//             amount_2: 53,
//             amount_3: 23,
//             amount_4: 73,
//             amount_5: 93,
//         },
//         {
//             category: '65%-75%',
//             amount_1: 24,
//             amount_2: 53,
//             amount_3: 23,
//             amount_4: 73,
//             amount_5: 93,
//         },
//         {
//             category: '75%-85%',
//             amount_1: 24,
//             amount_2: 53,
//             amount_3: 23,
//             amount_4: 73,
//             amount_5: 93,
//         },
//         {
//             category: '高于85%',
//             amount_1: 24,
//             amount_2: 53,
//             amount_3: 23,
//             amount_4: 73,
//             amount_5: 93,
//         },
//     ]
// };
class Bar extends Component {
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
            data = {},
            style,
            // handleClick = () => { },
            title = '',
            maxShow = false,
            minShow = false,
            averageShow = false
        } = this.props;
        const { onEvents } = this.state;
        const datasetSource = toDataset(data);
        const mark = getMark({ maxShow, minShow, averageShow });
        const series = [];
        for (let i = 1; i < datasetSource.length; i++) {
            series.push({
                type: 'bar',
                ...mark,
                seriesLayoutBy: 'row'
            });
        }
        const option = {
            title: {
                text: title
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                bottom: 10
            },
            grid: {
                top: 40,
                bottom: 70
            },
            dataset: {
                source: datasetSource
            },
            xAxis: {
                type: 'category',
                // gridIndex: 0
            },
            yAxis: {
                type: 'value'
            },
            series
        };
        const onChartReadyCallback = (echartObj) => {
            setTimeout(() => {
                echartObj.resize();
            }, 1000);
        };

        return (
            <ReactEcharts
                option={option}
                {...chartConfig}
                style={style}
                onChartReady={onChartReadyCallback}
                onEvents={onEvents}
                showLoading={showLoading(data)}
            />
        );
    }
}
// function Bar(props) {

// }
export default Bar;
