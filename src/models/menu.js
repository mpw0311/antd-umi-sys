
// import { routerRedux } from 'dva/router';
import * as api from '../services';
import orginalData from 'utils/menus.config';
import { munesFilter, flattenMenu } from 'utils/_';
import { menuPermission } from 'config';
export default {
    namespace: 'menu',
    state: {
        menusData: [],
        flattenMenuData: [],
        diffMenuData: [],
    },
    subscriptions: {
        setup({ dispatch, history }) { // eslint-disable-line
        },
    },

    effects: {
        *getMenuData(_, { call, put, select }) {
            let menusData = yield select(({ menu }) => menu.menuData);
            if (!(menusData && menusData.length > 0)) {
                const { data = [] } = yield call(api.getMenuData, {});
                const { menusData, diffMenuData } = munesFilter(orginalData, data, menuPermission);
                const flattenMenuData = flattenMenu(menusData);
                yield put({
                    type: 'save',
                    payload: {
                        menusData,
                        diffMenuData,
                        flattenMenuData
                    }
                });
            }
        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
