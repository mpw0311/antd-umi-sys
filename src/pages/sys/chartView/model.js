
export default {
    namespace: 'chartView',
    state: {
        lineData:{
            "columns": [
                {
                    "field": "xAxis",
                    "name": "时间",
                    "type": "string"
                },
                {
                    "field": "email",
                    "name": "邮件营销",
                    "type": "string"
                },
                {
                    "field": "union",
                    "name": "联盟广告",
                    "type": "string"
                },
                {
                    "field": "video",
                    "name": "视频广告",
                    "type": "string"
                },
                {
                    "field": "visit",
                    "name": "直接访问",
                    "type": "string"
                },
                {
                    "field": "search",
                    "name": "搜索引擎",
                    "type": "string"
                }
            ],
            "rows": [
                {
                    "xAxis": "周一",
                    "email": 120,
                    "union": 220,
                    "video": 150,
                    "visit": 30,
                    "search": 820
                },
                {
                    "xAxis": "周二",
                    "email": 132,
                    "union": 182,
                    "video": 232,
                    "visit": 332,
                    "search": 932
                },
                {
                    "xAxis": "周三",
                    "email": 101,
                    "union": 192,
                    "video": 202,
                    "visit": 302,
                    "search": 902
                },
                {
                    "xAxis": "周四",
                    "email": 134,
                    "union": 234,
                    "video": 154,
                    "visit": 334,
                    "search": 934
                },
                {
                    "xAxis": "周五",
                    "email": 90,
                    "union": 290,
                    "video": 190,
                    "visit": 390,
                    "search": 1290
                },
                {
                    "xAxis": "周六",
                    "email": 230,
                    "union": 330,
                    "video": 330,
                    "visit": 330,
                    "search": 1230
                },
                {
                    "xAxis": "周日",
                    "email": 210,
                    "union": 310,
                    "video": 420,
                    "visit": 320,
                    "search": 1320
                }
            ]
        },
        barData:{
            "columns": [
                {
                    "field": "xAxis",
                    "name": "时间",
                    "type": "string"
                },
                {
                    "field": "email",
                    "name": "邮件营销",
                    "type": "string"
                },
                {
                    "field": "union",
                    "name": "联盟广告",
                    "type": "string"
                },
                {
                    "field": "video",
                    "name": "视频广告",
                    "type": "string"
                },
                {
                    "field": "visit",
                    "name": "直接访问",
                    "type": "string"
                },
                {
                    "field": "search",
                    "name": "搜索引擎",
                    "type": "string"
                }
            ],
            "rows": [
                {
                    "xAxis": "周一",
                    "email": 120,
                    "union": 220,
                    "video": 150,
                    "visit": 30,
                    "search": 820
                },
                {
                    "xAxis": "周二",
                    "email": 132,
                    "union": 182,
                    "video": 232,
                    "visit": 332,
                    "search": 932
                },
                {
                    "xAxis": "周三",
                    "email": 101,
                    "union": 192,
                    "video": 202,
                    "visit": 302,
                    "search": 902
                },
                {
                    "xAxis": "周四",
                    "email": 134,
                    "union": 234,
                    "video": 154,
                    "visit": 334,
                    "search": 934
                },
                {
                    "xAxis": "周五",
                    "email": 90,
                    "union": 290,
                    "video": 190,
                    "visit": 390,
                    "search": 1290
                },
                {
                    "xAxis": "周六",
                    "email": 230,
                    "union": 330,
                    "video": 330,
                    "visit": 330,
                    "search": 1230
                },
                {
                    "xAxis": "周日",
                    "email": 210,
                    "union": 310,
                    "video": 420,
                    "visit": 320,
                    "search": 1320
                }
            ]
        },
        barWaterfallData:[
            {
                name: "1千至3千",
                type: "number",
                value: 89
            },
            {
                name: "3千至1万",
                type: "number",
                value: 400
            },
            {
                name: "1万至3万",
                type: "number",
                value: 260
            },
            {
                name: "3万至5万",
                type: "number",
                value: 100
            },
            {
                name: "5万至10万",
                type: "number",
                value: 223
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
        ],
        pieData:[
            {
                name: "直接访问",
                value: 335
            },
            {
                name: "邮件营销",
                value: 310
            },
            {
                name: "联盟广告",
                value: 234
            },
            {
                name: "视频广告",
                value: 135
            },
            {
                name: "搜索引擎",
                value: 400
            },
        ],
        nestData:[
            {
                name: '直达',
                children: [
                    { value: 335, name: '直达' },
                ]
            },
            {
                name: '营销广告',
                children: [
                    { value: 310, name: '邮件营销' },
                    { value: 234, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                ]
            },
            {
                name: '搜索引擎',
                children: [
                    { value: 1048, name: '百度' },
                    { value: 251, name: '谷歌' },
                    { value: 147, name: '必应' },
                    { value: 102, name: '其他' }
                ]
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
