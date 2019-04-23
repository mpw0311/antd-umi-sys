import { PureComponent } from 'react';
import { connect } from 'dva';
import { Funnel } from '@components/Echarts';
import PageHeader from '@components/PageWrapper';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, funnel_data } = this.props;
        return (
            <PageHeader
                title={'漏斗图'}
                pathtitles={['Echarts', 'Funnel']}
                description={description}
            >
                <Panel type={'B'}>
                    <Funnel data={funnel_data} height={400} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;