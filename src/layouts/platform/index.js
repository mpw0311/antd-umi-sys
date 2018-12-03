import { PureComponent } from 'react';
import { Layout, BackTop, Icon } from 'antd';
import { copyright } from 'config';
import Menu from './menu';
import styles from './index.less';

const { Header, Sider, Content, Footer } = Layout;
const footer = (
    <Footer className={styles.footer}>
        {copyright}
    </Footer>
);
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const { children } = this.props;
        const { collapsed } = this.state;
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    className={styles.sider}
                >
                    <div className={styles.logo} />
                    <Menu />
                </Sider>
                <Layout id="backTop" className={styles.contianer} style={{ marginLeft: collapsed ? 80 : 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
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
export default Index;