import { Component } from 'react';
import { Row, Col } from 'antd';
import { loginName } from 'config';
import logo from '../../assets/logo_blue_1024.png';
import styles from './index.less';

class LoginPage extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <Row>
                        <Col span={24} className={styles.logo}>
                            <img alt="logo" src={logo} />
                        </Col>
                    </Row>
                    <h2 className={styles.title}>{loginName}</h2>
                    {children}
                </div>
            </div>
        );
    }
}
export default LoginPage;