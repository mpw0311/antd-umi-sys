/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  icon组件，兼容iconfont.cn/提供的标签
 * @link https://www.iconfont.cn
 */
import { Icon } from 'antd';
import { iconUrl } from '@platformConfig';
import PropTypes from 'prop-types';
function Index(props) {
    const { type = "bars", style = {}, spin = false } = props;
    if (type.indexOf("icon") > -1) {
        const MyIcon = Icon.createFromIconfontCN({
            scriptUrl: iconUrl, // 在 iconfont.cn 上生成
        });
        return (
            <MyIcon type={type} style={style} />
        );
    } else {

        return (
            <Icon type={type} style={style} spin={spin} />
        );
    }
}
export default Index;
Index.propTypes = {
    //icon类型
    type: PropTypes.string,
    //icon 样式
    style: PropTypes.object,
    //是否加载中
    spin: PropTypes.bool,
};