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
        const { dispatch, repos, location: { pathname } } = this.props;
        if (repos && repos.length === 0) {
            const match = pathToRegexp('/sys/github/:id').exec(pathname);
            const account = match[1];
            dispatch({
                type: 'github/getAccountInfo',
                payload: {
                    account
                }
            });
        }
        // dispatch({
        //     type: 'github/getUrl',
        //     payload: {
        //         url: 'https://github.com/mpw0311/antd-umi-sys/graphs/participation?w=155&h=28&type=sparkline)'
        //     }
        // });
    }
    render() {
        const { location: { pathname, query: { _n: name } }, repos } = this.props;
        const match = pathToRegexp('/sys/github/:id').exec(pathname);
        const account = match[1];
        const [pro = {}] = repos.filter(item => item.name === name);
        const { description } = pro;
        return (
            <Page
                loading={false}
                pathtitles={[{ title: 'gitDataV', link: '/sys/github', icon: 'github', query: { account } }, name]}
                title={name}
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