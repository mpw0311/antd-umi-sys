/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
export default (props) => {
    const { tooltip, showTooltip, axisPointer } = props;
    const cross = {
        type: 'cross',
        label: {
            backgroundColor: '#6a7985'
        }
    };
    const shadow = {
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    };
    return {
        show:showTooltip,
        trigger: 'axis',
        axisPointer: axisPointer === 'cross' ? cross : axisPointer === 'shadow' ? shadow : undefined,
        ...tooltip
    };
};