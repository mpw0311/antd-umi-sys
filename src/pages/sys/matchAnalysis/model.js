
import moment from 'moment';
import * as api from './service';


const initTime = [moment(moment() - 3600 * 24 * 1000 * 7).format("YYYY-MM-DD"), moment(moment() - 3600 * 24 * 1000 * 1).format("YYYY-MM-DD")];
export default {

    namespace: 'matchAnalysis',

    state: {
        times: initTime,
        announcement: '',
        tableData01: {},
        tableData02: {},
        barData01: {},
        barData02: {},
        barWaterfallData01: [],
        barWaterfallData02: [],
        CalendarPieData: {},
        scatterData: [],
        table1: {
            current: 1,
            pageSize: "10",
            total: undefined,
            data: {}
        },
        table2: {
            current: 1,
            pageSize: "10",
            total: undefined,
            data: {}
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query, state }) => { // eslint-disable-line
                if (pathname.indexOf('sys/matchAnalysis') > -1) {
                    dispatch({
                        type: 'fetch',
                        payload: {
                            time: initTime
                        }
                    });
                }
            });
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {
            const { time } = payload;
            const { data } = yield call(api.fetch, {
                ...payload
            });
            const { scatterData, CalendarPieData } = data;
            yield put({
                type: 'save',
                payload: {
                    scatterData,
                    CalendarPieData
                },
            });
            yield put({
                type: 'fetchCard2',
                payload: {
                    time: time[1]
                }
            });
            yield put({
                type: 'fetchCard3',
                payload: {
                    time: time[1]
                }
            });
            yield put({
                type: 'fechTable1',
                payload: {
                    ...payload
                }
            });
            yield put({
                type: 'fechTable2',
                payload: {
                    ...payload
                }
            });
        },
        *fetchCard2({ payload }, { call, put }) {
            const { data } = yield call(api.fetchCard2, {
                ...payload
            });
            const { barWaterfallData01, barWaterfallData02, } = data;
            yield put({
                type: 'save',
                payload: {
                    barWaterfallData01,
                    barWaterfallData02,
                },
            });
        },
        *fetchCard3({ payload }, { call, put }) {
            const { data } = yield call(api.fetchCard3, {
                ...payload
            });
            const { barData01, barData02, } = data;
            yield put({
                type: 'save',
                payload: {
                    barData01,
                    barData02,
                },
            });
        },
        *fechTable1({ payload }, { call, put, select }) {
            const { table1, times: time } = yield select(state => state.matchAnalysis);
            const { current, pageSize } = table1;
            const { data } = yield call(api.fechTable1, {
                current,
                pageSize,
                time,
                ...payload,
            });
            const { columns, rows, ...rest } = data;
            yield put({
                type: 'save',
                payload: {
                    table1: rest,
                    tableData01: {
                        columns,
                        rows
                    }
                }
            });
        },
        *fechTable2({ payload }, { call, put, select }) {
            const { table2, times: time } = yield select(state => state.matchAnalysis);
            const { current, pageSize } = table2;
            const { data } = yield call(api.fechTable2, {
                current,
                pageSize,
                time,
                ...payload,
            });
            const { columns, rows, ...rest } = data;
            yield put({
                type: 'save',
                payload: {
                    table2: rest,
                    tableData02: {
                        columns,
                        rows
                    }
                },
            });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
