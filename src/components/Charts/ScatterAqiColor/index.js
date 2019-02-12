import Chart from '../basic';
import _ from 'lodash';
import { dataSerialize, rowsToColumns, formatNumer, toValuesArry, deleteColumnByIndexs, showLoading } from '../_';


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
    return (
        <Chart
            option={series && series.length > 0 && option || {}}
            style={style}
            showLoading={showLoading(data)}
        // opts={{ renderer: 'svg' }}
        />
    );
}
export default scatterAqiColor;
