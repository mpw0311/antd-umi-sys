import * as api from './service';
import { findIndex } from 'lodash';
/**
 * 子节点加和
 * @param {*} data 
 */
const sumTree = (data) => {
    const { children, ...rest } = data;
    if (children && children.length > 0) {
        const total = {
            value: 0,
            time: 0
        };
        for (const item of children) {
            if (item.children) {
                const { value, time } = sumTree(item);
                total.value += value;
                total.time += time;
            } else {
                total.value += item.value;
                total.time += item.time;
            }
        }
        return {
            ...rest,
            ...total
        };
    } else {
        return data;
    }
};
/**
 * 查询子节点并替换，砍掉多余分支
 * @param {*} dataSource 源数据 
 * @param {*} dataset 要替换的数据
 */
const mergedata = (dataSource, dataset) => {
    const { name: key } = dataset;
    const { name, children, ...rest } = dataSource;
    if (key === name) {
        return dataset;
    } else if (findIndex(children, o => o.name === key) > -1) {
        const childs = children.map(item => item.name === key ? dataset : sumTree(item));
        return {
            name,
            children: childs,
            ...rest
        };
    } else {
        const [item] = children.filter(item => item.children && item.children.length > 0);
        if (!item) return dataSource;
        const res = mergedata(item, dataset);
        const childs = children.map(item => item.children && item.children.length > 0 ? res : item);
        return {
            name,
            children: childs,
            ...rest
        };
    }
};
export default {

    namespace: 'dimensional',

    state: {

        dataset: {
            name: "中国",
            children: [
                {
                    name: "浙江",
                    value: 5510,
                    time: 20
                },
                {
                    name: "广西",
                    time: 250,
                    children: [
                        {
                            name: "桂林",
                            time: 20,
                            children: [
                                {
                                    name: "秀峰区",
                                    time: 220,
                                    children: [
                                        { name: 'a', value: 10, time: 20 },
                                        { name: 'b', value: 20, time: 230 },
                                        { name: 'c', value: 30, time: 230 },
                                        { name: 'e', value: 30, time: 320 },
                                        { name: 'f', value: 30, time: 320 },
                                        { name: 'g', value: 130, time: 210 },
                                        { name: 'h', value: 130, time: 210 },
                                        { name: 'j', value: 230, time: 210 },
                                        { name: 'k', value: 330, time: 120 },
                                        { name: 'l', value: 3330, time: 230 },
                                        { name: 'm', value: 3450, time: 20 },
                                        { name: 'n', value: 310, time: 210 },
                                        { name: 'x', value: 30, time: 120 },
                                    ]
                                },
                                { name: "叠彩区", value: 100, time: 20 },
                                { name: "象山区", value: 1100, time: 320 },
                                { name: "七星区", value: 100, time: 320 }
                            ]
                        },
                        { name: "南宁", value: 100, time: 220 },
                        { name: "柳州", value: 100, time: 220 },
                        { name: "防城港", value: 100, time: 220 }
                    ]
                },
                {
                    name: "黑龙江",
                    value: 5100,
                    time: 120
                },
                {
                    name: "新疆",
                    value: 5123,
                    time: 120
                }
            ]
        }
    },

    subscriptions: {
        setupHistory({ dispatch, history }) {// eslint-disable-line
            history.listen(({ pathname, query, state }) => { // eslint-disable-line
                if (/^\/sys\/snbThree\//.test(pathname)) {

                }
            });
        },
    },

    effects: {
        *getData({ payload }, { call, put, select }) {
            const { name } = payload;
            const { dataset } = yield select(state => state.dimensional);
            const { data = {} } = yield call(api.fetch, { ...payload });
            yield put({
                type: 'updated',
                payload: {
                    dataset: { name, ...data },
                    dataSource: dataset
                },
            });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        updated(state, action) {
            const { dataset: dataSource } = state;
            const { payload: { dataset } } = action;
            const dd = mergedata(dataSource, dataset);
            return { ...state, dataset: dd };
        },
    },

};


