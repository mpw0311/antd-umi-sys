/**
 * @author M
 * @description tableFooter
 */
import { PureComponent } from 'react';
import moment from 'moment';
export default class tableFooter extends PureComponent {
    render() {
        return (
            <span>{`表格数据更新时间：${this.props.time || moment().format('HH:mm:ss')}`}</span>
        );
    }
}