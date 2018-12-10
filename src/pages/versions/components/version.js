import styles from './version.less';

const replace = (phrase, key, color = '#87d068') => {
    const r = '0x' + color.slice(1, 3), g = '0x' + color.slice(3, 5), b = '0x' + color.slice(5);
    const rgb = `${parseInt(r)},${parseInt(g)},${parseInt(b)}`;
    const reg = new RegExp(key, "gy");
    return phrase.replace(reg, `<code style="color:${color};background-color:rgba(${rgb},0.2);border-color:rgba(${rgb},0.8)">${key}</code>`);
};
const getphrase = (phrase, keys) => {
    for (const item of keys) {
        const { key, color } = item;
        phrase = replace(phrase, key, color);
    }
    return phrase;
};
export default ({ data }) => {
    const { version, date, detail = [] } = data;
    const { framework = [], pages = [] } = detail;
    const keys = [
        {
            key: "新增",
            color: "#87d068"
        },
        {
            key: "优化",
            color: "#2db7f5"
        },
        {
            key: '修复',
            color: '#ff5500'
        }
    ];
    const P1 = (
        <li >
            <h5>【框架更新】</h5>
            <ol>
                {framework.map((item, i) => <li
                    key={i}
                    ref={(dom) => {
                        if (dom)
                            dom.innerHTML = getphrase(item, keys);
                    }} />)}
            </ol>
        </li>
    );
    const P2 = (
        <li>
            <h5>【页面更新】</h5>
            <ol>
                {pages.map((item, i) => <li
                    key={i}
                    ref={(dom) => {
                        if (dom)
                            dom.innerHTML = getphrase(item, keys);
                    }} />)}
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