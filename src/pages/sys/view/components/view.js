import { Fragment, PureComponent } from 'react';
import { DataTable, Charts } from 'components';
import { Row, Col, DatePicker, Button, Icon, Tabs } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Bar, Multipie } = Charts;
const TabPane = Tabs.TabPane;
const dateFormat = 'YYYY/MM/DD';
const initTime = [moment().subtract(7, 'days'), moment().subtract(1, 'days')];
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            date: initTime
        };
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    onChange(v) {
        this.setState({
            date: v
        });
    }
    submit() {
        const { handleSubmit = () => { } } = this.props;
        const { date } = this.state;
        const times = date.map(time => moment(time).format(dateFormat));
        handleSubmit(times);
        // console.log('submit', times);
    }
    render() {
        const { data, loading,
            handleClick = () => {
                console.log("download");
            }
        } = this.props;
        const { date } = this.state;
        return (
            <Fragment>
                <Row style={{ width: 400 }}>
                    <Col span={19}>
                        <RangePicker
                            defaultValue={date}
                            format={dateFormat}
                            onChange={this.onChange}
                        />
                    </Col>
                    <Col span={5} style={{ textAlign: 'center' }}>
                        <Button type="primary" onClick={this.submit}>查询</Button>
                    </Col>
                </Row>
                <Tabs
                    style={{ textAlign: 'right' }}
                >
                    <TabPane tab={<Icon type="bar-chart" />} key="1">
                        <Bar data={data} loading={loading} />
                    </TabPane>
                    <TabPane tab={<Icon type="pie-chart" />} key="2">
                        <Multipie data={data} loading={loading} />
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