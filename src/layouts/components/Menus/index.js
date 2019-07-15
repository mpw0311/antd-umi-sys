/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.1.0
 * @description  菜单组件
 */
import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';
import { connect } from 'dva';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import { Icon, Consumer } from '@components';
import memoizeOne from 'memoize-one';
import { queryKeysByPath, testMenusData } from './_';

const { SubMenu, Item } = Menu;

class MainMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.renderMenu = memoizeOne(this.renderMenu, isEqual);
  }
  static defaultProps = {
    mode: "inline",
    menuTheme: 'dark'
  };
  renderMenu(data = [], pathtitles = []) {
    const rows = Array.isArray(data) ? data : data.rows;
    const self = this;
    const { mode } = this.props;
    return rows.map((row) => {
      if (row === undefined) return false;
      const { title: name, link = "", key = link, query, icon = "bars", children, target = '_blank', ...restState } = row;
      if (children && children.length > 0) {
        const subMenu = self.renderMenu(children, pathtitles.concat(name));
        return (
          <SubMenu
            key={key}
            text={name}
            title={<span><Icon type={icon} />{mode === 'inline' ? <span>{name}</span> : null}</span>}
          >
            {subMenu}
          </SubMenu>
        );
      } else {
        const { url: href } = restState;
        if (link === '' && href) {
          return (
            <Item
              key={href.slice(-5)}
              text={name}
            >
              <a href={href} target={target}>
                <Icon type={icon} />
                <span>{name}</span>
              </a>
            </Item>
          );
        }
        return (
          <Item
            key={key}
            text={name}
          >
            <Link to={{ pathname: link, query, state: { ...restState, key, pathtitles: pathtitles.concat(name) } }}>
              <Icon type={icon} />
              <span>{name}</span>
            </Link>
          </Item>
        );
      }
    });
  }
  render() {
    const { location, defaultKey, menuTheme, menusData, mode } = this.props;
    const { pathname, state: pathState } = location;
    const menus = this.renderMenu(menusData);
    const { key } = pathState || queryKeysByPath(pathname, menusData);
    return (
      <Menu
        selectedKeys={[key || defaultKey]}
        mode={mode}
        theme={menuTheme}
        style={{ overflowY: 'auto', height: "calc(100vh - 70px)" }}
        className="progressbar"
      >
        {menus}
      </Menu>
    );
  }
}
export default connect(({ menu: { menusData } }) => ({ menusData }))(Consumer(MainMenu));

MainMenu.propTypes = {
  menusData: PropTypes.arrayOf(function (propValue, key, componentName, location, propFullName) {
    const err = () => new Error(
      'Invalid prop `' + propFullName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
    testMenusData(propValue[key], err);
  })
}