import React, { Component } from "react";
import { connect } from 'dva';
import { Spin } from 'antd';
import { indexIframe } from 'config';
import styles from './index.less';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initmenu: indexIframe,
            count: 0,
            myFrame: null,
            loading: true
        };
        this.onload = this.onload.bind(this);
    }
    componentDidMount() {
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { location } = this.props;
        const { location: nextLocation } = nextProps;
        const { state = {} } = location;
        const { state: nextpathState } = nextLocation;
        const { url } = state;
        const { url: nexturl } = nextpathState || {};
        const { loading } = this.state;
        const { loading: nextLoading } = nextState;
        if (nexturl !== undefined && url !== nexturl) {
            this.setState({
                loading: true
            });
        }
        if (url !== nexturl || loading !== nextLoading) {
            return true;
        } else {
            return false;
        }
    }
    onload(frame) {
        const self = this;
        const { myFrame: stateFrame } = this.state;
        if (frame && stateFrame === null) {
            this.setState({
                myFrame: frame
            });
        }
        frame = frame || stateFrame;
        if (frame) {
            frame.onload = () => {
                self.setState({
                    loading: false
                });
            };
        }
    }
    render() {
        const { initmenu = {} } = this.state;
        const { url: defaultUrl } = initmenu;
        const { location } = this.props;
        const { state = {} } = location;
        const { url = defaultUrl } = state;
        const { loading } = this.state;
        return (
            < div className={styles.frame} >
                <div className={loading === true ? styles.modal : styles.hide}>
                    <Spin spinning={this.state.loading} tip="加载中..." size="large" />
                </div>
                <iframe
                    title='iframe'
                    name="myFrame"
                    src={url}
                    ref={(dom) => { //eslint-disable-line
                        this.onload(dom);
                    }}
                />

            </div >
        );
    }
}
function mapStateToProps({ frame }) {
    const { url } = frame;
    return {
        url
    };
}
export default connect(mapStateToProps)(Frame);