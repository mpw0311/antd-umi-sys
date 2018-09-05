import React, { Component } from 'react';
import { connect } from 'dva';
import { LocaleProvider, Layout } from 'antd';
import _ from 'lodash';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Menus, GlobalHeader } from 'components';
import styles from './index.less';

const { Header, Footer, Sider, Content } = Layout;
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            searchData: [],
            minHeight: document.body.offsetHeight
        };
        this.handleClick = this.handleClick.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) { //eslint-disable-line
        const propsResult = _.isEqual(nextProps, this.props);
        const stateResult = _.isEqual(nextState, this.state);
        return !(propsResult && stateResult);
    }
    handleClick() {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed,
        }));
    }
    render() {
        const { location, children, userInfo, message, dispatch, menusData = [], defaultMenu = {}, notification } = this.props;
        const { searchData } = this.state;
        const { pathname, state: pathstate } = location;
        const { pathtitles } = pathstate || {};
        const { key: defaultKey, pathtitles: defaultPathtitles } = defaultMenu;
        const names = pathtitles || defaultPathtitles; // eslint-disable-line
        const isFrame = pathname && (pathname === '/sys' || pathname.indexOf('frame') > -1) ? true : false;// eslint-disable-line
        const footer = (
            <Footer className={styles.footer}>
                V2.5.0 2018 © by jlc data center.
            </Footer>
        );
        const Frame = (
            <Layout>
                <Content className={styles.content}>
                    {/* <Breadcrumb pathtitles={names} /> */}
                    <div className={styles.children}>
                        {children}
                    </div>
                </Content>
                {footer}
            </Layout>
        );
        const Child = (
            <Layout>
                <Content className={styles.content}>
                    <div className={styles.children}>
                        {children}
                        {footer}
                    </div>
                </Content>
            </Layout>
        );
        return (
            <LocaleProvider locale={zhCN}>
                <Layout style={{ height: '100%' }}>
                    <Header style={{ padding: 0 }}>
                        <GlobalHeader
                            userInfo={userInfo}
                            dispatch={dispatch}
                            message={message}
                            notification={notification}
                            menusData={menusData}
                            dataSource={searchData}
                        />
                    </Header>
                    <Layout>
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.handleClick}
                            className={styles.siderbar}
                        >
                            <Menus
                                location={location}
                                menusData={menusData}
                                defaultKey={defaultKey}
                            />
                        </Sider>
                        {isFrame ? Frame : Child}
                    </Layout >
                </Layout>
            </LocaleProvider>
        );
    }
}
function mapStateToProps({ global }) {
    const { message, userInfo, menusData, defaultMenu, notification } = global.state;
    return {
        message,
        userInfo,
        menusData,
        defaultMenu,
        notification,
    };
}
export default connect(mapStateToProps)(Index);