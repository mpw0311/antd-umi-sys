import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card } from 'antd';
import moment from 'moment';
import MyForm from './components/myForm';
import { Charts, PageHeader, Page } from 'components';
import Card2 from './components/card2';
import Card3 from './components/card3';
import Card4 from './components/card4';

const { CalendarPie, ScatterAqiColor } = Charts;// eslint-disable-line
function MatchAnalysis(props) {
    const {
        times,
        location,// eslint-disable-line
        dispatch,
        announcement,// eslint-disable-line
        tableData01,
        tableData02,
        barData01,
        barData02,
        barWaterfallData01,
        barWaterfallData02,
        scatterData,
        CalendarPieData,// eslint-disable-line
        loading
    } = props;
    const submit = (values) => {
        const { time } = values;
        const times = time.map(item => moment(item).format("YYYY-MM-DD"));
        dispatch({
            type: 'matchAnalysis/fetch',
            payload: {
                time: times,
            },
        });
        dispatch({
            type: 'matchAnalysis/save',
            payload: {
                times,
                time2: times[1]
            },
        });
    };
    const rowStyle = {
        marginBottom: "20px"
    };
    const chartStyle = {
        height: 500
    };
    const onTimeChange1 = (value) => {
        dispatch({
            type: 'matchAnalysis/fetchCard2',
            payload: {
                time: moment(value).format("YYYY-MM-DD")
            },
        });
    };
    const onTimeChange2 = (value) => {
        dispatch({
            type: 'matchAnalysis/fetchCard3',
            payload: {
                time: moment(value).format("YYYY-MM-DD")
            },
        });
    };
    return (
        <Page >
            <PageHeader
                pathtitles={['匹配额度分析']}
                location={location}
                description={announcement}
            />
            <MyForm onSubmit={submit} times={times} />
            <Row gutter={16} style={rowStyle}>
                <Col span={12}>
                    <Card title="7天计划匹配概况一览表" >
                        <CalendarPie data={CalendarPieData} time={times} style={chartStyle} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="7天计划各个额度匹配概况" >
                        <ScatterAqiColor data={scatterData} yAxisName="匹配指数" style={chartStyle} />
                    </Card>
                </Col>
            </Row>
            <Card2
                data0={barWaterfallData01}
                data1={barWaterfallData02}
                times={times}
                chartStyle={chartStyle}
                rowStyle={rowStyle}
                onTimeChange={onTimeChange1}
            />
            <Card3
                data0={barData01}
                data1={barData02}
                times={times}
                chartStyle={chartStyle}
                rowStyle={rowStyle}
                onTimeChange={onTimeChange2}
            />
            <Card title="七天计划匹配详情分布表" style={rowStyle} bodyStyle={{ padding: 0 }}>
                <Card4
                    tableData01={tableData01}
                    tableData02={tableData02}
                    dispatch={dispatch}
                    loading={loading}
                />
            </Card>
        </Page>
    );
}

function mapStateToProps(state) {
    const {
        times,
        announcement,
        tableData01,
        tableData02,
        barData01,
        barData02,
        barWaterfallData01,
        barWaterfallData02,
        scatterData,
        CalendarPieData,
    } = state.matchAnalysis;
    return {
        times,
        announcement,
        tableData01,
        tableData02,
        barData01,
        barData02,
        barWaterfallData01,
        barWaterfallData02,
        scatterData,
        CalendarPieData,
        loading: state.loading.models.matchAnalysis,
    };
}

export default connect(mapStateToProps)(MatchAnalysis);