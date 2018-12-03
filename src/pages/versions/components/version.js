import { Fragment } from 'react';
import { Tag } from 'antd';
import styles from './version.less';
export default ({ data }) => {
    const { version, date, detail = [] } = data;
    const { framework = [], pages = [] } = detail;
    const replace = (phrase, key) => {
        //    return phrase.replace(/新增/gy,<Tag color="cyan">新增</Tag>);
        const index = phrase.indexOf(key);
        const len = key.length;
        if (index > -1) {
            const pre = phrase.slice(0, index);
            const behind = phrase.slice(index + len);
            return (
                <Fragment>
                    {pre}
                    {/* <span style={{color:"#87d068"}}>{key}</span> */}
                    <Tag color="cyan">{key}</Tag>
                    {behind}
                </Fragment>
            );
        } else {
            return phrase;
        }
    };
    const P1 = (
        <li >
            <h5>【框架更新】</h5>
            <ol>
                {framework.map((item, i) => <li key={i}>{replace(item, '新增')}；</li>)}
            </ol>
        </li>
    );
    const P2 = (
        <li>
            <h5>【页面更新】</h5>
            <ol>
                {pages.map((item, i) => <li key={i}>{replace(item, '新增')}；</li>)}
            </ol>
        </li>
    );
    return (
        <div className={styles.content}>
            <h3>【版本】：{version}</h3>
            <h4>【发布日期】：{date}</h4>
            <h4>【功能更新】：</h4>
            <ul>
                {framework.length > 0 ? P1 : ''}
                {pages.length > 0 ? P2 : ''}
            </ul>
        </div >
    );
};