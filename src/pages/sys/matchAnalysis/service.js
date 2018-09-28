// import request from '../utils/request';
const data = {
    barData01: {
        columns: [
            {
                field: "category",
                name: "分类",
                type: "string"
            },
            {
                field: "amount_1",
                name: "1k-3k",
                type: "number"
            },
            {
                field: "amount_2",
                name: "3k-1w",
                type: "number"
            },
            {
                field: "amount_3",
                name: "1w-3w",
                type: "number"
            },
            {
                field: "amount_4",
                name: "3w-5w",
                type: "number"
            },
            {
                field: "amount_4",
                name: "5w-10w",
                type: "number"
            },
            {
                field: "amount_5",
                name: ">=10w",
                type: "number"
            },

        ],
        rows: [
            {
                category: '低于30%',
                amount_1: 124,
                amount_2: 53,
                amount_3: 23,
                amount_4: 73,
                amount_5: 93,
            },
            {
                category: '30%-50%',
                amount_1: 24,
                amount_2: 153,
                amount_3: 23,
                amount_4: 73,
                amount_5: 93,
            },
            {
                category: '50%-65%',
                amount_1: 24,
                amount_2: 43,
                amount_3: 123,
                amount_4: 73,
                amount_5: 103,
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
                amount_5: 73,
            },
            {
                category: '高于85%',
                amount_1: 24,
                amount_2: 53,
                amount_3: 23,
                amount_4: 73,
                amount_5: 93,
            },
        ]
    },
    barData02: {
        columns: [
            {
                field: "category",
                name: "分类",
                type: "string"
            },
            {
                field: "amount_1",
                name: "1k-3k",
                type: "number"
            },
            {
                field: "amount_2",
                name: "3k-1w",
                type: "number"
            },
            {
                field: "amount_3",
                name: "1w-3w",
                type: "number"
            },
            {
                field: "amount_4",
                name: "3w-5w",
                type: "number"
            },
            {
                field: "amount_4",
                name: "5w-10w",
                type: "number"
            },
            {
                field: "amount_5",
                name: ">=10w",
                type: "number"
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
        ]
    },
    barWaterfallData01: [
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
    barWaterfallData02: [
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
    scatterData: [
        {
            name: "1百至3千",
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
            name: "3千至1万",
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
            name: "1万至3万",
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
        {
            name: "3万至5万",
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
        {
            name: "5万至10万",
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
        {
            name: "10万以上",
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
                        match_index: '18',
                        money_match_rate: '34',
                        people_match_rate: '58',
                        amount: '193',
                        match_amount: '93',
                        match_people: '69',
                        grade: "良"
                    },
                    {
                        date: '2018-08-02',
                        match_index: '90',
                        money_match_rate: '173',
                        people_match_rate: '133',
                        amount: '78',
                        match_amount: '73',
                        match_people: '59',
                        grade: "良"
                    },
                    {
                        date: '2018-08-03',
                        match_index: '76',
                        money_match_rate: '113',
                        people_match_rate: '93',
                        amount: '73',
                        match_amount: '93',
                        match_people: '59',
                        grade: "良"
                    },
                ]
            }
        },
    ],
    CalendarPieData: {
        columns: [
            {
                field: "date",
                name: "日期",
                type: "string"
            },
            {
                field: "match",
                name: "已匹金额",
                type: "number"
            },
            {
                field: "unmatch",
                name: "未匹金额",
                type: "number"
            },
        ],
        rows: [
            {
                date: '2018-08-01',
                match: 3000,
                unmatch: 1023,
            },
            {
                date: '2018-08-02',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-03',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-04',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-05',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-06',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-07',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-08',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-09',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-10',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-11',
                match: 222,
                unmatch: 123,
            },
            {
                date: '2018-08-12',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-13',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-14',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-15',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-16',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-17',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-18',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-19',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-20',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-21',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-22',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-23',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-24',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-25',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-26',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-27',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-28',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-29',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-30',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-08-31',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-09-01',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-09-02',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-09-03',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-09-04',
                match: 300,
                unmatch: 123,
            },
            {
                date: '2018-09-05',
                match: 300,
                unmatch: 123,
            },
        ]
    }
};

const table1 = {
    columns: [{
        name: 'Name',
        field: 'name',
        type: 'string'
    }, {
        name: 'Cash Assets',
        field: 'money',
        type: 'number'
    }, {
        name: 'Address',
        field: 'address',
        type: 'string'
    }],
    rows: [{
        name: 'John Brown',
        money: '300000',
        address: 'New York No. 1 Lake Park',
    }, {
        name: 'Jim Green',
        money: '1256000',
        address: 'London No. 1 Lake Park',
    }, {
        name: 'Joe Black',
        money: '120000.00',
        address: 'Sidney No. 1 Lake Park',
    }]
};

const table2 = {
    columns: [{
        name: 'Name',
        field: 'name',
        type: 'string'
    }, {
        name: 'Cash Assets',
        field: 'money',
        type: 'number'
    }, {
        name: 'Address',
        field: 'address',
        type: 'string'
    }],
    rows: [{
        name: 'John Brown',
        money: '300000',
        address: 'New York No. 1 Lake Park',
    }, {
        name: 'Jim Green',
        money: '1256000',
        address: 'London No. 1 Lake Park',
    }, {
        name: 'Joe Black',
        money: '120000.00',
        address: 'Sidney No. 1 Lake Park',
    }]
};
export function fetch(payload) { // eslint-disable-line
    console.log("fetch", payload);
    return { data };
    // return request(`/matchAnalysis`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         ...payload
    //     }),
    // });
}
export function fetchCard2(payload) { // eslint-disable-line
    console.log("fetchCard2", payload);
    return { data };
    // return request(`/matchAnalysis`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         ...payload
    //     }),
    // });
}
export function fetchCard3(payload) { // eslint-disable-line
    console.log("fetchCard3", payload);
    return { data };
    // return request(`/matchAnalysis`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         ...payload
    //     }),
    // });
}
export function fechTable1(payload) { // eslint-disable-line
    console.log("fechTable1", payload);
    return {
        data: {
            ...table1,
            ...payload
        }
    };
    // return request(`/matchAnalysis`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         ...payload
    //     }),
    // });
}
export function fechTable2(payload) { // eslint-disable-line
    console.log("fechTable2", payload);
    return {
        data: {
            ...table2,
            ...payload
        }
    };
    // return request(`/matchAnalysis`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         ...payload
    //     }),
    // });
}