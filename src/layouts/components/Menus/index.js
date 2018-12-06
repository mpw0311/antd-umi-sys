import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import { Icon } from 'components';
import { queryKeysByPath } from './_';

const { SubMenu, Item } = Menu;

class MainMenu extends Component {
  constructor(props) {
    super(props);
    const { mode = "inline", theme = "dark" } = props;
    this.state = {
      mode,
      theme,
      menusData: []
    };
    this.renderMenu = this.renderMenu.bind(this);
  }
  componentWillMount() {
    const { menusData: originalData = [], location } = this.props;
    const { pathname } = location;
    const data = this.renderMenu(originalData);
    this.setState({
      menusData: data,
      pathname: [pathname],
      originalData,
    });
  }
  componentWillReceiveProps(nextProps) {
    const { menusData: originalData = [], location } = nextProps;
    const { pathname } = location;
    const data = this.renderMenu(originalData);
    this.setState({
      menusData: data,
      pathname: [pathname],
    });
  }
  renderMenu(rows, pathtitles = []) {
    const self = this;
    const { mode } = this.state;
    return rows.map((row) => {
      if (row === undefined) return false;
      const { title: name, link = "", key = link, query, icon = "bars", children, ...restState } = row;
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
              <a href={href}>
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
    const { location, defaultKey } = this.props;
    const { pathname, state: pathState } = location;
    const { menusData, originalData, mode, theme } = this.state;
    const { key } = pathState || queryKeysByPath(pathname, originalData);
    return (
      <Menu
        selectedKeys={[key || defaultKey]}
        mode={mode}
        theme={theme}
      >
        {menusData}
      </Menu>
    );
  }
}
export default MainMenu;
