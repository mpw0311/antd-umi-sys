export const _getCoord = (data = {}) => {
    const { rows = [] } = data;
    const len = rows.length;
    switch (len) {
        case 2:
            return [
                {
                    radius: '55%',
                    center: ['25%', '55%'],
                },
                {
                    radius: '55%',
                    center: ['75%', '55%'],
                },
            ];
        case 3:
            return [
                {
                    radius: '45%',
                    center: ['16.7%', '55%'],
                },
                {
                    radius: '45%',
                    center: ['50%', '55%'],
                },
                {
                    radius: '45%',
                    center: ['83.4%', '55%'],
                },
            ];
        case 4:
            return [
                {
                    radius: '45%',
                    center: ['12.5%', '55%'],
                },
                {
                    radius: '45%',
                    center: ['37.5%', '55%'],
                },
                {
                    radius: '45%',
                    center: ['62.5%', '55%'],
                },
                {
                    radius: '45%',
                    center: ['87.5%', '55%'],
                },
            ];
        default:
            return [{
                radius: '65%',
                center: ['50%', '55%'],
            }];
    }
};

export const _getSeries = (data = {}, settings, coords) => {
    const { columns = [], rows = [] } = data;
    const [xAxisColumn, ...indexs] = columns;
    const { field: xAxisId } = xAxisColumn;
    return rows.map((row, i) => {
        const dd = indexs.map(item => {
            const { field, name } = item;
            return {
                value: row[field],
                name: name
            };
        });
        return {
            name: row[xAxisId],
            data: dd,
            ...settings,
            ...coords[i]
        };
    });
};
export const _getLegendData = (data) => {
    const { columns = [] } = data;
    const [, ...indexs] = columns;
    return indexs.map(item => item.name);
};