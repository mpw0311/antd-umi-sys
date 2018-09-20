import { connect } from 'dva';
import { Row, Col } from 'antd';
// import _ from 'lodash';
import { Charts, Page } from 'components';
import ChartTab from './components/tab';
// import styles from './index.less';

const { Line, Bar, BarWaterfall } = Charts;
function Chart(props) {
    const { dispatch, lineData = [], barData = [], barWaterfallData } = props;// eslint-disable-line
    const handleClick = (p) => {
        console.log(p);
    };
    const handleBlur = (value, type) => {
        dispatch({
            type: "chartView/save",
            payload: {
                [type]: value
            }
        });
    };
    return (
        <Page loading={false} pathtitles={['chartView']}>
            <Row>
                <Col span={10}>
                    <ChartTab data={lineData} onBlur={(e) => {
                        handleBlur(e, 'lineData');
                    }} />
                </Col>
                <Col span={14}>
                    <Line data={lineData} handleClick={handleClick} />
                </Col>
            </Row>
            <Row>
                <Col span={10}>
                    <ChartTab data={barData} onBlur={(e) => {
                        handleBlur(e, 'barData');
                    }} />
                </Col>
                <Col span={14}>
                    <Bar data={barData} handleClick={handleClick} />
                </Col>
            </Row>
            <Row>
                <Col span={10}>
                    <ChartTab data={barWaterfallData} onBlur={(e) => {
                        handleBlur(e, 'barWaterfallData');
                    }} />
                </Col>
                <Col span={14}>
                    <BarWaterfall data={barWaterfallData} handleClick={handleClick} />
                </Col>
            </Row>
        </Page>
    );
}
function mapStateToProps({ chartView }) {
    return {
        ...chartView,
    };
}
export default connect(mapStateToProps)(Chart);