/**
 * @author M
 * @E-mail mpw0311@163.com
 * @version  1.0.0
 * @description  icon组件，兼容iconfont.cn/提供的标签
 * @link https://www.iconfont.cn
 */
import { Icon } from 'antd';
import { iconUrl } from '@config';

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