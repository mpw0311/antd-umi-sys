import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import pathToRegexp from 'path-to-regexp';
import styles from './index.css';

class Index extends PureComponent {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        const { repos, location: { pathname } } = this.props;
        if (repos && repos.length === 0) {
            const match = pathToRegexp('/sys/github/:id').exec(pathname);
            const account = match[1];
            this.props.dispatch({
                type: 'github/getAccountInfo',
                payload: {
                    account
                }
            });
        }
    }
    render() {
        const { location: { query: { _n: name } }, repos } = this.props;
        const pro = repos.filter(item => item.name === name);
        const { description } = pro[0] || {};
        const t = (<span>{name}</span>)
        return (
            <Page
                loading={false}
                pathtitles={[{ title: 'gitDataV', link: '/sys/github', icon: 'github' }, name]}
                title={t}
                description={description}
            >
                <div className={styles.normal}>
                    <h1>{name}</h1>
                    {JSON.stringify(pro, null, 4)}
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