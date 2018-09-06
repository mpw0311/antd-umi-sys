import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import moment from 'moment';
import _ from 'lodash';
import { formatNumer, showLoading } from './_';
import chartConfig from './config';
import styles from './theme/Calendar-pie.less';

// const data = {
//     columns: [
//         {
//             field: "date",
//             name: "日期",
//             type: "string"
//         },
//         {
//             field: "match",
//             name: "已匹金额",
//             type: "number"
//         },
//         {
//             field: "unmatch",
//             name: "未匹金额",
//             type: "number"
//         },
//     ],
//     rows: [
//         {
//             date: '2018-08-01',
//             match: 3000,
//             unmatch: 1023,
//         },
//         {
//             date: '2018-08-02',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-03',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-04',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-05',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-06',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-07',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-08',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-09',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-10',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-11',
//             match: 222,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-12',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-13',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-14',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-15',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-16',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-17',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-18',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-19',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-20',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-21',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-22',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-23',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-24',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-25',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-26',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-27',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-28',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-29',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-30',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-08-31',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-09-01',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-09-02',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-09-03',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-09-04',
//             match: 300,
//             unmatch: 123,
//         },
//         {
//             date: '2018-09-05',
//             match: 300,
//             unmatch: 123,
//         },
//     ]
// };
class CalendarPie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            echartObj: undefined,
            // 每日图形高宽
            cellSize: [86, 86],
            pieRadius: 25
        };
        this.getPieSeries = this.getPieSeries.bind(this);
        this.renderPies = this.renderPies.bind(this);
        this.getSeries = this.getSeries.bind(this);
        this.getDataRange = this.getDataRange.bind(this);
        this.getCalendarCoords = this.getCalendarCoords.bind(this);
        this.getVirtulData = this.getVirtulData.bind(this);
        this.getCalendar = this.getCalendar.bind(this);
        this.getCalendarLable = this.getCalendarLable.bind(this);
    }
    componentWillUpdate(nextProps, nextState) {
        const { time, data } = nextProps;
        const { echartObj } = nextState;
        // // 日历月份['2018-08','2018-09']
        const dataRange = this.getDataRange(time);
        const scatterData = this.getVirtulData(time, data);
        const seriesData = this.getSeries(dataRange, scatterData);
        this.renderPies(seriesData, echartObj);
    }
    // 获取时间range
    getDataRange(time) {// eslint-disable-line
        const startTime = moment(time[0]);
        const endTime = moment(time[1]);
        const months = [];
        const m = moment(endTime).month() - moment(startTime).month();
        for (let i = 0; i <= m; i++) {
            const t = moment(startTime).add(i, 'M');
            months.push(moment(t).format("YYYY-MM"));
        }
        return months;
    }
    // 获取每个月日历图的坐标
    getCalendarCoords(dataRange = []) {
        const { cellSize } = this.state;
        const offsetHeight = 20;
        const size = dataRange.map((item) => {
            const day = moment(item + "-1").day();
            return day > 5 ? 5 : 4;
        });
        let sum = offsetHeight;
        const heights = size.map(item => {
            sum += cellSize[1] * item;
            return sum;
        });
        heights.unshift(offsetHeight);
        return heights;
    }
    // 渲染每个饼图，并带有位置信息
    getPieSeries(scatterData) {
        const { data } = this.props;
        const { pieRadius, echartObj } = this.state;
        const { rows = [] } = data;
        let pieSeries = [];
        scatterData.map((row, i) => {
            const { data } = row;
            const pies = data.map((item, index) => {
                const center = echartObj.convertToPixel({ calendarIndex: i }, item) || [0, 0];
                let _match = 0;
                let _unmatch = 0;
                for (let v of rows) {
                    const { date, match, unmatch } = v;
                    if (date === item[0]) {
                        _match = match;
                        _unmatch = unmatch;
                        break;
                    }
                }
                return {
                    id: index + 'pie' + i,
                    type: 'pie',
                    center: [center[0], center[1] - 5],
                    label: {
                        normal: {
                            formatter: '{c}',
                            position: 'inside',
                            formatter: function (params) { // eslint-disable-line
                                const { value } = params;
                                return formatNumer(value);
                            }
                        }
                    },
                    radius: pieRadius,
                    data: [
                        {
                            name: '已匹金额', value: _match
                        },
                        {
                            name: '未匹金额', value: _unmatch
                        }
                    ]
                };
            });
            pieSeries = pieSeries.concat(pies);
        });
        return pieSeries;
    }
    getCalendarLable(time, dataRange) {// eslint-disable-line
        const { cellSize } = this.state;
        const getDays = (range) => {
            const YY = range.slice(0, 4);
            const MM = range.slice(5, 7);
            const date = new Date(YY, MM, 0);
            return date.getDate();
        };
        const getMonthSeries = (range, days) => {
            const arr = [];
            for (let t = 1; t <= days; t++) {
                arr.push([
                    range + '-' + (t >= 10 ? t : '0' + t),
                    0
                ]);
            }
            return arr;
        };
        return dataRange.map((item, i) => {
            const days = getDays(item);

            return {
                calendarIndex: i,
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {// eslint-disable-line
                            const d = echarts.number.parseDate(params.value[0]);
                            return d.getDate();
                        },
                        offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                        textStyle: {
                            color: '#000',
                            fontSize: 14
                        }
                    }
                },
                data: getMonthSeries(item, days)
            };
        });
    }
    getVirtulData(time, data) {// eslint-disable-line
        const { rows = [] } = data;
        const date = +echarts.number.parseDate(time[0]);
        const end = +echarts.number.parseDate(time[time.length - 1]);
        const dayTime = 3600 * 24 * 1000;
        const dd = [];
        for (let time = date; time <= end; time += dayTime) {
            const formatTime = echarts.format.formatTime('yyyy-MM-dd', time);
            let value = [0, 0];
            for (let v of rows) {
                const { date, match, unmatch } = v;
                if (date === formatTime) {
                    value = [match, unmatch];
                    break;
                }
            }
            dd.push([
                formatTime,
            ].concat(value));
        }
        return dd;
    }
    getSeries(dataRange, scatterData) {
        const { cellSize } = this.state;
        const series = [];
        dataRange.map((item, i) => {
            const d = _.cloneDeep(scatterData);
            const dd = _.remove(d, (values) => {
                return values[0].indexOf(item) > -1;
            });
            series.push({
                id: 'label' + i,
                calendarIndex: i,
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) { // eslint-disable-line
                            const { value } = params;
                            const percent = (value[1] / value[2] * 100).toFixed(1);
                            return `{a|${percent}%}`;
                        },
                        offset: [0, -cellSize[1] / 2 + 75],
                        textStyle: {
                            color: '#000',
                            fontSize: 14
                        },
                        rich: {
                            a: {
                                color: 'red',
                                fontSize: 11,
                                lineHeight: 10
                            },
                        },
                    },
                },
                data: dd
            });
        });
        return series;
    }
    getPieSeriesUpdate(scatterData) { // eslint-disable-line
        const { echartObj } = this.state;
        return echarts.util.map(scatterData, (item, index) => {
            const center = echartObj.convertToPixel('calendar', item);
            return {
                id: index + 'pie',
                center
            };
        });
    }
    getCalendar(dataRange, calendarCoords) {
        const { cellSize } = this.state;
        return dataRange.map((item, i) => {
            return {
                top: calendarCoords[i],
                left: 'center',
                range: item,
                coordinateSystem: 'calendar',
                orient: 'vertical',
                cellSize,
                yearLabel: {
                    margin: 45,
                    textStyle: {
                        fontSize: 20
                    },
                    position: 'left'
                },
                dayLabel: {
                    // firstDay: 1,
                    show: false,
                },
                monthLabel: {
                    nameMap: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                },
            };
        });
    }
    renderPies(seriesData, chart) {
        setTimeout(() => {
            const pies = this.getPieSeries(seriesData);
            chart.setOption({
                series: pies
            });
            chart.resize();
            // setTimeout(() => {
            //     echartObj.setOption({
            //         series: getPieSeriesUpdate(scatterData, echartObj)
            //     });
            // }, 500);
        }, 1000);
    }
    render() {
        const {
            style,
            time,
            data,
            handleClick = () => { },
        } = this.props;
        const { height, ...restStyle } = style;
        const loading = showLoading(data);
        if (loading) {
            return (
                <ReactEcharts
                    option={{}}
                    {...chartConfig}
                    style={style}
                    showLoading={loading}
                />
            );
        }
        // 日历月份['2018-08','2018-09']
        const dataRange = this.getDataRange(time);
        const calendarCoords = this.getCalendarCoords(dataRange);
        const scatterData = this.getVirtulData(time, data);
        const calendar = this.getCalendar(dataRange, calendarCoords);
        const seriesData = this.getSeries(dataRange, scatterData);
        const labels = this.getCalendarLable(time, dataRange);
        const option = {
            tooltip: {
            },
            grid: {
                top: 0,
                right: 0
            },
            legend: {
                data: ['已匹金额', '未匹金额'],
                top: 20,
                right: 0,
                orient: 'vertical'
            },
            calendar,
            series: seriesData.concat(labels)
        };
        const onChartReadyCallback = (echartObj) => {
            const { echartObj: _echartObj } = this.state;
            if (!_echartObj) {
                this.setState({
                    echartObj
                });
            }
            this.renderPies(seriesData, echartObj);
        };
        const onEvents = {
            click: (params) => {
                if (params.dataType === "node") {
                    handleClick(params);
                }
            }
        };
        return (
            <div>
                <nav className={styles.nav}>
                    <ul>
                        <li>星期一</li>
                        <li>星期二</li>
                        <li>星期三</li>
                        <li>星期四</li>
                        <li>星期五</li>
                        <li>星期六</li>
                        <li>星期日</li>
                    </ul>
                </nav>
                <div style={{ height, overflowY: 'auto' }}>
                    <ReactEcharts
                        option={option}
                        {...chartConfig}
                        style={{ height: 400 * dataRange.length + 80, ...restStyle }}
                        onChartReady={onChartReadyCallback.bind(this)}
                        onEvents={onEvents}
                    />
                </div>
            </div>
        );
    }
}
export default CalendarPie;
