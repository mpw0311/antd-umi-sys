import PropTypes from 'prop-types';

export default {
    //工具栏配置项
    toolbox: PropTypes.object,
    //是否显示工具栏
    showToolbox: PropTypes.bool,
    //区域缩放
    showToolboxDataZoom: PropTypes.bool,
    //数据视图
    showToolboxDataView: PropTypes.bool,
    //是否图形切换
    showToolboxMagicType: PropTypes.bool,
    //图形切换类型
    toolboxMagicType: PropTypes.array,
    //刷新还原
    showToolboxRestore: PropTypes.bool,
    //保存为图片
    showToolboxSaveAsImage: PropTypes.bool,
};