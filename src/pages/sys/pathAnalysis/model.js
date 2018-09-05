
import * as api from './service';

export default {

    namespace: 'pathAnalysis',

    state: {
        pageData: undefined,
        dict: {
            eventCountDict: [
                {
                    name: '>=0',
                    value: '0'
                },
                {
                    name: '>=100',
                    value: '100'
                },
                {
                    name: '>=1000',
                    value: '1000'
                },
                {
                    name: '>=5000',
                    value: '5000'
                },
            ],
            pageCountDict: [
                {
                    name: '>=0',
                    value: '0'
                },
                {
                    name: '>=100',
                    value: '100'
                },
                {
                    name: '>=1000',
                    value: '1000'
                },
                {
                    name: '>=5000',
                    value: '5000'
                },
            ],
            infoTypeDict: [
                {
                    name: "点击/浏览次数",
                    value: 'pv'
                },
                {
                    name: "独立用户个数",
                    value: 'uv'
                },
                {
                    name: "会话数",
                    value: 'visit'
                },
            ],
            platformType: [
                {
                    name: "IOS",
                    value: 'ios'
                },
                {
                    name: "Android",
                    value: 'Android'
                },
                {
                    name: "全部",
                    value: 'all'
                },
            ],
        },
        events: [],
        pages: [],
        values: {}
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query, state }) => { // eslint-disable-line
                if (pathname.indexOf('/sys/pathAnalysis') > -1) {
                    dispatch({ type: 'getDict', payload: {} });
                }
            });
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {
            const { data } = yield call(api.fetch, {
                ...payload
            });
            const { pathData: pageData, eventData } = data;
            yield put({
                type: 'save',
                payload: {
                    pageData,
                    eventData
                },
            });
            yield put({
                type: 'save',
                payload: {
                    values: payload
                },
            });
        },
        *getDict({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(api.getInfoTypeDict, {});
            const { eventDict: events, pageDict: pages } = data;
            yield put({
                type: 'save',
                payload: {
                    events,
                    pages
                },
            });
        },
        *_fetch({ payload }, { call, put, select }) {
            const values = yield select(state => state.pathAnalysis.values);
            const { data } = yield call(api.fetch, {
                ...values,
                ...payload
            });
            const { pathData: pageData, eventData } = data;
            yield put({
                type: 'save',
                payload: {
                    pageData,
                    eventData
                },
            });
        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
