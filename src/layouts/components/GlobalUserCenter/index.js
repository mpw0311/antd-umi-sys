import { Dropdown, Menu, Icon } from 'antd';
import Context from '@context';
import styles from './index.less';

function User(props) {
    const { userInfo, onSetting = () => { } } = props;
    const { userName } = userInfo;
    const handleMenuClick = (param) => {
        onSetting(param);
    };
    const menu = (<Menu onClick={handleMenuClick}>
        <Menu.Item key={"sys/user"} state={{ userName, pathtitles: ["个人中心"] }} disabled>
            <Icon type="user" />  个人中心
        </Menu.Item>
        {/* <Menu.Item key={"/resetPassword"} state={{ userName, pathtitles: ["修改密码"] }}>
            <Icon type="edit" />  修改密码
        </Menu.Item> */}
        <Menu.Item key={"sys/settings"} state={{ userName, pathtitles: ["设置中心"] }} disabled>
            <Icon type="setting" />  设置
        </Menu.Item>
        <Menu.Item key={"/versions"} state={{ userName, pathtitles: ["版本说明"] }}>
            <Icon type="edit" />  版本说明
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" state={{ userName }}>
            <Icon type="logout" />  退出登录
        </Menu.Item>
    </Menu>);
    return (
        <Context.Consumer>
            {({ theme }) => (
                <Dropdown overlay={menu}>
                    <span className={styles.username} style={{ color: theme === 'dark' ? "#FFF" : undefined }}>
                        <Icon type="user" style={{ paddingRight: 5, fontSize: 16 }} />
                        {userName}
                    </span>
                </Dropdown>
            )}
        </Context.Consumer>

    );
}
export default User;