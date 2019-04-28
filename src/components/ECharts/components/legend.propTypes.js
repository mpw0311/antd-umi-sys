import PropTypes from 'prop-types';

export default {
    //图形图例配置项
    legend: PropTypes.object,
    //是否显示图例
    showLegend: PropTypes.bool,
    //图例列表的布局朝向。
    legendOrient: PropTypes.oneOf(['horizontal', 'vertical']),
    //图例组件离容器左侧的距离。
    legendLeft: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['left', 'right', 'center']),
    ]),
    //图例组件离容器右侧的距离。
    legendRight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['left', 'right', 'center']),
    ]),
    //图例组件离容器上侧的距离。
    legendTop: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['top', 'bottom', 'middle']),
    ]),
    //图例组件离容器底侧的距离。
    legendBottom: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['top', 'bottom', 'middle']),
    ]),
};
