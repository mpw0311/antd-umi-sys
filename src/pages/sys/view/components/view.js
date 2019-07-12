import { Fragment, PureComponent } from 'react';
import { DataTable } from '@components';
import { Bar, Line } from '@components/Echarts';
import { Icon, Tabs } from 'antd';
import DatePickers from './DateDickers';

const TabPane = Tabs.TabPane;
class Index extends PureComponent {
    render() {
        const { data, loading,
            handleClick = () => {
                console.log("download");
            },
            handleSubmit = () => { }
        } = this.props;
        return (
            <Fragment>
                <DatePickers limit={3} handleSubmit={(times) => { handleSubmit(times); }} />
                <Tabs
                    animated={false}
                    style={{ textAlign: 'right' }}
                >
                    <TabPane tab={<Icon type="bar-chart" />} key="1" style={{ textAlign: 'left' }}>
                        <Bar seriesLayoutBy={"column"} data={data} loading={loading} />
                    </TabPane>
                    <TabPane tab={<Icon type="pie-chart" />} key="2" style={{ textAlign: 'left' }}>
                        <Line seriesLayoutBy={"column"} data={data} loading={loading} />
                    </TabPane>
                </Tabs>
                <DataTable
                    loading={loading}
                    data={data}
                    searchProps={{ show: true }}
                    download={{ show: true, handleClick }}
                    headerStyle={{ marginTop: 15 }}

                />
            </Fragment>
        );
    }
}
export default Index;