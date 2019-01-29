import { Component } from 'react';
import { Row, Col, Card, DatePicker } from 'antd';
import moment from 'moment';
import { Charts } from '@components';

const { BarWaterfall } = Charts;
class Card2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datePickerValue: undefined
        };
    }
    componentWillUpdate(nextProps) {
        const { times } = nextProps;
        const { datePickerValue } = this.state;
        const time = times[1];
        if (time !== datePickerValue) {
            this.setState({
                datePickerValue: times[1]
            });
        }
    }
    render() {
        const { data0: barWaterfallData01, data1: barWaterfallData02, rowStyle, onTimeChange, chartStyle, times } = this.props;
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
                <Card title="七天计划各天匹配分布详情" style={rowStyle} bodyStyle={{ padding: 0 }}>
                    <Row>
                        <Col span={24} style={{ padding: "5px 10px" }}>
                            <DatePicker onChange={handleTimeChange} showToday={false} value={moment(datePickerValue)} disabledDate={disabledDate} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Card>
                                <BarWaterfall title="匹配金额各个额度分布（单位：千元）" data={barWaterfallData01} unit="千万" style={chartStyle} />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card>
                                <BarWaterfall title="匹配人数各个额度分布" data={barWaterfallData02} style={chartStyle} />
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}
export default Card2;