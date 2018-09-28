export const _getType = (type) => {
    const _type = type.toLowerCase();
    switch (_type) {
        case 'line':
            return {
                type: 'line'
            };
        case 'bar':
            return {
                type: 'bar'
            };
        case 'area':
            return {
                type: 'line',
                areaStyle: {},
            };
        default:
            return {
                type: 'line'
            };
    }
};