
import * as api from './service';
import pathToRegexp from 'path-to-regexp';
export default {
    namespace: 'github',
    state: {
        account: undefined,
        accountInfo: {},
        repos: [],
        received_events: [],
        stargazers: [],
        stargazersInfo: [],
        //repo
        stars: {},//stars趋势图
        currentRepoName: '',
        currentRepo: [],
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(({ pathname, state = {}, query }) => {
                if (/^\/sys\/github$/.test(pathname)) {
                    const { account } = state;
                    dispatch({
                        type: 'getAccountInfo',
                        payload: {
                            account: account || 'mpw0311'
                        }
                    });
                }
                if (/^\/sys\/github\//.test(pathname)) {
                    const [, name] = pathToRegexp('/sys/github/:id').exec(pathname);
                    const { _n } = query;
                    dispatch({
                        type: "save",
                        payload: {
                            currentRepoName: _n,
                            account: name
                        }
                    });
                }
            });
        },
    },
    effects: {
        *getAccountInfo({ payload }, { call, put, select }) {
            const { account } = payload;
            const preAccountInfo = yield select(({ github }) => github.accountInfo);
            if (account !== preAccountInfo.login) {
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
        },
        *getReposStars({ payload }, { call, put, select }) {
            const { account: preAccount } = yield select(({ github }) => github.stars);
            const { account, repoName } = payload;
            if (!account || preAccount === account) return;
            const rows = yield call(api.getReposStargazers, { gitname: `${account}/${repoName}` });
            if (rows) {
                yield put({
                    type: "save",
                    payload: {
                        stars: {
                            account,
                            columns: [
                                {
                                    "field": "date",
                                    "name": "日期",
                                    "type": "string"
                                }, {
                                    "field": "starNum",
                                    "name": "starNum",
                                    "type": "number"
                                }
                            ],
                            rows: rows
                        }
                    }
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
