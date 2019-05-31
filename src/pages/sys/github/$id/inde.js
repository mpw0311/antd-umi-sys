import { PureComponent } from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import { Page } from '@components';
import { Line } from '@components/Echarts';
import pathToRegexp from 'path-to-regexp';
import RepoContent from '../components/repoContent';

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            account: undefined,//当前账户
            reposName: undefined,//当前项目名称
            currentRepo: undefined,//当前项目信息
            lastPage: 1,//最后一页
            pageSize: 10//分页
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { location: { pathname, query: { _n: reposName } }, repos } = nextProps;
        const [, account] = pathToRegexp('/sys/github/:id').exec(pathname);
        let state = prevState;
        if ((prevState.account === undefined || prevState.reposName === undefined) && account && reposName) {
            state = {
                ...state,
                account,
                reposName
            };
        }
        if (prevState.pro === undefined) {
            const [currentRepo = {}] = repos.filter(item => item.name === reposName);
            state = {
                ...state,
                currentRepo,
                lastPage: Math.ceil(currentRepo.stargazers_count / prevState.pageSize)
            }
        }
        return state;
    }
    componentDidMount() {
        const { dispatch, repos, account } = this.props;
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
            this.getReposStars(account, reposName);
        }
    }
    componentDidUpdate(nextProps, nextState) {
        const { stargazers, account } = nextProps;
        const { currentRepo, reposName } = nextState;
        const { stargazers_url } = currentRepo;
        if (stargazers_url && stargazers.length === 0) {
            this.getStargazers(stargazers_url);
        }
        debugger
        if (account && reposName) {
            this.getReposStars(account, reposName);
        }
    }
    getStargazers = (stargazers_url, current, pageSize) => {
        pageSize = pageSize ? pageSize : this.state.pageSize;
        current = current ? current : this.state.lastPage;
        console.log(stargazers_url + `?page=${current}&per_page=${pageSize}`);
        // this.props.dispatch({
        //     type: 'github/getStargazers',
        //     payload: {
        //         url: stargazers_url + `?page=${current}&per_page=${pageSize}`,
        //     }
        // });
    }
    /**
     * 请求该项目star趋势图数据
     */
    getReposStars = (account, reposName) => {
        this.props.dispatch({
            type: 'github/getReposStars',
            payload: {
                account,
                reposName
            }
        });
    }
    render() {
        const { stargazersInfo, loading, stars } = this.props;
        const { account, reposName, currentRepo, lastPage } = this.state;

        const { description, stargazers_count, stargazers_url } = currentRepo;
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
                <Card
                    title="stargazers Analysis"
                >
                    <Line data={stars} seriesLayoutBy={"column"} height={400} />
                </Card>
                <RepoContent
                    stargazersInfo={stargazersInfo}
                    stargazers_count={stargazers_count}
                    onChange={handleChange}
                    loading={loading}
                    current={lastPage}
                />
            </Page>
        );
    }
}

export default connect(({ github, loading }) => {
    const { account, accountInfo, repos, stargazers, stargazersInfo, stars } = github
    return {
        account,
        accountInfo,
        repos,
        stargazers,
        stargazersInfo,
        stars,
        loading: loading.models.github
    };
})(Index);