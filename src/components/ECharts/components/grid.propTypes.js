import PropTypes from 'prop-types';

export default {
    //直角坐标系内绘图网格配置
    grid: PropTypes.object,
    gridTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    gridBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    gridLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    gridRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
