import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import Header from './components/header';
import Content from './components/content';

class Index extends PureComponent {

    render() {
        const { repos, loading } = this.props;
        return (
            <Page
                pathtitles={[{
                    title: 'github',
                    icon: 'github'
                }]}
                style={{
                    backgroundColor: 'transparent'
                }}
                title={'GitDataV'}
                loading={loading}
                description={'一个用react+umi构建的Github"可视化大数据平台"。通过它，您可以更加直观看到您在Github里的一些数据情况'}
            >

                <Header />
                <Content repos={repos} />
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