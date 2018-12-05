import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { PageHeader } from 'components';
import Loader from '../Loader';
import styles from './Page.less';

export default class Page extends Component {
  render() {
    const {
      children,
      loading = false,
      location,
      pathtitles = [],
      description,
      flex = false
    } = this.props;
    const loadingStyle = {
      overflow: 'hidden',
    };
    const childStyle = flex === true ? { display: 'flex' } : {};
    return (
      <div
        // className={classnames(className, {
        //   [styles.contentInner]: inner,
        // })}
        className={styles.contentInner}
        style={loading ? loadingStyle : undefined}
      >
        <PageHeader
          pathtitles={pathtitles}
          location={location}
          description={description}
        />
        <div style={{ flex: 'auto', width: "100%", display: 'flex' }}>
          {loading === true ? <Loader spinning /> : ''}
          <div style={{ flex: 'auto', width: '100%', ...childStyle }}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}


Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  inner: PropTypes.bool,
};
