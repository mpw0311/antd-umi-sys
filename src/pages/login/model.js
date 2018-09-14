
import * as api from './service';
import { message } from 'antd';
import { routerRedux } from 'dva/router';

export default {
    namespace: 'login',
    state: {
    },
    subscriptions: {
        setup({ dispatch, history }) { // eslint-disable-line
        },
    },

    effects: {
        *login({ payload }, { call, put }) {
            const res = yield call(api.login, { ...payload });
            const { status, data } = res;
            if (status === 0) {
                yield put(routerRedux.push('/sys'));
            } else {
                const { alertDesc } = data;
                message.error(alertDesc);
            }
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
