import { Fragment } from 'react';
import { Link } from 'umi';
import { Card, Avatar } from 'antd';
import { formatMessage } from 'umi/locale';
import Table from './Table';

export default ({ stargazersInfo, stargazers_count, onChange, loading }) => {
    const dataTable = {
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
    const handleChange = (pagination) => {
        onChange && onChange(pagination);
    }
    return (
        <Fragment>
            <Card
                title={formatMessage({ id: "gitDataV.stargazers.list" })}
                style={{ marginTop: 20 }}
            >
                <Table
                    data={dataTable}
                    total={stargazers_count}
                    onChange={handleChange}
                    loading={loading}
                />
            </Card>
        </Fragment>
    );
}