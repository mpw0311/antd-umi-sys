import { PureComponent } from 'react';
import PageWrapper from '@components/PageWrapper-s';

class Index extends PureComponent {

    render() {

        return (
            <PageWrapper pathtitles={[123, { title: 'test', icon: 'home' }]}>
                <p>12345678654</p>
            </PageWrapper>
        );
    }
}

export default Index;