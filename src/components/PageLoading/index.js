/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  全局loading，用于页面加载时
 */
import React from 'react';
import { Spin } from 'antd';
import styles from './index.less';

// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div className={styles.loader}  >
    <Spin size="large" />
  </div>
);
