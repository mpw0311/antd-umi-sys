/**
 * @author M
 * @E-mail mpw0311@163.com
 * @version  1.0.0
 * @description  异常处理页面403、404、500
 */
import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
import config from './typeConfig';
import styles from './index.less';

export default class index extends PureComponent {
    static defaultProps = {
        backText: 'back to home',
        redirect: {
            pathname: '/sys'
        },
    };

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            backText,
            type,
            title,
            desc,
            redirect,
            img
        } = this.props;
        const pageType = type in config ? type : '404';
        return (
            <div className={styles.exception}>
                <div className={styles.imgBlock}>
                    <div
                        className={styles.imgEle}
                        style={{ backgroundImage: `url(${img || config[pageType].img})` }}
                    />
                </div>
                <div className={styles.content}>
                    <h1>{title || config[pageType].title}</h1>
                    <div className={styles.desc}>{desc || config[pageType].desc}</div>
                    <div className={styles.actions}>
                        <Link to={redirect}>
                            <Button type="primary">{backText}</Button>
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}
