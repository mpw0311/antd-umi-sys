import { PureComponent } from 'react';
import { connect } from 'dva';
import { Bar } from '@components/Echarts';
import PageHeader from '@components/PageWrapper';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, bar_data } = this.props;
        return (
            <PageHeader
                title={'条形图'}
                pathtitles={['Echarts', 'Bar']}
                description={description}
            >
                <Panel type={'A'}>
                    <Bar data={bar_data} showLabel />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;