import { connect } from 'dva';
import { Row, Col, Tabs, Icon, Input, message } from 'antd';
import { Charts, Page } from 'components';
// import styles from './index.less';

const { Line } = Charts;
const { TabPane } = Tabs;
const { TextArea } = Input;
function Chart(props) {
    const { dispatch, lineData } = props;// eslint-disable-line
    const handleClick = (p) => {
        console.log(p);
    };
    const handleBlur = (e) => {
        const { value } = e.target;
        let data = {};
        try {
            data = eval(`(${value})`);
        } catch (err) {
            console.log("err", err);
            message.error('数据格式有误！');
        }
        console.log(value);
        dispatch({
            type: "chartView/save",
            payload: {
                lineData: data
            }
        });
    };
    const tab = (e) => {
        const { keyCode, target } = e;
        const { selectionStart, selectionEnd, value } = target;
        if (keyCode == 9) {
            console.log(selectionStart, selectionEnd, value);
            e.preventDefault();
        }
    };
    return (
        <Page loading={false} pathtitles={['view']}>
            <Row>
                <Col span={10}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type="apple" />数据</span>} key="1">
                            <TextArea rows={12} defaultValue={JSON.stringify(lineData)} onBlur={handleBlur} onKeyDown={tab} />
                        </TabPane>
                        <TabPane tab={<span><Icon type="android" />option</span>} key="2">
                            <TextArea rows={12} defaultValue={'{Tab:2}'} />
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={14}>
                    <Line data={lineData} handleClick={handleClick} />
                </Col>
            </Row>
        </Page>
    );
    // return (
    //     <Page loading={false} pathtitles={['view']}>
    //         <div className={styles.normal}>
    //             <h1>Page view</h1>
    //             <Line data={data} handleClick={handleClick} />
    //         </div>
    //     </Page>
    // );
}
function mapStateToProps({ chartView }) {
    return {
        ...chartView,
    };
}
export default connect(mapStateToProps)(Chart);