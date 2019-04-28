import PropTypes from 'prop-types';

export default {
    //组件标题配置项
    title: PropTypes.object,
    //组件标题
    titleText: PropTypes.string,
    titleColor: PropTypes.string,
    titleFontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    titleFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    titleTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    titleBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    titleLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    titleRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};