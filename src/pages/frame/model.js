
export default {
    namespace: 'frame',
    state: {
        url: undefined
    },
    subscriptions: {
    },

    effects: {
        *getFrameUrl({ payload }, { call, put }) {  // eslint-disable-line
            const { query, state } = payload;
            const { url } = state;
            yield put({
                type: 'save',
                payload: {
                    query,
                    url
                }
            });
        },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};