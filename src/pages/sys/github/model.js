
import * as api from './service';
export default {
    namespace: 'github',
    state: {
        account: 'mpw0311',
        accountInfo: {},
        repos: [],

    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/sys/github') {
                    dispatch({
                        type: 'getAccountInfo', payload: {
                            account: 'mpw0311'
                        }
                    });
                }
            });
        },
    },
    effects: {
        *getAccountInfo({ payload }, { call, put }) {
            const { account } = payload;
            const accountInfo = yield call(api.getAccountInfo, payload);
            const { repos_url } = accountInfo;
            const repos = yield call(api.getData, { url: repos_url });
            yield put({
                type: 'save',
                payload: {
                    accountInfo,
                    repos,
                    account
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
