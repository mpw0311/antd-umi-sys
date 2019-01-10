import React from 'react';
import { Spin } from 'antd';
import styles from './index.less';

// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div className={styles.loader}  >
    <Spin size="large" />
  </div>
);
