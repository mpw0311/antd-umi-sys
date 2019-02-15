import * as api from './service';

export default {

    namespace: 'regionalAnalysis',

    state: {
        checkes: { email: true, union: true, video: true },
        defaultKey: 'email',
        mapdata: {
            "columns": [
                {
                    "field": "name",
                    "name": "省市",
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
                    "name": "北京",
                    "email": 9,
                    "union": 188,
                    "video": 235,
                    "visit": 68,
                    "search": 402
                },
                {
                    "name": "天津",
                    "email": 93,
                    "union": 182,
                    "video": 312,
                    "visit": 123,
                    "search": 111
                },
                {
                    "name": "上海",
                    "email": 90,
                    "union": 192,
                    "video": 32,
                    "visit": 280,
                    "search": 441
                },
                {
                    "name": "重庆",
                    "email": 144,
                    "union": 252,
                    "video": 48,
                    "visit": 352,
                    "search": 377
                },
                {
                    "name": "河北",
                    "email": 116,
                    "union": 95,
                    "video": 86,
                    "visit": 98,
                    "search": 294
                },
                {
                    "name": "河南",
                    "email": 58,
                    "union": 46,
                    "video": 193,
                    "visit": 12,
                    "search": 562
                },
                {
                    "name": "云南",
                    "email": 131,
                    "union": 39,
                    "video": 268,
                    "visit": 115,
                    "search": 179
                },
                {
                    "name": "辽宁",
                    "email": 140,
                    "union": 161,
                    "video": 130,
                    "visit": 12,
                    "search": 591
                },
                {
                    "name": "黑龙江",
                    "email": 160,
                    "union": 165,
                    "video": 305,
                    "visit": 139,
                    "search": 72
                },
                {
                    "name": "湖南",
                    "email": 173,
                    "union": 93,
                    "video": 193,
                    "visit": 213,
                    "search": 313
                },
                {
                    "name": "安徽",
                    "email": 27,
                    "union": 53,
                    "video": 118,
                    "visit": 179,
                    "search": 155
                },
                {
                    "name": "山东",
                    "email": 165,
                    "union": 155,
                    "video": 71,
                    "visit": 241,
                    "search": 551
                },
                {
                    "name": "新疆",
                    "email": 89,
                    "union": 11,
                    "video": 64,
                    "visit": 283,
                    "search": 425
                },
                {
                    "name": "江苏",
                    "email": 172,
                    "union": 5,
                    "video": 205,
                    "visit": 205,
                    "search": 542
                },
                {
                    "name": "浙江",
                    "email": 190,
                    "union": 3,
                    "video": 340,
                    "visit": 268,
                    "search": 209
                },
                {
                    "name": "江西",
                    "email": 99,
                    "union": 311,
                    "video": 199,
                    "visit": 98,
                    "search": 31
                },
                {
                    "name": "湖北",
                    "email": 107,
                    "union": 17,
                    "video": 278,
                    "visit": 259,
                    "search": 162
                },
                {
                    "name": "广西",
                    "email": 48,
                    "union": 239,
                    "video": 218,
                    "visit": 125,
                    "search": 276
                },
                {
                    "name": "甘肃",
                    "email": 10,
                    "union": 186,
                    "video": 42,
                    "visit": 375,
                    "search": 53
                },
                {
                    "name": "山西",
                    "email": 89,
                    "union": 190,
                    "video": 112,
                    "visit": 180,
                    "search": 217
                },
                {
                    "name": "内蒙古",
                    "email": 192,
                    "union": 377,
                    "video": 16,
                    "visit": 337,
                    "search": 434
                },
                {
                    "name": "陕西",
                    "email": 5,
                    "union": 1,
                    "video": 12,
                    "visit": 29,
                    "search": 591
                },
                {
                    "name": "吉林",
                    "email": 54,
                    "union": 201,
                    "video": 117,
                    "visit": 11,
                    "search": 21
                },
                {
                    "name": "福建",
                    "email": 15,
                    "union": 195,
                    "video": 103,
                    "visit": 212,
                    "search": 366
                },
                {
                    "name": "贵州",
                    "email": 107,
                    "union": 26,
                    "video": 336,
                    "visit": 304,
                    "search": 310
                },
                {
                    "name": "广东",
                    "email": 76,
                    "union": 105,
                    "video": 187,
                    "visit": 345,
                    "search": 329
                },
                {
                    "name": "青海",
                    "email": 97,
                    "union": 12,
                    "video": 143,
                    "visit": 7,
                    "search": 502
                },
                {
                    "name": "西藏",
                    "email": 16,
                    "union": 259,
                    "video": 17,
                    "visit": 330,
                    "search": 346
                },
                {
                    "name": "四川",
                    "email": 18,
                    "union": 353,
                    "video": 227,
                    "visit": 373,
                    "search": 515
                },
                {
                    "name": "宁夏",
                    "email": 154,
                    "union": 26,
                    "video": 154,
                    "visit": 197,
                    "search": 105
                },
                {
                    "name": "海南",
                    "email": 20,
                    "union": 336,
                    "video": 309,
                    "visit": 157,
                    "search": 198
                },
                {
                    "name": "台湾",
                    "email": 79,
                    "union": 61,
                    "video": 321,
                    "visit": 305,
                    "search": 305
                },
                {
                    "name": "香港",
                    "email": 75,
                    "union": 168,
                    "video": 106,
                    "visit": 80,
                    "search": 582
                },
                {
                    "name": "澳门",
                    "email": 0,
                    "union": 43,
                    "video": 54,
                    "visit": 362,
                    "search": 488
                }
            ]
        }
    },

    subscriptions: {
        setupHistory({ dispatch, history }) {// eslint-disable-line
            history.listen(({ pathname, query, state }) => { // eslint-disable-line
                if (pathname.indexOf('sys/regionalAnalysis') > -1) {
                    // dispatch({ type: 'getData', payload: { timeType: 'day' } });
                }
            });
        },
    },

    effects: {
        *getData({ payload }, { call, put }) {
            const { data: { mapdata } } = yield call(api.fetch, { ...payload });
            yield put({
                type: 'save',
                payload: {
                    mapdata
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
