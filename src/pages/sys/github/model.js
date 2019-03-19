
import * as api from './service';
export default {
    namespace: 'github',
    state: {
        account: undefined,
        accountInfo: {},
        repos: [],
        received_events: [],
        stargazers: []
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(({ pathname, state = {} }) => {
                if (/^\/sys\/github$/.test(pathname)) {
                    const { account } = state
                    dispatch({
                        type: 'getAccountInfo',
                        payload: {
                            account: account || 'mpw0311'
                        }
                    });
                }
            });
        },
    },
    effects: {
        *getAccountInfo({ payload }, { call, put, select }) {
            const { account } = payload;
            let preAccount = yield select(({ github }) => github.account);
            if (preAccount !== account) {
                const accountInfo = yield call(api.getAccountInfo, payload);
                const { repos_url, received_events_url } = accountInfo;
                const repos = yield call(api.getData, { url: repos_url });
                const received_events = yield call(api.getData, { url: received_events_url });
                yield put({
                    type: 'save',
                    payload: {
                        accountInfo,
                        account,
                        repos,
                        received_events
                    },
                });
            }
        },
        *getStargazers({ payload }, { call, put }) {
            if (payload && payload.url) {
                const stargazers = yield call(api.getData, payload);
                yield put({
                    type: 'save',
                    payload: {
                        stargazers
                    },
                });
            }
        }
        // *getUrl({ payload }, { call, put, select }) {
        //     const chart = yield call(api.getUrl, payload);
        //     yield put({
        //         type: 'save',
        //         payload: {
        //             chart
        //         },
        //     });
        // }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
