/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
export default (props) => {
    const {
        toolbox,
        showToolbox,
        showToolboxDataZoom,
        showToolboxDataView,
        showToolboxMagicType,
        toolboxMagicType,
        showToolboxRestore,
        showToolboxSaveAsImage
    } = props;

    return {
        show: showToolbox,
        feature: {
            dataZoom: {
                show: showToolboxDataZoom,
                yAxisIndex: 'none'
            },
            dataView: {
                show: showToolboxDataView,
                readOnly: false
            },
            magicType: {
                show: showToolboxMagicType,
                type: toolboxMagicType
            },
            restore: {
                show: showToolboxRestore
            },
            saveAsImage: {
                show: showToolboxSaveAsImage
            }
        },
        ...toolbox
    };
};