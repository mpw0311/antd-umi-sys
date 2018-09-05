
import { apiPrefix } from 'utils';
import * as api from 'services';
export default {
    namespace: 'global',
    state: {
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
            setup({ dispatch, history }) {//eslint-disable-line

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

        },

        reducers: {
            save(state, action) {
                return { ...state, ...action.payload };
            },
        },

    }
};