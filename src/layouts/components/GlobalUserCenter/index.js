/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import React, { PureComponent } from 'react';
import { formatMessage } from 'umi/locale';
import { Menu, Icon, Spin } from 'antd';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export default class SelectLang extends PureComponent {


    render() {
        const { userInfo = {}, onSetting = () => { }, theme, className } = this.props;
        const { userName } = userInfo;
        const handleMenuClick = (param) => {
            onSetting(param);
        };
        const menu = (<Menu onClick={handleMenuClick}>
            <Menu.Item key={"sys/user"} state={{ userName, pathtitles: ["个人中心"] }} disabled>
                <Icon type="user" />  {formatMessage({ id: 'platform.userCenter' })}
            </Menu.Item>
            {/* <Menu.Item key={"/resetPassword"} state={{ userName, pathtitles: ["修改密码"] }}>
            <Icon type="edit" />  修改密码
        </Menu.Item> */}
            <Menu.Item key={"sys/settings"} state={{ userName, pathtitles: ["设置中心"] }} disabled>
                <Icon type="setting" />  {formatMessage({ id: 'platform.settings' })}
            </Menu.Item>
            <Menu.Item key={"/versions"} state={{ userName, pathtitles: ["更新日志"] }}>
                <Icon type="edit" />   {formatMessage({ id: 'platform.log' })}
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout" state={{ userName }}>
                <Icon type="logout" />   {formatMessage({ id: 'platform.logout' })}
            </Menu.Item>
        </Menu>);

        return userName ? (
            <HeaderDropdown overlay={menu} placement="bottomRight">
                <span className={classNames(styles.dropDown, className,
                    { [styles.dark]: theme === 'dark' })} >
                    <Icon type="user" />{userName}
                </span>
            </HeaderDropdown>)
            :
            (<Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />);
    }
}
