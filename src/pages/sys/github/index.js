import { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import { Page } from '@components';
import Header from './components/header';
import Content from './components/content';

class Index extends PureComponent {
    onTableChange = (pagination) => {
        const { dispatch, accountInfo: { repos_url } } = this.props;
        const { current, pageSize } = pagination;
        dispatch({
            // 获取table数据
            type: 'github/getRepos',
            payload: {
                url: repos_url,
                current,
                pageSize
            }
        });
    }
    render() {
        return (
            <Page
                pathtitles={[{
                    title: 'gitDataV',
                    icon: 'github'
                }]}
                style={{ backgroundColor: 'transparent' }}
                title={'GitDataV'}
                description={formatMessage({ id: 'gitDataV.desc' })}
            >
                <Header />
                <Content {...this.props} handleChange={this.onTableChange} />
            </Page>
        );
    }
}

export default connect(({ github, loading }) => {
    const { repos, account, accountInfo, received_events, pagination } = github;
    return {
        repos,
        account,
        accountInfo,
        received_events,
        pagination,
        loading: loading.models.github
    };
})(Index);