import { Icon as MyIcon } from 'antd';
import styles from "./index.less";

function Icon(props) {
    const { type = "bars", style = {}, spin = false } = props;
    const classNames = ["icon", styles.icon, type];
    if (type.indexOf("icon") > -1) {
        return (
            <i className={classNames.join(" ")} style={style} />
        );
    } else {
        return (
            <MyIcon type={type} style={style} spin={spin} />
        );
    }
}
export default Icon;