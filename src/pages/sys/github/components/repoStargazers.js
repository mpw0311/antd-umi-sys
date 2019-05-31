import { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'umi';
import { Card, Avatar } from 'antd';
import { formatMessage } from 'umi/locale';
import Table from './Table';
@connect(({ github, loading }) => {
    const {
        account,
        currentRepoName,
        repos,
        currentRepo,
        stargazersInfo
    } = github;
    return {
        account,
        currentRepoName,
        repos,
        currentRepo,
        stargazersInfo,
        loading: loading.models.github
    };
})
class RepoStargazers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        const { currentRepo } = this.props;
        //如果项目列表信息存在
        if (currentRepo && currentRepo.length > 0) {
            this.props.dispatch({
                type: "github/save",
                payload: {
                    currentRepo: this.getCurrentRepo()
                }
            });
        }
    }
    handleChange = (pagination) => {
        const { currentRepo } = this.props;
        if (currentRepo && currentRepo.stargazers_url) {
            const { stargazers_url, stargazers_count } = currentRepo;
            const { current, pageSize } = pagination;
            this.getStargazers(stargazers_url, current, pageSize);
        }
    }
    //获取当前项目信息
    getCurrentRepo = () => {
        const { repos, currentRepoName } = this.props;
        const [currentRepo = {}] = repos.filter(item => item.name === currentRepoName);
        return currentRepo;
    }
    //获取table列表
    getStargazers = (stargazers_url, current = 1, pageSize = 10) => {
        this.props.dispatch({
            type: 'github/getStargazers',
            payload: {
                url: stargazers_url + `?page=${current}&per_page=${pageSize}`,
            }
        });
    }
    //过滤数据
    filterData = (stargazersInfo) => {
        if (!stargazersInfo || stargazersInfo.length === 0) return;
        return {
            columns: [
                {
                    "field": "avatar_url",
                    "name": "account",
                    "type": "string",
                    colSpan: 2,
                    render: text => (<Avatar src={text} />)
                },
                {
                    "field": "login",
                    "name": "login",
                    "type": "string",
                    colSpan: 0,
                    render: text => (<Link to={{ pathname: '/sys/github', state: { account: text } }} >{text}</Link>)
                },
                {
                    "field": "name",
                    "name": "name",
                    "type": "string",
                },
                {
                    "field": "location",
                    "name": "location",
                    "type": "string",
                },
                {
                    "field": "company",
                    "name": "company",
                    "type": "string",
                },
                {
                    "field": "followers",
                    "name": "followers",
                    "type": "string"
                },
                {
                    "field": "following",
                    "name": "following",
                    "type": "string"
                },
                {
                    "field": "public_repos",
                    "name": "public_repos",
                    "type": "string"
                },
                {
                    "field": "created_at",
                    "name": "created_at",
                    "type": "string"
                },
                {
                    "field": "updated_at",
                    "name": "updated_at",
                    "type": "string"
                },

            ],
            rows: stargazersInfo.map(item => {
                const {
                    avatar_url,
                    login,
                    name,
                    location,
                    company,
                    followers,
                    following,
                    public_repos,
                    created_at,
                    updated_at,

                } = item;
                return {
                    avatar_url,
                    login,
                    name,
                    location,
                    company,
                    followers,
                    following,
                    public_repos,
                    created_at,
                    updated_at,
                };
            })
            // .sort((a, b) => b.followers - a.followers)
        };
    }
    render() {
        const { current, loading, stargazersInfo } = this.props;
        debugger
        const data = this.filterData(stargazersInfo);

        return (
            <Card
                title={formatMessage({ id: "gitDataV.stargazers.list" })}
                style={{ marginTop: 20 }}
            >
                <Table
                    data={data}
                    // total={stargazers_count}
                    onChange={this.handleChange}
                    loading={loading}
                    current={current}
                />
            </Card>
        );
    }
}

export default RepoStargazers;