import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PageHeader from '../PageHeader-s';
import Context from '@context';
import Loader from '../Loader';
import styles from './index.less';

class Page extends PureComponent {
    render() {
        const {
            className,
            children,
            loading = false,
            pathtitles = [],
            showHeader = true,
            flex = false,
            flattenMenuData
        } = this.props;
        const childStyle = flex === true ? { display: 'flex' } : {};
        return (
            <Context.Consumer>
                {({ location }) => (
                    <div
                        className={classnames(className, styles.contentInner, {
                            [styles.noHeader]: !showHeader,
                            [styles.loading]: loading,
                        })}
                    >
                        <PageHeader
                            breadcrumbList={pathtitles}
                            location={location}
                            isShow={showHeader}
                            flattenMenuData={flattenMenuData}
                        />
                        <div style={{ flex: 'auto', width: "100%", display: 'flex' }}>
                            {loading && <Loader spinning />}
                            <div style={{ flex: 'auto', width: '100%', padding: 10, ...childStyle }}>
                                {children}
                            </div>
                        </div>
                    </div>
                )}
            </Context.Consumer>
        );
    }
}

export default connect(({ menu: { flattenMenuData, breadcrumbList } }) =>
    ({ flattenMenuData, breadcrumbList }))(Page);
Page.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    loading: PropTypes.bool,
    inner: PropTypes.bool,
};
