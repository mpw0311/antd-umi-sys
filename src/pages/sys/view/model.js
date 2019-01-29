import moment from 'moment';
import pathToRegexp from 'path-to-regexp';
// import * as api from './service';
const data =  {
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
};
const dd = {
    columns: [
        {
            field: 'date',
            name: '日期',
        },
        {
            field: 'range1',
            name: '0~30',
        },
        {
            field: 'range2',
            name: '30~60',
        },
        {
            field: 'range3',
            name: '60~90',
        },
        {
            field: 'range4',
            name: '90~120',
        },
        {
            field: 'range5',
            name: '>=120',
        },
    ],
    rows: [
        {
            date: '20181212',
            range1: "123",
            range2: "223",
            range3: "323",
            range4: "423",
            range5: "523",

        },
        {
            date: '20181213',
            range1: "101",
            range2: "201",
            range3: "301",
            range4: "401",
            range5: "501",

        },
        {
            date: '20181214',
            range1: "181",
            range2: "281",
            range3: "381",
            range4: "481",
            range5: "581",

        }
    ]
};
export default {

    namespace: 'viewModel',

    state: {
        p1: {},
        p2: {},

    },

    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(({ pathname, query, state }) => { // eslint-disable-line
                if (/^\/sys\/view\//.test(pathname)) {
                    const keys = pathToRegexp('/sys/view/:key').exec(pathname) || [];
                    const [, key] = keys;
                    if (key) {
                        dispatch({
                            type: 'getData', payload: {
                                time: [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
                                key
                            }
                        });
                    }
                }
            });
        },
    },

    effects: {
        *getData({ payload }, { call, put }) {//eslint-disable-line
            const { key } = payload;
            // const { data = {} } = yield call(api.fetch, { ...payload });
            yield put({
                type: 'save',
                payload: {
                    [key]: key === 'p1' ? data : dd
                },
            });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
