import getType from './type';
export default (props) => {
    const { series, data: { rows }, type, seriesLayoutBy } = props;
    const setting = type.toLowerCase() === 'area' ? {
        stack: '总量',
        areaStyle: {},
    } : {};
    const _series = rows.map(() => ({
        type: getType(type),
        ...setting,
        seriesLayoutBy
    }));
    return series || _series;
}