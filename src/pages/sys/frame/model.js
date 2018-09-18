
export default {
    namespace: 'frame',
    state: {
        url: undefined
    },
    subscriptions: {
        // setupHistory({ dispatch, history }) {
        //     history.listen((location) => {
        //         const { pathname, query, state } = location;
        //         if (pathname.indexOf("frame") > -1) {
        //             dispatch({
        //                 type: 'getFrameUrl',
        //                 payload: {
        //                     query,
        //                     state
        //                 }
        //             });
        //         }
        //     });
        // },
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