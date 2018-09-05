import { Component } from 'react';
import { Tabs, Radio } from 'antd';
import { Chart } from 'components';
import styles from './index.less';

const { Sankey } = Chart;
const { TabPane } = Tabs;
const initStyles = {
    height: 900,
    width: "100%"
};
class MyTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartStyles: initStyles,
            radioValue: ""
        };
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.callback = this.callback.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    handleSizeChange(e) {
        const { chartStyles } = this.state;
        const radioValue = e.target.value;
        let h = chartStyles.height;
        let w = chartStyles.width;
        switch (radioValue) {
            case "zoomIn":
                h *= 1.2;
                w = `calc(${w} * 1.2 )`;
                break;
            case "zoomOut":
                h *= 0.8;
                w = `calc(${w} * 0.8 )`;
                break;
            default:
                h = initStyles.height;
                w = initStyles.width;
                break;
        }
        this.setState({
            chartStyles: {
                height: h,
                width: w
            },
        });
    }
    callback() {
        this.setState({
            chartStyles: initStyles
        });
    }
    handleEventClick(params) { // eslint-disable-line
        const { handleClick } = this.props;
        handleClick({
            events: params.name
        });
    }
    handlePageClick(params) {// eslint-disable-line
        const { handleClick } = this.props;

        handleClick({
            pages: params.name
        });
    }
    render() {
        const { pageData = [], eventData = [], } = this.props; // eslint-disable-line
        const { width, height } = initStyles;
        const boxStyle = { width, height, overflow: "auto" };
        const { chartStyles, radioValue } = this.state;
        const { height: chartHeight, ...rest } = chartStyles;
        const sankeyChart = (data = [], callback) => {
            const list = data.filter((item) => {
                const { nodes, links } = item;
                if (nodes.length > 0 && links.length > 0) {
                    return true;
                } else {
                    return false;
                }
            });
            const n = list.length === 0 ? 1 : list.length;
            const h = chartHeight / n;
            if (list.length > 0) {
                return list.map((item, i) => {
                    const { nodes, links } = item;
                    if (nodes.length > 0 && links.length > 0) {
                        return (
                            <Sankey key={i} data={item} style={{ height: h, ...rest }} handleClick={callback} />
                        );
                    } else {
                        return (
                            <div>无数据</div>
                        );
                    }
                });
            } else {
                return (
                    <div>无数据</div>
                );
            }
        };
        return (
            <div className={styles.tabContent}>
                <span className={styles.btn}>
                    <Radio.Group size={"small"} value={radioValue} onChange={this.handleSizeChange}>
                        <Radio.Button value="zoomIn">放大</Radio.Button>
                        <Radio.Button value="zoomOut">缩小</Radio.Button>
                        <Radio.Button value="default">还原</Radio.Button>
                    </Radio.Group>
                </span>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="事件操作分析" key="1">
                        <div style={boxStyle}>
                            {sankeyChart(eventData, this.handleEventClick)}
                        </div>
                    </TabPane>
                    <TabPane tab="页面浏览分析" key="2">
                        <div style={boxStyle}>
                            {sankeyChart(pageData, this.handlePageClick)}
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
export default MyTabs;
