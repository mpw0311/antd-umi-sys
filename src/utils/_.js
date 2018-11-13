
import _ from 'lodash';
// 菜单权限
export const MunesFilter = (orginalData, data = []) => { // eslint-disable-line
  if (!(data && data.length !== 0)) return [];
  const menus = _.cloneDeep(orginalData);
  // 降维操作
  const _dimensionalityReduction = (data, names = []) => {
      data.map(item => {
          const { key, children } = item;
          if (children && children.length > 0) {
              return _dimensionalityReduction(children, names);
          } else if (key) {
              return names.push(key);
          }
      });
      return names;
  };
  const keys = _dimensionalityReduction(data);
  // 菜单过滤
  const _filter = (menus, keys) => {
      const data = menus.map((item) => {
          const { key, children } = item;
          if (children && children.length > 0) {
              const res = _filter(children, keys);
              _.remove(res, value => value === undefined || value === null);
              item.children = res;
              return item;
          } else if (keys.indexOf(key) > -1) {
              return item;
          }
      });
      _.remove(data, item => item === undefined || item === null || item.children && item.children.length === 0);
      return data;
  };
  const res = _filter(menus, keys);
  return res;
};
export const searchMenu = (value, data, pathtitles = []) => {
  if (value === undefined || value === null) return {};
  data = _.cloneDeep(data);
  for (const item of data) {
      const { title, key, children } = item;
      if (children && children.length > 0) {
          return searchMenu(value, children, pathtitles.concat(title));
      } else if (key === value) {
          return { ...item, pathtitles: pathtitles.concat(title) };
      }
  }
};
export const toTableData = (data = {}) => {
    const { columns = [], rows = [] } = data;
    const headData = columns.map(item => {
      const { name, field, type } = item;
      return {
        title: name,
        dataIndex: field,
        key: field,
        type
      };
    });
    const dataSource = rows.map((item, i) => {
      return {
        key: i,
        ...item
      };
    });
    return {
      columns: headData,
      dataSource
    };
  };
  /**
 * 数字加逗号显示
 * @param {number} number
 * @param {number} limit
 * @returns {string} d
 */
export const formatNumer = (num, limit) => {
    if (num === undefined || num === null || num === "") return num;
    num += "";
    if (num === "NaN") return num;
    limit = limit || 1000;
    const n = num.indexOf('.');
    let str = "";
    if (n > -1) {
        str = num.slice(n);
        num = num.slice(0, n);
    }
    const arr = num.split("");
    const len = arr.length;
    if (limit === 1000) {
        if (len >= 4) {
            arr.splice(-3, 0, ',');
        }
        if (len >= 7) {
            arr.splice(-7, 0, ',');
        }
        if (len >= 10) {
            arr.splice(-11, 0, ',');
        }
        if (len >= 13) {
            arr.splice(-15, 0, ',');
        }
    }
    num = arr.join("") + str;
    return num;
};