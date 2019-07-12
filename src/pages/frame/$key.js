/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  iframe兼容第三方页面
 */
import React, { Component } from "react";
import { connect } from 'dva';
import Redirect from 'umi/redirect';
import { Page } from '@components';
import { Spin } from 'antd';
// import pathToRegexp from 'path-to-regexp';
import styles from './index.less';
const _filter = (menus, pathname) => {
    for (const item of menus) {
        if (item.link === pathname) {
            return item;
        }
    };
    return {};
};
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    componentDidUpdate(nextProps) {
        const { location: nextLocation } = nextProps;
        const { pathname: nextPathname } = nextLocation;
        const { location } = this.props;
        const { pathname } = location;
        const backTopDom = document.getElementById('backTop');
        backTopDom && (backTopDom.scrollTop = 0);
        if (pathname !== nextPathname) {
            this.setState({
                loading: true
            });
        }
    }
    handlerLoad = () => {
        const { loading } = this.state;
        if (loading) {
            this.setState({
                loading: false
            });
        }
    }
    render() {
        const { location, flattenMenuData } = this.props;
        const { pathname, state = {}, query = {} } = location;
        // const key = pathToRegexp('/frame/:key').exec(pathname)[1];
        const { h } = query;
        const { pathtitles, title = '', url } = state && state.url ? state : _filter(flattenMenuData, pathname);
        const { loading } = this.state;
        const frame = (
            <Page flex pathtitles={pathtitles || [title]}>
                <Spin className={styles.modal} spinning={loading} tip="Loading..." />
                <iframe
                    title='iframe'
                    name="myFrame"
                    src={url}
                    style={{ flex: 'auto', border: 0, marginBottom: '-10px', minHeight: h ? parseInt(h) : undefined }}
                    onLoad={this.handlerLoad}
                />
            </Page>
        );
        return url ? frame : <Redirect to={'/404'} />;
    }
}
function mapStateToProps({ menu: { flattenMenuData }, loading }) {
    return {
        flattenMenuData,
        loading: loading.global
    };
}
export default connect(mapStateToProps)(Index);
