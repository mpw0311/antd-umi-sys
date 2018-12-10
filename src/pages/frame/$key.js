import React, { Component } from "react";
import { connect } from 'dva';
import { Page } from 'components';
import { Spin } from 'antd';
import pathToRegexp from 'path-to-regexp';
import styles from './index.less';
const _filter = (menus, _key, pathtitles = []) => {
    for (const item of menus) {
        const { children, key, title, ...rest } = item;
        if (key === _key) {
            return {
                key,
                pathtitles: [...pathtitles, title],
                ...rest
            };
        } else if (children && children.length > 0) {
            const target = _filter(children, _key, pathtitles = [title]);
            if (target) {
                return target;
            }
        }
    };
};
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.onload = this.onload.bind(this);
    }
    componentDidUpdate(nextProps) {
        const { location: nextLocation } = nextProps;
        const { pathname: nextPathname } = nextLocation;
        const { location } = this.props;
        const { pathname } = location;
        if (pathname !== nextPathname) {
            this.setState({
                loading: true
            });
            return true;
        }
    }
    onload() {
        const { loading } = this.state;
        if (loading) {
            this.setState({
                loading: false
            });
        }
    }
    render() {
        const { location, menusData } = this.props;
        const { pathname, state, query = {} } = location;
        const key = pathToRegexp('/frame/:key').exec(pathname)[1];
        document.getElementById('backTop').scrollTop = 0;
        const { h } = query;
        const frameState = state && state.url ? state : _filter(menusData, key);
        let { pathtitles, title = '', url } = frameState || {};
        const { loading } = this.state;
        return (
            <Page flex pathtitles={pathtitles || [title]}>
                <Spin className={styles.modal} spinning={loading} tip="Loading..." />
                <iframe
                    title='iframe'
                    name="myFrame"
                    src={url}
                    style={{ flex: 'auto', border: 0, marginBottom: '-10px', minHeight: h ? parseInt(h) : undefined }}
                    ref={(dom) => {
                        this.onload(dom);
                    }}
                />
            </Page>
        );
    }
}
function mapStateToProps({ global, loading }) {
    return {
        ...global,
        loading: loading.global
    };
}
export default connect(mapStateToProps)(Index);
