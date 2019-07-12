import { Fragment } from 'react';
import { Card, Row, Col, List, Avatar } from 'antd';
import { Link } from 'umi';
import moment from 'moment';
import { Bar } from '@components/Echarts';
import Table from './Table';
import { formatMessage } from 'umi/locale';
export default (props) => {
    const { loading, repos, account, accountInfo: { public_repos }, received_events, handleChange, pagination } = props;
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
        })
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 10)
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
            <Row gutter={20}>
                <Col md={24} lg={24} xl={17} >
                    <Card
                        title={formatMessage({ id: "gitDataV.repos.overview" })}
                        style={{ marginTop: 20, height: 510 }}
                    >
                        <Bar
                            data={data}
                            loading={loading}
                            grid={{ bottom: 80, left: 80, right: 20 }}
                            seriesLayoutBy={'column'}
                            height={400}
                            interval={0}
                            xAxisRotate={-30}
                        />
                    </Card>
                </Col>
                <Col md={24} lg={24} xl={7} >
                    <Card
                        title={formatMessage({ id: "gitDataV.news" })}
                        /* eslint-disable-next-line */
                        extra={<a href={`https://github.com/${account}`} target="_blank">{formatMessage({ id: "gitDataV.more" })}</a>}
                        style={{ marginTop: 20, height: 510, overflow: 'hidden' }}
                    >
                        <List
                            size='small'
                            dataSource={received_events.slice(0, 6)}
                            loading={loading}
                            renderItem={item => {
                                const { type, payload: { action }, actor: { login, avatar_url }, repo: { name }, created_at } = item;
                                const _action = type === 'ForkEvent' ? type : action;
                                return (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={avatar_url} />}
                                            /* eslint-disable-next-line */
                                            title={<a href={`https://github.com/${login}`} target="_blank">{login}</a>}
                                            description={`[${moment(created_at).fromNow()}] ${_action} ${name}`}
                                        />
                                    </List.Item>
                                );
                            }}
                        />
                    </Card>
                </Col>
            </Row>
            <Card
                title={formatMessage({ id: "gitDataV.repos.list" })}
                style={{ marginTop: 20 }}
            >
                <Table
                    data={dataTable}
                    total={public_repos}
                    current={pagination.current}
                    onChange={handleChange}
                    loading={loading}
                />
            </Card>
        </Fragment>
    );
}