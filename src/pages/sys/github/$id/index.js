import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import pathToRegexp from 'path-to-regexp';
import RepoContent from '../components/repoContent';
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
        } else {
            const { repos } = this.props;
            const { reposName } = this.state;
            const [pro = {}] = repos.filter(item => item.name === reposName);
            const { stargazers_url } = pro;
            if (stargazers_url) {
                this.getStargazers(stargazers_url);
            }
        }
    }
    componentDidUpdate(nextProps, nextState) {
        const { repos, stargazers } = nextProps;
        const { reposName } = nextState;
        const [pro = {}] = repos.filter(item => item.name === reposName);
        const { stargazers_url } = pro;
        if (stargazers_url && stargazers.length === 0) {
            this.getStargazers(stargazers_url);
        }
    }
    getStargazers = (stargazers_url, current = 1, pageSize = 10) => {
        this.props.dispatch({
            type: 'github/getStargazers',
            payload: {
                url: stargazers_url + `?page=${current}&per_page=${pageSize}`,
            }
        });
    }
    render() {
        const { repos, stargazersInfo, loading } = this.props;
        const { account, reposName } = this.state;
        const [pro = {}] = repos.filter(item => item.name === reposName);
        const { description, stargazers_count, stargazers_url } = pro;
        const handleChange = (pagination) => {
            const { current, pageSize } = pagination;
            this.getStargazers(stargazers_url, current, pageSize);
        }
        return (
            <Page
                loading={false}
                pathtitles={[
                    {
                        title: 'gitDataV',
                        link: '/sys/github',
                        icon: 'github',
                        state: { account }
                    },
                    reposName
                ]}
                title={reposName}
                description={description}
            >
                <div className={styles.normal}>
                    <h1>{reposName}</h1>
                    <RepoContent
                        stargazersInfo={stargazersInfo}
                        stargazers_count={stargazers_count}
                        onChange={handleChange}
                        loading={loading}
                    />

                </div>
            </Page>
        );
    }
}

export default connect(({ github, loading }) => {
    const { account, accountInfo, repos, stargazers, stargazersInfo } = github
    return {
        account,
        accountInfo,
        repos,
        stargazers,
        stargazersInfo,
        loading: loading.models.github
    };
})(Index);