
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
        ],
        scatterAqiColorData:[
            {
                name: "1千至3千",
                type: "object",
                data: {
                    columns: [
                        {
                            field: "date",
                            name: "日期",
                            type: "number"
                        },
                        {
                            field: "match_index",
                            name: "匹配指数",
                            type: "number"
                        },
                        {
                            field: "money_match_rate",
                            name: "金额匹配率",
                            type: "number"
                        },
                        {
                            field: "people_match_rate",
                            name: "人数匹配率",
                            type: "number"
                        },
                        {
                            field: "amount",
                            name: "总金额",
                            type: "number"
                        },
                        {
                            field: "match_amount",
                            name: "已匹金额",
                            type: "number"
                        },
                        {
                            field: "match_people",
                            name: "已匹人数",
                            type: "number"
                        },
                        {
                            field: "grade",
                            name: "等级",
                            type: "string"
                        },
                    ],
                    rows: [
                        {
                            date: '2018-08-01',
                            match_index: '118',
                            money_match_rate: '83',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                        {
                            date: '2018-08-02',
                            match_index: '50',
                            money_match_rate: '73',
                            people_match_rate: '33',
                            amount: '78',
                            match_amount: '73',
                            match_people: '89',
                            grade: "良"
                        },
                        {
                            date: '2018-08-03',
                            match_index: '86',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                    ]
                }
            },
            {
                name: "3千至5千",
                type: "object",
                data: {
                    columns: [
                        {
                            field: "date",
                            name: "日期",
                            type: "number"
                        },
                        {
                            field: "match_index",
                            name: "匹配指数",
                            type: "number"
                        },
                        {
                            field: "money_match_rate",
                            name: "金额匹配率",
                            type: "number"
                        },
                        {
                            field: "people_match_rate",
                            name: "人数匹配率",
                            type: "number"
                        },
                        {
                            field: "amount",
                            name: "总金额",
                            type: "number"
                        },
                        {
                            field: "match_amount",
                            name: "已匹金额",
                            type: "number"
                        },
                        {
                            field: "match_people",
                            name: "已匹人数",
                            type: "number"
                        },
                        {
                            field: "grade",
                            name: "等级",
                            type: "string"
                        },
                    ],
                    rows: [
                        {
                            date: '2018-08-01',
                            match_index: '24',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '393',
                            match_people: '69',
                            grade: "良"
                        },
                        {
                            date: '2018-08-02',
                            match_index: '44',
                            money_match_rate: '73',
                            people_match_rate: '33',
                            amount: '78',
                            match_amount: '73',
                            match_people: '89',
                            grade: "良"
                        },
                        {
                            date: '2018-08-03',
                            match_index: '59',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                    ]
                }
            },
            {
                name: "5千至1万",
                type: "object",
                data: {
                    columns: [
                        {
                            field: "date",
                            name: "日期",
                            type: "number"
                        },
                        {
                            field: "match_index",
                            name: "匹配指数",
                            type: "number"
                        },
                        {
                            field: "money_match_rate",
                            name: "金额匹配率",
                            type: "number"
                        },
                        {
                            field: "people_match_rate",
                            name: "人数匹配率",
                            type: "number"
                        },
                        {
                            field: "amount",
                            name: "总金额",
                            type: "number"
                        },
                        {
                            field: "match_amount",
                            name: "已匹金额",
                            type: "number"
                        },
                        {
                            field: "match_people",
                            name: "已匹人数",
                            type: "number"
                        },
                        {
                            field: "grade",
                            name: "等级",
                            type: "string"
                        },
                    ],
                    rows: [
                        {
                            date: '2018-08-01',
                            match_index: '78',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                        {
                            date: '2018-08-02',
                            match_index: '90',
                            money_match_rate: '73',
                            people_match_rate: '33',
                            amount: '78',
                            match_amount: '73',
                            match_people: '89',
                            grade: "良"
                        },
                        {
                            date: '2018-08-03',
                            match_index: '66',
                            money_match_rate: '53',
                            people_match_rate: '23',
                            amount: '73',
                            match_amount: '93',
                            match_people: '69',
                            grade: "良"
                        },
                    ]
                }
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
