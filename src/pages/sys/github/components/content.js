import { Fragment } from 'react';
import { Card } from 'antd';
import { Link } from 'dva/router';
import { Bar } from '@components/Echarts';
import { DataTable } from '@components';

export default ({ repos, account }) => {
    const data = {
        columns: [
            {
                "field": "name",
                "name": "repos",
                "type": "number"
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
            }
        ],
        rows: repos.map(item => {
            const { name, stargazers_count, forks_count } = item;
            return {
                name,
                stargazers_count,
                forks_count
            };
        }).sort((a, b) => b.stargazers_count - a.stargazers_count)
    };
    const dataTable = {
        columns: [
            {
                "field": "name",
                "name": "repos",
                "type": "number",
                render: text => <Link to={{ pathname: `/sys/github/${account}`, query: { _n: text } }}>{text}</Link>,
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
        rows: repos.map(item => {
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

    return (
        <Fragment>
            <Card
                title="仓库概览"
                style={{ marginTop: 20 }}
            >
                <Bar
                    data={data}
                    grid={{ bottom: 80 }}
                    seriesLayoutBy={'column'}
                    height={400}
                    interval={0}
                    xAxisRotate={-30}
                />
            </Card>
            <Card
                title="仓库列表"
                style={{ marginTop: 20 }}
            >
                <DataTable
                    data={dataTable}
                    searchProps={{ show: true }}
                />
            </Card>
        </Fragment>
    );
}