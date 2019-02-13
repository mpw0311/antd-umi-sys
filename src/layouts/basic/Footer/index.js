// import { PureComponent } from 'react';
// import { Layout } from 'antd';
import { copyright } from '@config';
// import styles from './index.less';

// const { Footer } = Layout;
// export default class MyFooter extends PureComponent {

//     render() {
//         return (
//             <Footer className={styles.footer}>
//                 {copyright}
//             </Footer>
//         );
//     }
// }

import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '../../components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
    <Footer style={{ padding: 0 }}>
        <GlobalFooter
              links={[
                {
                  key: 'UmiJS 首页',
                  title: 'UmiJS 首页',
                  href: 'https://umijs.org/zh/',
                  blankTarget: true,
                },
                {
                  key: 'github',
                  title: <Icon type="github" />,
                  href: 'https://github.com/mpw0311/antd-umi-sys',
                  blankTarget: true,
                },
                {
                  key: 'Ant Design',
                  title: 'Ant Design',
                  href: 'https://ant.design',
                  blankTarget: true,
                },
              ]}
            copyright={
                <Fragment>
                    Copyright <Icon type="copyright" /> {copyright}
                </Fragment>
            }
        />
    </Footer>
);
export default FooterView;
