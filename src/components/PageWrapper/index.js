import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { PageHeader } from '@components';
import Context from '@context';
import Loader from '../Loader';
import styles from './Page.less';

export default class Page extends Component {
  render() {
    const {
      children,
      loading = false,
      pathtitles = [],
      description,
      showHeader = true,
      flex = false
    } = this.props;
    const loadingStyle = {
      overflow: 'hidden',
    };
    const childStyle = flex === true ? { display: 'flex' } : {};
    return (
      <Context.Consumer>
        {({ location }) => (
          <div
            // className={classnames(className, {
            //   [styles.contentInner]: inner,
            // })}
            className={styles.contentInner}
            style={loading ? loadingStyle : undefined}
          >
            {showHeader && <PageHeader pathtitles={pathtitles} location={location} description={description} />}
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


Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  inner: PropTypes.bool,
};
