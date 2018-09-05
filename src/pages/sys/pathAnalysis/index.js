import React from 'react';
import { connect } from 'dva';
import { message } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import MyForm from './components/form';
import MyTabs from './components/tabs';
import {PageHeader} from 'components';
import styles from './index.less';


function PathAnalysis(props) {
    const { pageData, dict, events, pages, dispatch, location, eventData, announcement } = props;
    const submit = (values) => {
        const { platformType, pages, time = [], ...rest } = values;
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
            } else if (values[key] === undefined) {
                message.error('请填好查询条件后提交！');
                return false;
            }
        }
        const d = time.map(d => moment(d).format("YYYY-MM-DD"));
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
    return (
        <div className={styles.normal}>
            <PageHeader
                pathtitles={['路径分析']}
                location={location}
                description={announcement}
            />
            <MyForm dict={dict} onSubmit={submit} events={events} pages={pages} />
            <MyTabs pageData={pageData} eventData={eventData} handleClick={handleClick} />
        </div>
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