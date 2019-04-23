
import data1 from './services/data01.json';
import data2 from './services/data02.json';
import data3 from './services/data03.json';
export default {
    namespace: 'echarts',
    state: {
        bar_data: data1,
        line_data: data1,
        area_data: data1,
        yBar_data: data1,
        funnel_data: data2,
        pie_data: data2,
        pieDoughnut_data: data2,
        sankey_data: data3,
        description: '本Demo仅作为参考，只展示少数Echarts图形及属性，仍有许多需要完善和修改的地方，后期有时间会慢慢完善更新！'
    },
    subscriptions: {

    },

    effects: {

    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
