/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  面包屑
 */
import React from 'react';
import { Breadcrumb } from 'antd';
import _ from 'lodash';
import styles from './index.less';

function MyBreadcrumb(props) {
  const { pathtitles, location = {} } = props;
  const { state: pathstate } = location;
  const { pathtitles: stateTitles } = pathstate || {};
  const renderItem = (rows) => {
    if (_.isArray(rows)) {
      return rows.map((elem, key) => <Breadcrumb.Item key={key}>{elem}</Breadcrumb.Item>);
    }
  };
  const getTitles = (stateTitles, pathtitles) => {
    if (pathtitles && pathtitles.length > 0 && stateTitles && stateTitles.length > 0) {
      return _.uniq([...pathtitles, ...stateTitles]);
    } else if (pathtitles && pathtitles.length > 0) {
      return pathtitles;
    } else if (stateTitles && stateTitles.length > 0) {
      return stateTitles;
    }
  };
  const titles = getTitles(pathtitles, stateTitles);
  if (titles && titles.length > 0) {
    return (
      <Breadcrumb className={styles.content}>
        {renderItem(titles)}
      </Breadcrumb>
    );
  } else {
    return false;
  }
}

export default MyBreadcrumb;
