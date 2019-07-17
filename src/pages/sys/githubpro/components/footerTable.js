import { PureComponent } from "react"
import { Card, } from 'antd';
import { Link } from 'umi';
import { connect } from 'dva'
import Table from './dataTable';
import { formatMessage } from 'umi/locale';
@connect(({ githubPro, loading }) => {
    const { reposInfo, received_events, accountInfo, pagination } = githubPro;
    return {
        reposInfo,
        received_events,
        accountInfo,
        pagination,
        loading: loading.models.githubPro
    }
})
class FooterTable extends PureComponent {
    /**
    * 切换table页，请求公开库数据
    */
    handleChange = (pagination) => {
        const { dispatch, accountInfo: { repos_url } } = this.props;
        dispatch({
            type: 'githubPro/getRepos',
            payload: {
                url: repos_url,
                ...pagination
            }
        });
    }
    //获取柱状图数据
    getTableData = () => {
        const { accountInfo: { login: account }, reposInfo } = this.props;
        return {
            columns: [
                {
                    "field": "name",
                    "name": "repos",
                    "type": "number",
                    render: text => <Link to={{ pathname: `/sys/githubpro/${account}`, query: { _n: text } }}>{text}</Link>,
                },
                {
                    "field": "stargazers_count",
                    "name": "stargazers_count",
                    "type": "number"
                },
                {
                    "field": "forks_count",
                    "name": "forks_count",
                    "type": "number"
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
                {
                    "field": "language",
                    "name": "language",
                    "type": "number"
                },
                {
                    "field": "size",
                    "name": "size",
                    "type": "number"
                },
                {
                    "field": "open_issues_count",
                    "name": "open_issues_count",
                    "type": "number"
                }
            ],
            rows: reposInfo.map(item => {
                const {
                    name,
                    stargazers_count,
                    forks_count,
                    created_at,
                    updated_at,
                    language,
                    size,
                    open_issues_count
                } = item;
                return {
                    name,
                    stargazers_count,
                    forks_count,
                    created_at,
                    updated_at,
                    language,
                    size,
                    open_issues_count
                };
            }).sort((a, b) => b.stargazers_count - a.stargazers_count)
        };
    }
    render() {
        const { loading, pagination } = this.props;
        const dataTable = this.getTableData();
        return (
            <Card
                title={formatMessage({ id: "gitDataV.repos.list" })}
                style={{ marginTop: 20 }}
            >
                <Table
                    data={dataTable}
                    onChange={this.handleChange}
                    loading={loading}
                    pagination={pagination}
                />
            </Card>
        );
    }
}
export default FooterTable;