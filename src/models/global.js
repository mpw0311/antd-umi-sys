
import { routerRedux } from 'dva/router';
import { menusData, methods } from 'utils';
import { menuPermission } from 'config';
import * as api from 'services';
const orginalData = menusData;
export default {
    namespace: 'global',
    state: {
        status: 0,
        userInfo: {},
        message: [],
        notification: undefined,
        menusData: [],
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen((location) => {
                const { pathname, /*query, state*/ } = location;
                if (pathname !== '/login' && pathname !== '/register') {
                    dispatch({
                        type: 'getSysInfo'
                    });
                    dispatch({
                        type: 'getMessage',
                    });
                }
            });
        },
    },

    effects: {
        * logout({ payload }, { call, put }) {
            yield call(api.logout, { ...payload });
            yield put(routerRedux.push('/login'));
        },
        * getSysInfo({ payload }, { call, put, select }) {// eslint-disable-line
            let res = yield select(({ global }) => global.result);// eslint-disable-line
            if (!res) {
                res = yield call(api.getSysInfo, {});
            }
            const { data } = res;
            const { menus: menusKeys, userInfo, notification } = data;
            const { rows: keys } = menusKeys;
            const { rows: orginalRows } = orginalData;
            const menusData = menuPermission ? methods.MunesFilter(orginalRows, keys) : orginalRows;
            yield put({
                type: 'save',
                payload: {
                    menusData,
                    userInfo,
                    notification
                }
            });
        },
        // 请求消息通知栏数据
        *getMessage({ payload = {} }, { call, put, select }) {
            const { size = 0 } = payload;
            let count = yield select(({ global }) => global.message.length);
            const { data = [] } = yield call(api.getMessage, { size: count + size });
            yield put({
                type: 'save',
                payload: {
                    message: data,
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