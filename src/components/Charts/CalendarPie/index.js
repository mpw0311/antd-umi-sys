import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import moment from 'moment';
import _ from 'lodash';
import { formatNumer, showLoading } from '../_';
import chartConfig from '../config';
import styles from './index.less';

const onEvents = {
};
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
        this.onChartReadyCallback = this.onChartReadyCallback.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { echartObj } = this.state;
        const { echartObj: nextEchartObj } = nextState;
        if (echartObj === undefined || nextEchartObj === undefined) {
            return false;
        } else {
            return true;
        }
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
    onChartReadyCallback(echartObj, seriesData) {
        this.setState({
            echartObj
        });
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
            const day = moment(item + "-01").day();
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
    getPieSeries(scatterData, echartObj) {
        const { data } = this.props;
        const { pieRadius } = this.state;
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
                            if (value[1] == 0) {
                                return `{a|0%}`;
                            } else {
                                const percent = (value[1] / value[2] * 100).toFixed(1);
                                return `{a|${percent}%}`;
                            }
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
            const pies = this.getPieSeries(seriesData, chart);
            chart.setOption({
                series: pies
            });
            // setTimeout(() => {
            //     echartObj.setOption({
            //         series: getPieSeriesUpdate(scatterData, echartObj)
            //     });
            // }, 500);
        }, 500);
    }
    render() {
        const {
            style,
            time,
            data,
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
                <div className='scrollbar' style={{ height, overflowY: 'auto' }}>
                    <ReactEcharts
                        option={option}
                        {...chartConfig}
                        style={{ height: 400 * dataRange.length + 80, ...restStyle }}
                        onChartReady={(echartObj) => {
                            this.onChartReadyCallback(echartObj, seriesData);
                        }}
                        onEvents={onEvents}
                    />
                </div>
            </div>
        );
    }
}
export default CalendarPie;
