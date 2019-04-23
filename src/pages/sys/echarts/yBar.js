import { PureComponent } from 'react';
import { connect } from 'dva';
import { YBar } from '@components/Echarts';
import PageHeader from '@components/PageWrapper';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, yBar_data } = this.props;
        return (
            <PageHeader
                title={'条形图'}
                pathtitles={['Echarts', 'YBar']}
                description={description}
            >
                <Panel type={['basic', 'title', 'legend', 'grid', 'tooltip', 'toolbox', 'xAxis', 'yAxis', 'series']}>
                    <YBar data={yBar_data} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;