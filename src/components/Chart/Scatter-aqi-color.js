import ReactEcharts from 'echarts-for-react';
import _ from 'lodash';
import chartConfig from './config';
import { dataSerialize, rowsToColumns, formatNumer, toValuesArry, deleteColumnByIndexs, showLoading } from './_';

// const data = [
//     {
//         name: "1千至3千",
//         type: "object",
//         data: {
//             columns: [
//                 {
//                     field: "date",
//                     name: "日期",
//                     type: "number"
//                 },
//                 {
//                     field: "match_index",
//                     name: "匹配指数",
//                     type: "number"
//                 },
//                 {
//                     field: "money_match_rate",
//                     name: "金额匹配率",
//                     type: "number"
//                 },
//                 {
//                     field: "people_match_rate",
//                     name: "人数匹配率",
//                     type: "number"
//                 },
//                 {
//                     field: "amount",
//                     name: "总金额",
//                     type: "number"
//                 },
//                 {
//                     field: "match_amount",
//                     name: "已匹金额",
//                     type: "number"
//                 },
//                 {
//                     field: "match_people",
//                     name: "已匹人数",
//                     type: "number"
//                 },
//                 {
//                     field: "grade",
//                     name: "等级",
//                     type: "string"
//                 },
//             ],
//             rows: [
//                 {
//                     date: '2018-08-01',
//                     match_index: '118',
//                     money_match_rate: '83',
//                     people_match_rate: '23',
//                     amount: '73',
//                     match_amount: '93',
//                     match_people: '69',
//                     grade: "良"
//                 },
//                 {
//                     date: '2018-08-02',
//                     match_index: '50',
//                     money_match_rate: '73',
//                     people_match_rate: '33',
//                     amount: '78',
//                     match_amount: '73',
//                     match_people: '89',
//                     grade: "良"
//                 },
//                 {
//                     date: '2018-08-03',
//                     match_index: '86',
//                     money_match_rate: '53',
//                     people_match_rate: '23',
//                     amount: '73',
//                     match_amount: '93',
//                     match_people: '69',
//                     grade: "良"
//                 },
//             ]
//         }
//     },
//     {
//         name: "3千至5千",
//         type: "object",
//         data: {
//             columns: [
//                 {
//                     field: "date",
//                     name: "日期",
//                     type: "number"
//                 },
//                 {
//                     field: "match_index",
//                     name: "匹配指数",
//                     type: "number"
//                 },
//                 {
//                     field: "money_match_rate",
//                     name: "金额匹配率",
//                     type: "number"
//                 },
//                 {
//                     field: "people_match_rate",
//                     name: "人数匹配率",
//                     type: "number"
//                 },
//                 {
//                     field: "amount",
//                     name: "总金额",
//                     type: "number"
//                 },
//                 {
//                     field: "match_amount",
//                     name: "已匹金额",
//                     type: "number"
//                 },
//                 {
//                     field: "match_people",
//                     name: "已匹人数",
//                     type: "number"
//                 },
//                 {
//                     field: "grade",
//                     name: "等级",
//                     type: "string"
//                 },
//             ],
//             rows: [
//                 {
//                     date: '2018-08-01',
//                     match_index: '24',
//                     money_match_rate: '53',
//                     people_match_rate: '23',
//                     amount: '73',
//                     match_amount: '393',
//                     match_people: '69',
//                     grade: "良"
//                 },
//                 {
//                     date: '2018-08-02',
//                     match_index: '44',
//                     money_match_rate: '73',
//                     people_match_rate: '33',
//                     amount: '78',
//                     match_amount: '73',
//                     match_people: '89',
//                     grade: "良"
//                 },
//                 {
//                     date: '2018-08-03',
//                     match_index: '59',
//                     money_match_rate: '53',
//                     people_match_rate: '23',
//                     amount: '73',
//                     match_amount: '93',
//                     match_people: '69',
//                     grade: "良"
//                 },
//             ]
//         }
//     },
//     {
//         name: "5千至1万",
//         type: "object",
//         data: {
//             columns: [
//                 {
//                     field: "date",
//                     name: "日期",
//                     type: "number"
//                 },
//                 {
//                     field: "match_index",
//                     name: "匹配指数",
//                     type: "number"
//                 },
//                 {
//                     field: "money_match_rate",
//                     name: "金额匹配率",
//                     type: "number"
//                 },
//                 {
//                     field: "people_match_rate",
//                     name: "人数匹配率",
//                     type: "number"
//                 },
//                 {
//                     field: "amount",
//                     name: "总金额",
//                     type: "number"
//                 },
//                 {
//                     field: "match_amount",
//                     name: "已匹金额",
//                     type: "number"
//                 },
//                 {
//                     field: "match_people",
//                     name: "已匹人数",
//                     type: "number"
//                 },
//                 {
//                     field: "grade",
//                     name: "等级",
//                     type: "string"
//                 },
//             ],
//             rows: [
//                 {
//                     date: '2018-08-01',
//                     match_index: '78',
//                     money_match_rate: '53',
//                     people_match_rate: '23',
//                     amount: '73',
//                     match_amount: '93',
//                     match_people: '69',
//                     grade: "良"
//                 },
//                 {
//                     date: '2018-08-02',
//                     match_index: '90',
//                     money_match_rate: '73',
//                     people_match_rate: '33',
//                     amount: '78',
//                     match_amount: '73',
//                     match_people: '89',
//                     grade: "良"
//                 },
//                 {
//                     date: '2018-08-03',
//                     match_index: '66',
//                     money_match_rate: '53',
//                     people_match_rate: '23',
//                     amount: '73',
//                     match_amount: '93',
//                     match_people: '69',
//                     grade: "良"
//                 },
//             ]
//         }
//     },
// ];
const getMax = (data) => {
    let dataArr = [];

    data.forEach(d => {
        const { data } = d;
        const dd = deleteColumnByIndexs(data, [7]);
        dataArr = dataArr.concat(toValuesArry(dd));
    });
    return _.maxBy(dataArr, v => parseFloat(v));
};

function scatterAqiColor(props) {
    const {
        data = [],
        yAxisName = "",
        style,
        handleClick = () => { },

    } = props;
    const max = getMax(data);
    const { visualMap = [
        {
            text: ["圆形大小：金额匹配率"],
            dimension: 2,
            min: 0,
            max: 100,
        },
        {
            text: ["明暗：匹配金额"],
            dimension: 5,
            min: 0,
            max
        },
    ]
    } = props;
    const itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };
    const legendData = data.map(item => item.name);
    const getSeriesI = (name, dd) => {
        const res = dataSerialize(dd, -1);
        const d = rowsToColumns(res.seriesData);
        return {
            name,
            type: 'scatter',
            itemStyle,
            data: d
        };
    };
    const getSeries = (data) => {
        const series = [];
        data.map(item => {
            const { name, data } = item;
            series[series.length] = getSeriesI(name, data);
        });
        return series;
    };
    const series = getSeries(data);
    const getSchema = (dd = {}) => {
        const { data = {} } = dd;
        const { columns = [] } = data;
        const schema = columns.map((item, i) => {
            const { field, name } = item;
            return {
                name: field,
                index: i,
                text: name
            };
        });
        return schema;
    };
    const schema = getSchema(data && data[0]);
    const visualMapOpt = visualMap.map((item, i) => {
        const setting = [{
            itemWidth: 30,
            inRange: {
                symbolSize: [5, 50]
            },
            outOfRange: {
                symbolSize: [5, 50],
            },
            top: '10%',
        }, {
            inRange: {
                colorLightness: [1, 0.5]
            },
            bottom: '5%',
        }];
        return {
            ...item,
            ...setting[i],
            left: 'right',
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            outOfRange: {
                color: ['rgba(255,255,255,.2)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#444']
                }
            }
        };
    });
    const option = {
        backgroundColor: '#404a59',
        color: [
            '#dd4444', '#fec42c', '#80F1BE'
        ],
        legend: {
            y: 'top',
            data: legendData,
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        grid: {
            x: '10%',
            x2: 150,
            y: '18%',
            y2: '10%'
        },
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) { // eslint-disable-line
                const value = obj.value;
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + obj.seriesName + ' ' + value[0] + '日：'
                    + value[7]
                    + '</div>'
                    + schema[1].text + '：' + formatNumer(value[1]) + '<br>'
                    + schema[2].text + '：' + formatNumer(value[2]) + '<br>'
                    + schema[3].text + '：' + formatNumer(value[3]) + '<br>'
                    + schema[4].text + '：' + formatNumer(value[4]) + '<br>'
                    + schema[5].text + '：' + formatNumer(value[5]) + '<br>'
                    + schema[6].text + '：' + formatNumer(value[6]) + '<br>';
            }
        },
        xAxis: {
            // type: 'value',
            type: 'category',
            name: '日期',
            nameGap: 16,
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            // max: 31, // 月天数
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: yAxisName,
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
            }
        },
        visualMap: visualMapOpt,
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
            option={series && series.length > 0 && option || {}}
            {...chartConfig}
            style={style}
            onChartReady={onChartReadyCallback}
            onEvents={onEvents}
            showLoading={showLoading(data)}
        />
    );
}
export default scatterAqiColor;
