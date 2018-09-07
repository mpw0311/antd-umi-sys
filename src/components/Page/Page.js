import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PageHeader } from 'components';
import Loader from '../Loader';
import styles from './Page.less';

export default class Page extends Component {
  render() {
    const {
      className, children, loading = false, inner = false, location, pathtitles = [], description
    } = this.props;
    const loadingStyle = {
      height: 'calc(100vh - 184px)',
      overflow: 'hidden',
    };
    return (
      <div
        className={classnames(className, {
          [styles.contentInner]: inner,
        })}
        style={loading ? loadingStyle : null}
      >
        <PageHeader
          pathtitles={pathtitles}
          location={location}
          description={description}
        />
        {loading ? <Loader spinning /> : ''}
        {children}
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
