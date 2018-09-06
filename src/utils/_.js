
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