import { Component } from 'react';
import styles from './index.less';

class Index extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.container}>
                {children}
            </div>
        );
    }
}
export default Index;