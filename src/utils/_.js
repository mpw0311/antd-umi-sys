
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