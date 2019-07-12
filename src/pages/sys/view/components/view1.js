import { Fragment, PureComponent } from 'react';
import { DataTable } from '@components';
import { Line } from '@components/Echarts';
import { Row, Col, DatePicker, Button, Card } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const initTime = [moment().subtract(7, 'days'), moment().subtract(1, 'days')];
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            date: initTime
        };
    }
    onChange = (v) => {
        this.setState({
            date: v
        });
    }
    submit = () => {
        const { handleSubmit = () => { } } = this.props;
        const { date } = this.state;
        const times = date.map(time => moment(time).format(dateFormat));
        handleSubmit(times);
    }
    render() {
        const { data, showY2, Y2Name, YName, loading,
            handleClick = () => {
                console.log("download");
            }
        } = this.props;
        return (
            <Fragment>
                <Row style={{ width: 400 }}>
                    <Col span={19}>
                        <RangePicker
                            defaultValue={initTime}
                            format={dateFormat}
                            onChange={this.onChange}
                        />
                    </Col>
                    <Col span={5} style={{ textAlign: 'center' }}>
                        <Button type="primary" onClick={this.submit}>查询</Button>
                    </Col>
                </Row>
                <Card
                    // title="Card title"
                    style={{ marginTop: 15 }}
                >
                    <Line seriesLayoutBy={"column"} data={data} showY2={showY2} Y2SeriesIndex={[1]} YName={YName} Y2Name={Y2Name} loading={loading} />
                </Card>
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