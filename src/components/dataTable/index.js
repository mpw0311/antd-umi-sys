/**
 * @author M
 * @email mpw0311@163.com
 * @version 1.1.0
 * @description datatable组件
 */
import { PureComponent } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import Header from './header';
import TableFooter from './tableFooter';
import { _getData } from './_';
export default class DataTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: undefined,
            pagination: {
                // total: 20, // 数据总数量
                pageSize: 10, // 显示几条一页
                pageSizeOptions: ['10', '20', '30', '40', '60', '100'], // 指定每页可以显示多少条
                showSizeChanger: true, // 是否显示可以设置几条一页的选项
            }
        };
    }

    static defaultProps = {
        data: {}, // table 数据
        bordered: true,
        showFooter: false,
        sort: true, // 全排序
        sortIndexs: [], // 列排序
        onPageChange: () => { },//eslint-disable-line
        columnSetting: [
            // { width: 110 }
        ],//配置列属性

    }
    handlePageChange = (pageSize) => {
        const { pagination } = this.state;
        pagination.pageSize = pageSize;
        this.setState({
            pagination
        });
    };
    handleSearch = (searchKey) => {
        this.setState({
            searchKey
        });
    }
    render() {
        const { data, total, showFooter, ...rest } = this.props;
        const { searchKey, pagination } = this.state;
        const { columns, dataSource } = _getData(this.props, searchKey);
        const onPageChange = this.handlePageChange;
        return (
            <div>
                <Header
                    {...this.props}
                    handleSearch={this.handleSearch}
                />
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={{
                        onShowSizeChange(current, pageSize) {  //eslint-disable-line
                            onPageChange(pageSize);
                        },
                        total,
                        ...pagination
                    }}
                    footer={showFooter === true ? (() => (<TableFooter data={data} />)) : undefined}
                    {...rest}
                />
            </div>
        );
    }
}
DataTable.propTypes = {
    data: PropTypes.object,
    sort: PropTypes.bool,
    showFooter: PropTypes.bool,
    bordered: PropTypes.bool,
    total: PropTypes.number,
    sortIndexs: PropTypes.array,
    onPageChange: PropTypes.func,
    columnSetting: PropTypes.array,
};