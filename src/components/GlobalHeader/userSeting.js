import { Dropdown, Menu, Icon } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './index.less';

function User(props) {
    const { userInfo, dispatch } = props;
    const { userName } = userInfo;
    const handleMenuClick = (param) => {
        const { key, item } = param;
        const { state } = item.props;
        if (key === 'logout') {
            dispatch({
                type: "login/logout",
                payload: {
                    ...state,
                },
            });
        } else {
            dispatch(routerRedux.push({
                pathname: key,
                state,
            }));
        }
    };
    const menu = (<Menu onClick={handleMenuClick}>
        <Menu.Item key={"sys/user"} state={{ userName, pathtitles: ["个人中心"] }} disabled>
            <Icon type="user" />  个人中心
        </Menu.Item>
        <Menu.Item key={"sys/resetPassword"} state={{ userName, pathtitles: ["修改密码"] }} disabled>
            <Icon type="edit" />  修改密码
        </Menu.Item>
        <Menu.Item key={"sys/settings"} state={{ userName, pathtitles: ["设置中心"] }} disabled>
            <Icon type="setting" />  设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" state={{ userName }}>
            <Icon type="logout" />  退出登录
        </Menu.Item>
    </Menu>);
    return (
        <Dropdown overlay={menu}>
            <span className={styles.username}>
                <Icon type="user" style={{ paddingRight: 5, fontSize: 16 }} />
                {userName}
            </span>
        </Dropdown>
    );
}
export default User;