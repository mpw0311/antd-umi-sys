
export default {
    namespace: 'chartView',
    state: {
        lineData: {
            columns: [
                {
                    field: "category",
                    name: "分类",
                    type: "string",
                },
                {
                    field: "amount_1",
                    name: "1k-3k",
                    type: "number",
                },
                {
                    field: "amount_2",
                    name: "3k-1w",
                    type: "number",
                },
                {
                    field: "amount_3",
                    name: "1w-3w",
                    type: "number",
                },
                {
                    field: "amount_4",
                    name: "3w-5w",
                    type: "number",
                },
                {
                    field: "amount_4",
                    name: "5w-10w",
                    type: "number",
                },
                {
                    field: "amount_5",
                    name: ">=10w",
                    type: "number",
                },
    
            ],
            rows: [
                {
                    category: '低于30%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '30%-50%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '50%-65%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '65%-75%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '75%-85%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '高于85%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
            ],
        },
        barData: {
            columns: [
                {
                    field: "category",
                    name: "分类",
                    type: "string",
                },
                {
                    field: "amount_1",
                    name: "1k-3k",
                    type: "number",
                },
                {
                    field: "amount_2",
                    name: "3k-1w",
                    type: "number",
                },
                {
                    field: "amount_3",
                    name: "1w-3w",
                    type: "number",
                },
                {
                    field: "amount_4",
                    name: "3w-5w",
                    type: "number",
                },
                {
                    field: "amount_4",
                    name: "5w-10w",
                    type: "number",
                },
                {
                    field: "amount_5",
                    name: ">=10w",
                    type: "number",
                },
    
            ],
            rows: [
                {
                    category: '低于30%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '30%-50%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '50%-65%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '65%-75%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '75%-85%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
                {
                    category: '高于85%',
                    amount_1: 24,
                    amount_2: 53,
                    amount_3: 23,
                    amount_4: 73,
                    amount_5: 93,
                },
            ],
        },
        barWaterfallData:[
            {
                name: "1千至3千",
                type: "number",
                data: 89
            },
            {
                name: "3千至1万",
                type: "number",
                data: 400
            },
            {
                name: "1万至3万",
                type: "number",
                data: 260
            },
            {
                name: "3万至5万",
                type: "number",
                data: 100
            },
            {
                name: "5万至10万",
                type: "number",
                data: 223
            },
        ]
    },
    subscriptions: {
        setup({ dispatch, history }) {//eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {//eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
