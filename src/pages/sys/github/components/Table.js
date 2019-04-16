import { PureComponent } from 'react';
import { Table } from 'antd';
import { methods } from '@utils';
const { toTableData } = methods;
export default class DataTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pagination: {
                showQuickJumper: true,
            }
        };
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        const { onChange } = this.props;
        typeof onChange === 'function' && onChange(pagination)
        this.setState({
            pagination: pager
        });
    }
    render() {
        const { data, total, onChange, ...rest } = this.props
        const { columns, dataSource } = toTableData(data);
        return (
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ total, ...this.state.pagination }}
                onChange={this.handleTableChange}
                {...rest}
            />
        );
    }
} 