import { Component } from 'react';
import { Tabs, Radio } from 'antd';
import { Sankey } from '@components/Echarts';
import styles from '../index.less';

const { TabPane } = Tabs;
const initStyles = {
    height: 900,
    width: "100%"
};
const dataStyle = {
    lineHeight: '400px',
    textAlign: 'center',
    height: '100%'
};
class MyTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartStyles: initStyles,
            radioValue: "",
            nodes: undefined,
            popStyle: {
                top: 0,
                left: 0,
                display: 'none'
            }
        };
    }
    componentDidMount() {
        const _self = this;
        document.onclick = () => {
            const { popStyle } = _self.state;
            if (popStyle.display !== 'none') {
                _self.setState({
                    popStyle: {
                        display: 'none'
                    }
                });
            }
        };
        // document.onmousewheel = () => {
        //     _self.setState({
        //         popStyle: {
        //             display: 'none'
        //         }
        //     });
        // };
    }
    onEventClick = (value) => {
        const { handleClick } = this.props;
        const { nodes } = this.state;
        handleClick({
            events: nodes,
            clickType: value
        });
        this.setState({
            popStyle: {
                display: 'none'
            }
        });
    }
    onPageClick = (value) => {
        const { handleClick } = this.props;
        const { nodes } = this.state;
        handleClick({
            pages: nodes,
            clickType: value
        });
        this.setState({
            popStyle: {
                display: 'none'
            }
        });
    }
    handleSizeChange = (e) => {
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
    callback = () => {
        this.setState({
            chartStyles: initStyles
        });
    }
    handleContextmenu = (params, e) => {
        const { data } = params;
        const x = e.offsetX;
        const y = e.offsetY;
        const { name } = data;
        this.setState({
            nodes: name,
            popStyle: {
                top: y,
                left: x,
                display: name === undefined ? 'none' : 'block'
            }
        });
    }
    handleClose = () => {
        this.setState({
            popStyle: {
                display: 'none'
            }
        });
    }
    render() {
        const {
            pageData = [],
            eventData = [],
            loading
        } = this.props;
        const { nodes, popStyle } = this.state;
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
                            <Sankey showDrain key={i} data={item} style={{ height: h, ...rest }} handleClick={callback} loading={loading} />
                        );
                    } else {
                        return (
                            <div style={dataStyle}>无数据</div>
                        );
                    }
                });
            } else {
                return (
                    <div style={dataStyle}>无数据</div>
                );
            }
        };
        const Pop = (onPageClick) => (
            <span className={styles.pop} style={{ ...popStyle }}>
                <i className={styles.close} onClick={this.handleClose}>×</i>
                <ul>
                    <li>{nodes}</li>
                    <li>
                        <a href='/'
                            onClick={(e) => {
                                e.preventDefault();
                                onPageClick(2);
                            }}
                        >上一级</a>
                    </li>
                    <li>
                        <a href='/'
                            onClick={(e) => {
                                e.preventDefault();
                                onPageClick(1);
                            }}
                        >下一级</a>
                    </li>
                </ul>
            </span>
        );
        return (
            <div className={styles.tabContent}>
                <span className={styles.btn}>
                    <Radio.Group size={"small"} value={radioValue} onChange={this.handleSizeChange}>
                        <Radio.Button value="zoomIn">放大</Radio.Button>
                        <Radio.Button value="zoomOut">缩小</Radio.Button>
                        <Radio.Button value="default">还原</Radio.Button>
                    </Radio.Group>
                </span>
                <Tabs defaultActiveKey="1" onChange={this.callback} animated={false}>
                    <TabPane tab="事件操作分析" key="1">
                        <div style={boxStyle} >
                            {sankeyChart(eventData, this.handleContextmenu)}
                            {Pop(this.onEventClick)}
                        </div>
                    </TabPane>
                    <TabPane tab="页面浏览分析" key="2">
                        <div style={boxStyle}>
                            {sankeyChart(pageData, this.handleContextmenu)}
                            {Pop(this.onPageClick)}
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
export default MyTabs;
