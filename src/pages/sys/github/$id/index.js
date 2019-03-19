import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import pathToRegexp from 'path-to-regexp';
import styles from './index.css';

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            account: undefined,
            reposName: undefined
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { location: { pathname, query: { _n: reposName } } } = nextProps;
        const [, account] = pathToRegexp('/sys/github/:id').exec(pathname);
        if ((prevState.account === undefined || prevState.reposName === undefined) && account && reposName) {
            return {
                account,
                reposName
            };
        } else {
            return prevState;
        }
    }
    componentDidMount() {
        const { dispatch, repos } = this.props;
        if (repos && repos.length === 0) {
            const { account } = this.state;
            dispatch({
                type: 'github/getAccountInfo',
                payload: {
                    account,
                }
            });
        }
    }
    getStargazers = (stargazers_url) => {
        this.props.dispatch({
            type: 'github/getStargazers',
            payload: {
                url: stargazers_url
            }
        });
    }
    render() {
        const { repos } = this.props;
        const { account, reposName } = this.state;
        const [pro = {}] = repos.filter(item => item.name === reposName);
        const { description } = pro;

        return (
            <Page
                loading={false}
                pathtitles={[{ title: 'gitDataV', link: '/sys/github', icon: 'github', state: { account } }, reposName]}
                title={reposName}
                description={description}
            >
                <div className={styles.normal}>
                    <h1>{reposName}</h1>
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