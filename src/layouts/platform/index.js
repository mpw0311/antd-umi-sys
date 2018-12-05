import { PureComponent } from 'react';
import { connect } from 'dva';
import { Layout, BackTop, Icon, Spin } from 'antd';
import { copyright } from 'config';
import { Menus } from 'components';
import HeaderContent from './header';
import styles from './index.less';

const { Header, Sider, Content, Footer } = Layout;
const footer = (
    <Footer className={styles.footer}>
        {copyright}
    </Footer>
);
const globalLoading = (
    <div className={styles.spin}>
        <Spin size="large" tip="加载中..." />
    </div>
);
class Index extends PureComponent {
    constructor(props) {
        super(props);
        let collapsed = false;
        const winWidth = document.documentElement.clientWidth;
        if (winWidth <= 1400) {
            collapsed = true;
        } else if (winWidth > 1400) {
            collapsed = false;
        }
        this.state = {
            collapsed: collapsed,
            searchData: [],
        };
    };
    componentDidMount() {
        this.resize();
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
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
    render() {
        const { collapsed, searchData } = this.state;
        const { location, children, userInfo, message, dispatch, menusData = [], notification } = this.props;
        if (menusData.length === 0) {
            return globalLoading;
        }
        const { pathname, state: pathstate } = location;
        const { key, /*pathtitles*/ } = pathstate || {};
        const defaultKey = key || pathname;
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    className={styles.sider}
                >
                    <div className={styles.logo} />
                    <Menus
                        location={location}
                        menusData={menusData}
                        defaultKey={defaultKey}
                    />
                </Sider>
                <Layout id="backTop" className={styles.contianer} style={{ marginLeft: collapsed ? 80 : 200 }}>
                    <Header style={{ background: '#fff',  display: 'flex' }}>
                        <div style={{ width: 100 }}>
                            <Icon
                                className={styles.trigger}
                                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </div>
                        <div style={{ flex: 'auto', display: 'flex', justifyContent: 'flex-end', }}>
                            <HeaderContent
                                userInfo={userInfo}
                                dispatch={dispatch}
                                message={message}
                                notification={notification}
                                menusData={menusData}
                                dataSource={searchData}
                            />
                        </div>
                    </Header>
                    <Content className={styles.content} >
                        {children}
                    </Content>
                    {footer}
                </Layout>
                <BackTop target={() => document.getElementById('backTop')} style={{ right: 20, bottom: 25 }} />
            </Layout>
        );
    }
}
function mapStateToProps({ global, loading }) {
    return {
        ...global,
        loading: loading.global
    };
}
export default connect(mapStateToProps)(Index);