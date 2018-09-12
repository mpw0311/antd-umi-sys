
import * as api from './service';
import { message } from 'antd';
import { routerRedux } from 'dva/router';

export default {
    namespace: 'login',
    state: {
        status: '0',
        // msg: undefined
    },
    subscriptions: {
        setup({ dispatch, history }) { // eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) { // eslint-disable-line
            yield put({ type: 'save' });
        },
        *login({ payload }, { call, put }) {
            const res = yield call(api.login, { ...payload });
            const { status, data } = res;
            if (status === 0) {
                yield put(routerRedux.push('/sys'));
            } else {
                const { alertDesc } = data;
                message.error(alertDesc);
                // yield put({
                //     type: 'save',
                //     payload: {
                //         msg: alertDesc
                //     }
                // });
            }
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
