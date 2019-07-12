import { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import { Page } from '@components';
import AccountAnay from './components/AccountAnay';
import AccountContent from './components/accountContent';

class Index extends PureComponent {
    onTableChange = (pagination) => {
        const { dispatch, accountInfo: { repos_url } } = this.props;
        const { current, pageSize } = pagination;
        dispatch({
            type: 'githubPro/getRepos',
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
                <AccountAnay />
                <AccountContent {...this.props} handleChange={this.onTableChange} />
            </Page>
        );
    }
}

export default connect(({ githubPro, loading }) => {
    const { reposInfo, account, accountInfo, received_events } = githubPro;
    return {
        reposInfo,
        account,
        accountInfo,
        received_events,
        loading: loading.models.github
    };
})(Index);