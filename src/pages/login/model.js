
import * as api from './service';
import { routerRedux } from 'dva/router';

export default {
    namespace: 'login',
    state: {
        status: '0',
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
            const { data } = yield call(api.login, { ...payload });
            yield put({
                type: 'save',
                payload: {
                    ...payload,
                    ...data,
                },
            });
            yield put(routerRedux.push('/sys'));
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
