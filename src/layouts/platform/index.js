import { PureComponent } from 'react';
import { connect } from 'dva';
import { Layout, BackTop, Icon } from 'antd';
import { copyright } from 'config';
import { Exception } from 'components';
import Menus from '../components/Menus';
import Authorized from '../components/Authorized';
import HeaderContent from './header';
import Logo from './logo';
import Context from '@/layouts/Context';
import styles from './index.less';

const { Header, Sider, Content, Footer } = Layout;
const footer = (
    <Footer className={styles.footer}>
        {copyright}
    </Footer>
);
const _getKey = (pathname) => {
    if (typeof pathname === 'string' && pathname !== '') {
        const arr = pathname.split('').reverse();
        const index = arr.indexOf('/');
        if (index > -1) {
            return arr.slice(0, index).reverse().join('');
        }
    }
    return pathname;
};
const Exception403 = <Exception
    type={403}
    backText={'返回首页'}
    title={'403'}
    desc={'抱歉，你访问的页面没有权限'}
/>;
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
            theme: 'light'
        };
    };
    componentDidMount() {
        const { dispatch } = this.props;
        this.resize();
        dispatch({
            type: 'global/getSysInfo',
        });
        dispatch({
            type: 'global/getMessage',
        });
        dispatch({
            type: 'menu/getMenuData',
        });
    }
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'global/clear',
        });
        dispatch({
            type: 'menu/clear',
        });
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
    getContext() {
        const { location } = this.props;
        const { theme } = this.state;
        return {
            location,
            theme
        };
    }
    render() {
        const { collapsed } = this.state;
        const {
            location,
            children,
            menusData = [],
        } = this.props;
        const { pathname, state: pathstate } = location;
        const { key, /*pathtitles*/ } = pathstate || {};
        const defaultKey = key || _getKey(pathname);
        const layout = (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    className={styles.sider}
                >
                    <div className={styles.logo}>
                        <Logo collapsed={collapsed} />
                    </div>
                    <Menus
                        location={location}
                        menusData={menusData}
                        defaultKey={defaultKey}
                    />
                </Sider>
                <Layout id="backTop" className={styles.contianer} style={{ marginLeft: collapsed ? 80 : 200 }}>
                    <Header style={{ background: '#fff', padding: 0, display: 'flex' }}>
                        <div style={{ width: 100 }}>
                            <Icon
                                className={styles.trigger}
                                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </div>
                        <div style={{ flex: 'auto', display: 'flex', justifyContent: 'flex-end', }}>
                            <HeaderContent />
                        </div>
                    </Header>
                    <Content className={styles.content} >
                        <Authorized noMatch={Exception403} {...this.props}>
                            {children}
                        </Authorized>
                    </Content>
                    {footer}
                </Layout>
                <BackTop target={() => document.getElementById('backTop')} style={{ right: 20, bottom: 25 }} />
            </Layout>
        );
        return (
            <Context.Provider value={this.getContext()}>
                {layout}
            </Context.Provider>
        );
    }
}
function mapStateToProps({ global, menu, loading }) {
    return {
        ...global,
        ...menu,
        loading: loading.global
    };
}
export default connect(mapStateToProps)(Index);