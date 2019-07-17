import { PureComponent } from 'react';
import { Table, Pagination } from 'antd';
import { methods } from '@utils';
import styles from './table.less'
const { toTableData } = methods;
export default class DataTable extends PureComponent {
    static defaultProps = {
        pagination: {
            current: 1,
            pageSize: 10,
            total: 1
        }
    }
    /**
     * 切换分页事件
     * @param {object} pagination  分页消息
     * @param {object} filters
     * @param {} sorter
     */
    onChange = (current) => {
        const { onChange } = this.props;
        typeof onChange === 'function' && onChange({ current })
    }
    onShowSizeChange = (current, pageSize) => {
        const { onChange } = this.props;
        typeof onChange === 'function' && onChange({ current, pageSize })
    }
    render() {
        const { pagination: { current, pageSize, total }, loading, data } = this.props;
        // 转换table数据
        const { columns, dataSource } = toTableData(data);
        return (
            <div className={styles.wrap}>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    loading={loading}
                />
                <Pagination
                    className={styles.pagination}
                    // 是否可以改变 pageSize
                    showSizeChanger
                    // 默认当前页
                    defaultCurrent={current}
                    // 默认的每页条数
                    defaultPageSize={pageSize}
                    // 总条数
                    total={total}
                    // 页码改变的回调，参数是改变后的页码及每页条数
                    onChange={this.onChange}
                    // pageSize 变化的回调
                    onShowSizeChange={this.onShowSizeChange}
                />
            </div>
        );
    }
}