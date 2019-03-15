/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
export default (props) => {
    const { legend, legendOrient, showLegend, legendLeft, legendRight, legendTop, legendBottom } = props;

    return {
        show: showLegend,
        left: legendLeft,
        right: legendRight,
        top: legendTop,
        bottom: legendBottom,
        orient: legendOrient,
        ...legend
    };
};