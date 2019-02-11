import React from 'react';
import { connect } from 'dva';
import { message } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import MyForm from './components/form';
import MyTabs from './components/tabs';
import { Page } from '@components';


function PathAnalysis(props) {
    const { pageData, dict, events, pages, dispatch, eventData, loading } = props;
    const submit = (values) => {
        const { platformType, pages, ...rest } = values;
        if (platformType === "all") {
            values.pages = undefined;
        } else if (pages && pages.length === 0) {
            message.error('请填好查询条件后提交！');
            return false;
        }
        for (const key in rest) {
            if (_.isArray(values[key]) && values[key].length === 0) {
                message.error('请填好查询条件后提交！');
                return false;
            } else if (values[key] === undefined || values[key] === null) {
                message.error('请填好查询条件后提交！');
                return false;
            }
        }
        const { time, timeType } = rest;
        let d = null;
        switch (timeType) {
            case "day":
                d = [moment(time).format("YYYY-MM-DD"), moment(time).format("YYYY-MM-DD")];
                break;
            case "month": // eslint-disable-line
                const ys = moment(time).year();
                const ms = moment(time).month() + 1;
                const ds = (new Date(ys, ms, 0)).getDate();
                const tt = moment(time).format("YYYY-MM");
                d = [`${tt}-01`, `${tt}-${ds}`];
                break;
            case "week":// eslint-disable-line
                const w = moment(time).day();
                if (w > 0) {
                    const d1 = moment(time - (w - 1) * 24 * 60 * 60 * 1000).format("YYYY-MM-DD");
                    const d2 = moment(time + (7 - w) * 24 * 60 * 60 * 1000).format("YYYY-MM-DD");
                    d = [d1, d2];
                } else {
                    const d1 = moment(time - (7 - 1)).format("YYYY-MM-DD");
                    const d2 = moment(time).format("YYYY-MM-DD");
                    d = [d1, d2];
                }
                break;
            default:
                d = [moment(time).format("YYYY-MM-DD"), moment(time).format("YYYY-MM-DD")];
        }
        dispatch({
            type: 'pathAnalysis/fetch',
            payload: {
                ...values,
                time: d,

            },
        });
        message.success('提交成功！');
    };
    const handleClick = (v) => {
        dispatch({
            type: 'pathAnalysis/_fetch',
            payload: {
                ...v
            },
        });
    };
    const handleGetDict = (v) => {
        dispatch({
            type: 'pathAnalysis/getDict',
            payload: {
                timeType: v
            },
        });
    };
    return (
        <Page loading={false} title={'路径分析'}>
            <MyForm dict={dict} onSubmit={submit} events={events} pages={pages} handleGetDict={handleGetDict} />
            <MyTabs pageData={pageData} eventData={eventData} handleClick={handleClick} loading={loading} />
        </Page>
    );
}

function mapStateToProps(state) {
    const { pageData, eventData, dict, events, pages } = state.pathAnalysis;
    return {
        pageData,
        eventData,
        events,
        pages,
        dict,
        loading: state.loading.models.pathAnalysis,
    };
}

export default connect(mapStateToProps)(PathAnalysis);