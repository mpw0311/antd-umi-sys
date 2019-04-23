import { PureComponent } from 'react';
import { Tabs, Icon, Input, message } from 'antd';
import Form from './form';
import styles from './option.less';

const { TabPane } = Tabs;
const { TextArea } = Input;
export default class MyTabs extends PureComponent {
    static defaultProps = {
        rows: 24,
        onBlur: () => { },
        onChange: () => { },
    }
    render() {
        const { data, onBlur, onChange, rows, type, ...rest } = this.props;
        const handleBlur = (e) => {
            const { value } = e.target;
            const res = value.replace(/｛/g, "{")
                .replace(/｝/g, "}")
                .replace(/：/g, ":")
                .replace(/，/g, ",")
                .replace(/；/g, ";")
                .replace(/“/g, "\"")
                .replace(/”/g, "\"")
                .replace(/‘/g, "\"")
                .replace(/’/g, "\"");
            let data = {};
            try {
                /*eslint-disable-next-line*/
                data = eval(`(${res})`);
            } catch (err) {
                console.log("err", err);
                message.error('数据格式有误！');
            }
            onBlur(data);
        };

        const tab = (e) => {
            const { keyCode, target } = e;
            const { selectionStart, selectionEnd, value } = target;
            if (keyCode === 9) {
                const postion = selectionStart + 4;
                target.value = `${value.substr(0, selectionStart)}    ${value.substr(selectionEnd)}`;
                target.selectionStart = postion;
                target.selectionEnd = postion;
                e.preventDefault();
            }
        };
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="setting" />OPTION</span>} key="1">
                    <Form onChange={onChange} type={type} />
                </TabPane>
                <TabPane tab={<span><Icon type="bar-chart" />DATA</span>} key="2">
                    <TextArea rows={rows} defaultValue={JSON.stringify(data, null, 4)} onBlur={handleBlur} onKeyDown={tab} className={`${styles.TextArea} scrollbar`} spellCheck="false" {...rest} />
                </TabPane>
            </Tabs>
        );
    }
}