import React, { Component } from "react";
import { connect } from 'dva';
import { Spin } from 'antd';
import styles from './index.less';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            myFrame: null,
            loading: true
        };
        this.onload = this.onload.bind(this);
    }
    componentDidMount() {
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { url } = this.props;
        const { url: nexturl } = nextProps;
        const { loading } = this.state;
        const { loading: nextLoading } = nextState;
        if (url !== nexturl) {
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
        const { defaultMenu } = this.props;
        const { url: defaultUrl } = defaultMenu;
        const { url = defaultUrl } = this.props;
        const { loading } = this.state;
        return (
            <div className={styles.frame}>
                <div className={loading === true ? styles.modal : styles.hide}>
                    <Spin spinning={this.state.loading} tip="加载中..." size="large" />
                </div>
                <iframe
                    title='iframe'
                    name="myFrame"
                    src={url}
                    ref={(dom) => {
                        this.onload(dom);
                    }}
                />

            </div >
        );
    }
}
function mapStateToProps({ global }) {
    const { defaultMenu, url } = global;
    return {
        defaultMenu,
        url
    };
}
export default connect(mapStateToProps)(Frame);