import { PureComponent } from 'react';
import { Layout } from 'antd';
import { copyright } from '@config';
import styles from './index.less';

const { Footer } = Layout;
export default class MyFooter extends PureComponent {

    render() {
        return (
            <Footer className={styles.footer}>
                {copyright}
            </Footer>
        );
    }
}