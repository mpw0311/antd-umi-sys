import { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import { Page } from '@components';
import Header from './components/header';
import Content from './components/content';

class Index extends PureComponent {

    render() {
        const { loading } = this.props;
        return (
            <Page
                pathtitles={[{
                    title: 'gitDataV',
                    icon: 'github'
                }]}
                style={{
                    backgroundColor: 'transparent'
                }}
                title={'GitDataV'}
                loading={loading}
                description={formatMessage({ id: 'gitDataV.desc' })}
            >

                <Header />
                <Content {...this.props} />
            </Page>
        );
    }
}

export default connect(({ github, loading }) => {
    const { repos, account } = github
    return {
        repos,
        account,
        loading: loading.models.github
    };
})(Index);