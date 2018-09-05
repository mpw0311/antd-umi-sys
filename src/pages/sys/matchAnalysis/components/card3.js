import { Component } from 'react';
import { Row, Col, Card, DatePicker, Tabs } from 'antd';
import moment from 'moment';
import { Charts } from 'components';

const { Bar } = Charts;
const { TabPane } = Tabs;
class Card3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datePickerValue: undefined
        };
    }
    componentWillUpdate(nextProps, nextState) {
        const { times } = this.props;
        const { times: nextTimes } = nextProps;
        const { datePickerValue } = this.state;
        const { datePickerValue: nextDatePickerValue } = nextState;
        if (times[1] !== nextTimes[1]) {
            this.setState({
                datePickerValue: nextTimes[1]
            });
        }
        if (datePickerValue !== nextDatePickerValue) {
            this.setState({
                datePickerValue: nextDatePickerValue
            });
        }
    }
    render() {
        const { data0: barData01, data1: barData02, rowStyle, onTimeChange, chartStyle, times } = this.props;
        const { datePickerValue = times[1] } = this.state;
        const handleTimeChange = (time) => {
            onTimeChange(time);
            this.setState({
                datePickerValue: moment(time).format("YYYY-MM-DD")
            });
        };
        const disabledDate = (value) => {
            const startTime = moment(times[0]).valueOf();
            const endTime = moment(times[1]).valueOf();
            if (!value) {
                return false;
            }
            return !(value.valueOf() <= endTime && value.valueOf() >= startTime);
        };
        return (
            <div>
                <Card title="各个额度匹配分布详情" style={rowStyle} bodyStyle={{ padding: 0 }}>
                    <Row>
                        <Col span={24} style={{ padding: "5px 10px" }}>
                            <DatePicker onChange={handleTimeChange} showToday={false} value={moment(datePickerValue)} disabledDate={disabledDate} />
                        </Col>
                    </Row>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="匹配金额" key="1">
                            <Bar
                                data={barData01}
                                style={chartStyle}
                                maxShow
                                averageShow
                            />
                        </TabPane>
                        <TabPane tab="匹配人数" key="2">
                            <Bar
                                data={barData02}
                                style={chartStyle}
                                maxShow
                                averageShow
                            />
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        );
    }
}
export default Card3;