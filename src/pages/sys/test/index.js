import { PureComponent } from 'react';
import PageWrapper from '@components/PageWrapper';
import { Line } from '@components/Echarts';

class Index extends PureComponent {

    render() {
        const d = {
            columns: [
                {
                    field: "product",
                    name: "分类",
                    type: "string"
                },
                {
                    field: "2015",
                    name: "2015",
                    type: "number"
                },
                {
                    field: "2016",
                    name: "2016",
                    type: "number"
                },
                {
                    field: "2017",
                    name: "2017",
                    type: "number"
                }
            ],
            rows: [
                {
                    "product": 'Matcha Latte',
                    "2015": 43.3,
                    "2016": 85.8,
                    "2017": 93.7
                },
                {
                    "product": 'Milk Tea',
                    "2015": 83.1,
                    "2016": 73.4,
                    "2017": 55.1
                },
                {
                    "product": 'Cheese Cocoa',
                    "2015": 86.4,
                    "2016": 65.2,
                    "2017": 82.5
                },
                {
                    "product": 'Walnut Brownie',
                    "2015": 72.4,
                    "2016": 53.9,
                    "2017": 39.1
                },
            ]
        };
        return (
            <PageWrapper
                // pathtitles={['测试', { title: 'test', icon: 'home' }]}
                title={'测试页面'}
                flex
            // description={'段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。'}
            >
                <p>12345678654</p>
                <Line data={d} />
            </PageWrapper>
        );
    }
}

export default Index;