
import { apiPrefix, menusData } from 'utils';
import * as api from 'services';
const orginalData = menusData;
export default {
    namespace: 'global',
    state: {
        status: 0,
        userInfo: {},
        message: [],
        msgSize: 10,
        notification: undefined,
        menusData: [],
        defaultMenu: {
            title: '交易',
            pathtitles: ['汇总数据', '交易'],
            key: 'summryData_transaction',
            url: `${apiPrefix}/offline/summryData_transaction`
        },
        url: undefined
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen((location) => {
                const { pathname, query, state } = location;
                if (pathname.indexOf("sys") > -1) {
                    dispatch({
                        type: 'getSysInfo'
                    });
                    dispatch({
                        type: 'getMessage',
                    });
                }
                if (pathname.indexOf("frame") > -1) {
                    dispatch({
                        type: 'getFrameUrl',
                        payload: {
                            query,
                            state
                        }
                    });
                }
            });
        },
    },

    effects: {
        * logout({ payload }, { call, put }) {
            yield call(api.logout, { ...payload });
            yield put({
                type: 'save', payload: {
                    ...payload
                }
            });
        },
        * getSysInfo({ payload }, { call, put, select }) {// eslint-disable-line
            let res = yield select(({ global }) => global.result);// eslint-disable-line
            const { rows: orginalRows } = orginalData;
            const menusData = orginalRows;// MunesFilter(orginalRows, keys);
            yield put({
                type: 'save',
                payload: {
                    menusData,
                }
            });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};