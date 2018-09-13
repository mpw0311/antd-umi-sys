import React, { Component } from "react";
// import _ from 'lodash';
import { connect } from 'dva';
import { Spin } from 'antd';
import styles from './index.less';

class Frame extends Component {
    constructor(props) {
        super(props);
        const { defaultMenu, location } = props;
        const { state: locationState } = location;
        const { url: defaultUrl } = defaultMenu;
        const { url = defaultUrl } = locationState || {};
        this.state = {
            count: 0,
            url,
            myFrame: defaultMenu,
            loading: true
        };
        this.onload = this.onload.bind(this);
    }
    componentDidMount() {
    }
    componentWillUpdate(nextProps, nextState) { //eslint-disable-line
        const { location } = nextProps;
        const { state: locationState } = location;
        const { url: nextUrl } = locationState || {};
        const { url } = this.state;
        if (nextUrl && url !== nextUrl) {
            this.setState({
                url: nextUrl,
                loading: true
            });
        }
    }
    // componentDidUpdate(nextProps, nextState) {
    //     const { loading } = nextState;
    //     if (loading === true) {
    //         console.log("up");
    //         this.setState({
    //             loading: false
    //         });
    //     }
    // }
    // shouldComponentUpdate(nextProps, nextState) {

    //     const { location } = this.props;
    //     const { location: nextlocation } = nextProps;
    //     const { loading } = this.state;
    //     const { loading: nextLoading } = nextState;
    //     if (!_.isEqual(location, nextlocation) || loading !== nextLoading) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
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
        const { loading, url } = this.state;
        const src = url.indexOf('http') > -1 ? url : `http://${url}`;
        return (
            <div className={styles.frame}>
                <div className={loading === true ? styles.modal : styles.hide}>
                    <Spin spinning={this.state.loading} tip="加载中..." size="large" />
                </div>
                <iframe
                    title='frame'
                    name="myFrame"
                    src={src}
                    ref={(dom) => {
                        console.log('onload', dom);
                        // this.setState({
                        //     loading: false
                        // });
                        // this.onload(dom);
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