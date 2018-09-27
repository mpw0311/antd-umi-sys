import React, { Component } from 'react';
import { connect } from 'dva';
import { LocaleProvider, Layout, Spin } from 'antd';
import _ from 'lodash';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Menus, GlobalHeader, Breadcrumb, GlobalDrawer } from 'components';
import { footerText } from 'config';
import styles from './index.less';

const { Header, Footer, Sider, Content } = Layout;
const footer = (
    <Footer className={styles.footer}>
        {footerText}
    </Footer>
);
const globalLoading = (
    <div className={styles.spin}>
        <Spin size="large" tip="加载中..." />
    </div>
);
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            searchData: [],
            minHeight: document.body.offsetHeight
        };
        this.handleClick = this.handleClick.bind(this);
        this.resize = this.resize.bind(this);
    }
    componentDidMount() {
        this.resize();
    }
    shouldComponentUpdate(nextProps, nextState) { //eslint-disable-line
        const propsResult = _.isEqual(nextProps, this.props);
        const stateResult = _.isEqual(nextState, this.state);
        return !(propsResult && stateResult);
    }
    resize() {
        window.onresize = () => {
            const winWidth = document.documentElement.clientWidth;
            const { collapsed } = this.state;
            if (winWidth <= 1400 && collapsed === false) {
                this.setState({
                    collapsed: true
                });
            } else if (winWidth > 1400 && collapsed === true) {
                this.setState({
                    collapsed: false
                });
            }
        };
    }
    handleClick() {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed,
        }));
    }
    render() {
        const { location, children, userInfo, message, dispatch, menusData = [], notification, loading } = this.props;
        if (loading === true && menusData.length === 0) {
            return globalLoading;
        }
        const { searchData } = this.state;
        const { pathname, state: pathstate } = location;
        const { key, pathtitles } = pathstate || {};
        const defaultKey = key || pathname;
        const isFrame = pathname && pathname.indexOf('frame') > -1 ? true : false;
        const Frame = (
            <Layout>
                <Content className={styles.iframeContent}>
                    <Breadcrumb pathtitles={pathtitles} />
                    <div className={styles.iframeChildren}>
                        {children}
                    </div>
                </Content>
                {footer}
            </Layout>
        );
        const Child = (
            <Layout className={styles.content}>
                <Content className={styles.children}>
                    {children}
                    {footer}
                </Content>
            </Layout>
        );
        return (
            <LocaleProvider locale={zhCN}>
                <Layout className={styles.wrapper}>
                    <Header style={{ padding: 0 }}>
                        <GlobalHeader
                            userInfo={userInfo}
                            dispatch={dispatch}
                            message={message}
                            notification={notification}
                            menusData={menusData}
                            dataSource={searchData}
                        />
                        <GlobalDrawer />
                    </Header>
                    <Layout className={styles.section}>
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
function mapStateToProps({ global, loading }) {
    const { message, userInfo, menusData, notification } = global;
    return {
        message,
        userInfo,
        menusData,
        notification,
        loading: loading.global
    };
}
export default connect(mapStateToProps)(Index);