import { PureComponent } from 'react';
import { Page } from '@components';
import ChartView from '@components/ChartView';

class Index extends PureComponent {

    render() {

        return (
            <Page
                pathtitles={['echarts']}
                title={'Echarts组件列表'}
                description={'Echarts组件列表，结合Echart官网提供的api进行封装，使用更加简单符合特定的产品需求,开发未完待续……'}
                style={{ minHeight: 800 }}
            >
                <ChartView />
            </Page>
        );
    }
}

export default Index;