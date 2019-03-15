/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
export default (props) => {
    const { xAxis, xAxisRotate, interval } = props;
    return {
        type: 'category',
        axisLabel: {
            interval,
            rotate: xAxisRotate,
            // formatter: function (value, index) {
            //     return value.length > 10 ? value.slice(0, 10) + '…' : value;
            // }
        },
        ...xAxis
    };
};