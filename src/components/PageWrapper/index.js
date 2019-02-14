import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageHeader from '../PageHeader';
import Context from '@context';
import Loader from '../Loader';
import styles from './index.less';

class Page extends PureComponent {
    static defaultProps = {
        loading: false,
        showHeader: true,
        flex: false,
    }
    render() {
        const {
            className,
            children,
            loading,
            pathtitles,
            title,
            description,
            showHeader,
            flex,
            flattenMenuData
        } = this.props;
        const childStyle = flex === true ? { display: 'flex' } : {};
        return (
            <Context.Consumer>
                {({ location }) => (
                    <div
                        className={classNames(className, styles.contentInner, {
                            [styles.loading]: loading,
                        })}
                    >
                        <PageHeader
                            breadcrumbList={pathtitles}
                            title={title}
                            description={description}
                            location={location}
                            isShow={showHeader}
                            flattenMenuData={flattenMenuData}
                        />
                        <div style={{
                            flex: 'auto',
                            display: flex && 'flex',
                            marginTop: '20px',
                            backgroundColor: '#fff',
                            padding: 10,
                            ...childStyle
                        }}>
                            {loading ? <Loader spinning /> : children}
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
