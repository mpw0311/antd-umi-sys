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