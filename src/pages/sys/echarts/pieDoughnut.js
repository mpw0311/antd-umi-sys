import { PureComponent } from 'react';
import { connect } from 'dva';
import { PieDoughnut } from '@components/Echarts';
import PageHeader from '@components/PageWrapper';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, pieDoughnut_data } = this.props;
        return (
            <PageHeader
                title={'环形图'}
                pathtitles={['Echarts', 'PieDoughnut']}
                description={description}
            >
                <Panel type={'B'}>
                    <PieDoughnut data={pieDoughnut_data} height={400} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;