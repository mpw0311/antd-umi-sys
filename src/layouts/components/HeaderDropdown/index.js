/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  菜单栏dropdown
 */
import React, { PureComponent } from 'react';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

export default class HeaderDropdown extends PureComponent {
  render() {
    const { overlayClassName, ...props } = this.props;
    return (
      <Dropdown overlayClassName={classNames(styles.container, overlayClassName)} {...props} />
    );
  }
}
