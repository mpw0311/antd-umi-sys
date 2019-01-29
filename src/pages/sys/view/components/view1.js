import { Fragment, PureComponent } from 'react';
import { DataTable, Charts } from '@components';
import { Row, Col, DatePicker, Button, Card } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { LineBar } = Charts;
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
    }
    render() {
        const { data, Y2Show, YUnit, Y2Unit, loading,
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
                    <LineBar data={data} Y2Show={Y2Show} Y2Index={1} YUnit={YUnit} Y2Unit={Y2Unit} loading={loading} />
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