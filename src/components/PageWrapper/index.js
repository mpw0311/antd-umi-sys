/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  页面wrapper组件
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageHeader from '../PageHeader';
import Context from '@context';
// import Loader from '../Loader';
import styles from './index.less';

@connect(({ menu }) => {
    const { flattenMenuData, breadcrumbList } = menu;
    return {
        flattenMenuData,
        breadcrumbList
    };
})
class PageWrapper extends PureComponent {
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
            flattenMenuData,
            style
        } = this.props;
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
                        <div
                            className={styles.children}
                            style={{
                                display: flex === true ? 'flex' : "block",
                                ...style
                            }}>
                            {/* {loading && <Loader spinning />} */}
                            {children}
                        </div>
                    </div>
                )}
            </Context.Consumer>
        );
    }
}

export default PageWrapper;

PageWrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    loading: PropTypes.bool,
    inner: PropTypes.bool,
};
