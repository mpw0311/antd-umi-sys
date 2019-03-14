import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import pathToRegexp from 'path-to-regexp';
import styles from './index.css';

class Index extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { location, repos } = this.props;
        const { pathname } = location;
        const match = pathToRegexp('/sys/github/:id').exec(pathname);
        const userName = match[1];
        const pro = repos.filter(item => item.name === userName);
        return (
            <Page
                loading={false}
                pathtitles={[{ title: 'github', link: '/sys/github', icon: 'github' }, userName]}
                title={`${userName}详情`}
            >
                <div className={styles.normal}>
                    <h1>{userName}</h1>
                </div>
            </Page>
        );
    }
}

export default connect(({ github }) => {
    const { account, accountInfo, repos } = github
    return {
        account,
        accountInfo,
        repos
    };
})(Index);