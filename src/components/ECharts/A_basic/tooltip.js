/**
 * author：M
 * E-mail: mpw0311@163.com
 */
export default (props) => {
    const { tooltip, showTooltip, axisPointer } = props;
    const cross = {
        type: 'cross',
        label: {
            backgroundColor: '#6a7985'
        }
    }
    const shadow = {
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
    return {
        shadow: showTooltip,
        trigger: 'axis',
        axisPointer: axisPointer === 'cross' ? cross : axisPointer === 'shadow' ? shadow : undefined,
        ...tooltip
    };
}