import { PureComponent } from 'react';
import PageWrapper from '@components/PageWrapper-s';

class Index extends PureComponent {

    render() {

        return (
            <PageWrapper
                // pathtitles={['测试', { title: 'test', icon: 'home' }]}
                title={'测试页面'}
            // description={'段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。'}
            >
                <p>12345678654</p>
            </PageWrapper>
        );
    }
}

export default Index;