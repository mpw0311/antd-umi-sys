
import * as api from './service';
export default {
    namespace: 'users',
    state: {
        path: undefined,
        list: [],
        total: null,
        page: null,
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(({ pathname, query, state }) => { // eslint-disable-line
                if (pathname === '/sys/users') {
                    dispatch({ type: 'fetch', payload: query });
                }
            });
        },
    },

    effects: {
        *fetch({ payload: { page = 1 } }, { call, put }) {
            const result = yield call(api.fetch, { page });
            const { data: list, } = result;
            yield put({
                type: 'save',
                payload: {
                    list,
                    total: 10,
                    page: parseInt(page, 10),
                },
            });
        },
        *removeuser({ payload: id }, { call, put }) {
            yield call(api.remove, id);
            yield put({ type: 'reload' });
        },
        *patch({ payload: { id, values } }, { call, put }) {
            yield call(api.patch, id, values);
            yield put({ type: 'reload' });
        },
        *create({ payload: values }, { call, put }) {
            yield call(api.create, values);
            yield put({ type: 'reload' });
        },
        *reload(action, { put, select }) {
            const page = yield select(state => state.users.page);
            yield put({ type: 'fetch', payload: { page } });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
