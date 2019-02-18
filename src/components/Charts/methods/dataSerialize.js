/**
  * 序列化数据
  * @param {*} data
  *  {
  *   "columns": [
  *       {
  *           "field": "date",
  *           "name": "时间",
  *           "type": "string"
  *       },
  *       {
  *           "field": "T0",
  *           "name": "T0",
  *           "type": "number"
  *       },
  *       {
  *           "field": "T1",
  *           "name": "T1",
  *           "type": "number"
  *       },
  *       {
  *           "field": "T2",
  *           "name": "T2",
  *           "type": "number"
  *       }
  *   ],
  *   "rows": [
  *       {
  *           "date": "06-01",
  *           "T0": 123,
  *           "T1": 123,
  *           "T2": 123
  *       },
  *       {
  *           "date": "06-02",
  *           "T0": 123,
  *           "T1": 123,
  *           "T2": 123
  *       }
  *   ]
  * }
  * @param {*} y_index |y轴索引默认0
  * @returns {object}
  * var legendData = ['T0', 'T1', 'T2'];
  *  var xAxisData = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '0600'];
  *  var seriesData = [
  *      [120, 132, 101, 134, 90, 230, 210],
  *      [220, 182, 191, 234, 290, 330, 310],
  *      [150, 232, 201, 154, 190, 330, 410]
  *  ];
*/
export function dataSerialize(data, yIndex = 0) {
    let { columns = [] } = data;
    const { rows = [] } = data;
    if (typeof (columns) === "string") {
        columns = JSON.parse(columns);
    }
    const axisData = [];
    const legendData = [];
    const seriesData = [];

    columns.map((column, i) => {
        const field = column.field;
        const name = column.name;
        const d = [];
        if (i !== yIndex) {
            legendData.push(name);
        }
        rows.map((row) => {
            let value = row[field];
            if (i === yIndex) {
                axisData.push(value);
            } else {
                if (value === undefined || value === null || value === "") {
                    value = 0;
                }
                d.push(value);
            }
            return row;
        });
        if (i !== yIndex) {
            seriesData.push(d);
        }
        return column;
    });

    return {
        axisData,
        legendData,
        seriesData
    };
}
export const dataSerializeReverse = (data, yIndex = 0) => {
    let { columns = [] } = data;
    const { rows = [] } = data;
    if (typeof (columns) === "string") {
        columns = JSON.parse(columns);
    }
    const axisData = [];
    const legendData = [];
    const seriesData = [];
    rows.forEach(row => {
        const _row = [];
        columns.forEach((col, i) => {
            const { field } = col;
            let value = row[field];
            if (i === yIndex) {
                legendData.push(value);
            } else {
                if (value === undefined || value === null || value === "") {
                    value = 0;
                }
                _row.push(value + "");
            }
        });
        seriesData.push(_row);
    });
    columns.forEach((col, i) => {
        const { name } = col;
        if (i !== yIndex) {
            axisData.push(name);
        }
    });
    return {
        axisData,
        legendData,
        seriesData
    };
};