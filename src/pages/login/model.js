
import * as api from './service';
import { routerRedux } from 'dva/router';
import { encrypt } from '@utils/CryptoJS';

export default {
    namespace: 'login',
    state: {},
    effects: {
        *login({ payload }, { call, put }) {
            const { password, ...rest } = payload;
            const { status } = yield call(api.login, { password: encrypt(password), ...rest });
            if (status === 0) {
                sessionStorage.setItem("isLogin", true);
                yield put(routerRedux.push('/sys'));
            }
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
