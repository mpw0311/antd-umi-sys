import * as api from './service';
export default {
  namespace: 'githubPro',
  state: {
    //账户基本信息
    accountInfo: {},
    //公开库基本信息
    reposInfo: [],
    //公开库动态日志记录
    received_events: [],
  },
  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen(({ pathname, state = {}, query }) => {
        //在githubpro页面获取账户基本信息、获取公开库动态日志
        if (/^\/sys\/githubpro$/.test(pathname)) {
          const { account } = state;
          dispatch({
            type: 'getAccountInfo',
            payload: {
              account: account || 'mpw0311',
            },
          });
        }
      });
    },
  },
  effects: {
    /**
     * 1、获取账户基本信息
     * login(账户名),id,avatar_url,url,followers_url,following_url,starred_url,repos_url,events_url,received_events_url,name,bio(介绍)，public_repos，created_at，updated_at
     * 2、获取公开库动态日志
     */
    *getAccountInfo({ payload }, { call, put, select }) {
      const { account } = payload;
      const preAccountInfo = yield select(({ githubPro }) => githubPro.accountInfo);
      if (account !== preAccountInfo.login) {
        //获取账户基本信息
        const accountInfo = yield call(api.getAccountInfo, payload);
        const { received_events_url, repos_url } = accountInfo;
        const received_events = yield call(api.getData, { url: received_events_url });
        yield put({
          type: 'save',
          payload: {
            accountInfo,
            received_events,
          },
        });
        //请求公开库信息
        yield put({
          type: 'getRepos',
          payload: {
            repos_url,
          },
        });
      }
    },
    /**
     * 获取公开库信息
     */
    *getRepos({ payload }, { call, put, select }) {
      const { current = 1, pageSize = 10 } = payload;
      //获取请求信息url
      let repos_url;
      if (payload.repos_url) {
        repos_url = payload.repos_url;
      } else {
        repos_url = yield select(({ github }) => github.accountInfo);
      }
      //请求数据
      const reposInfo = yield call(api.getData, {
        url: repos_url + `?page=${current}&per_page=${pageSize}`,
      });
      if (Array.isArray(reposInfo)) {
        yield put({
          type: 'save',
          payload: {
            reposInfo,
          },
        });
      }
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
