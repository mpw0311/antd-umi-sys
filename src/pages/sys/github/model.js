
import * as api from './service';
export default {
    namespace: 'github',
    state: {
        account: undefined,
        accountInfo: {},
        repos: [],
        received_events: [],
        stargazers: [],
        stargazersInfo: []
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
                const received_events = yield call(api.getData, { url: received_events_url });
                if (Array.isArray(received_events)) {
                    yield put({
                        type: 'save',
                        payload: {
                            accountInfo,
                            account,
                            received_events
                        },
                    });
                }
                yield put({
                    type: 'getRepos',
                    payload: {
                        repos_url
                    }
                });
            }
        },
        *getRepos({ payload }, { call, put, select }) {
            let { repos_url } = yield select(({ github }) => github.accountInfo);
            const { current = 1, pageSize = 10 } = payload;
            const repos = yield call(api.getData, { url: repos_url + `?page=${current}&per_page=${pageSize}` });
            if (Array.isArray(repos)) {
                yield put({
                    type: 'save',
                    payload: {
                        repos,
                    },
                });
            }
        },
        *getStargazers({ payload }, { call, put, select }) {
            let stargazers_url = yield select(({ github }) => github.stargazers_url);
            if (payload && payload.url && payload.url !== stargazers_url) {
                const stargazers = yield call(api.getData, payload);
                let stargazersInfo = [];
                if (stargazers && Array.isArray(stargazers)) {
                    stargazersInfo = yield stargazers.map(item => {
                        const { url } = item;
                        return call(api.getData, { url });
                    });
                }
                yield put({
                    type: 'save',
                    payload: {
                        stargazers,
                        stargazersInfo,
                        stargazers_url: payload.url
                    },
                });
            }
        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
