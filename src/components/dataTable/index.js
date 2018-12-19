import { Component } from 'react';
import { Table, Row, Col, Button } from 'antd';
import { methods } from 'utils';
import _ from 'lodash';
import Search from './search';
import TableSelect from './select';

const { toTableData } = methods;
const compare = (a, b, dataIndex, type) => {
    const _type = type ? type.toLowerCase() : 'string';
    if (_type === "string") {
        if (a[dataIndex] > b[dataIndex]) {
            return 1;
        } else {
            return -1;
        }
    } else if (_type === "number") {
        return parseFloat(a[dataIndex]) - parseFloat(b[dataIndex]);
    } else if (type === 'date') {
        if (a[dataIndex] > b[dataIndex]) {
            return 1;
        } else {
            return -1;
        }
    }
};
const getSortColumns = (columns, sortIndexs) => {
    return columns.map(item => {
        const { dataIndex, type } = item;
        const res = sortIndexs.includes(dataIndex);
        if (res === true) {
            return {
                ...item,
                sorter: (a, b) => {
                    return compare(a, b, dataIndex, type);
                },
            };
        } else {
            return item;
        }
    });
};
const getAllSortColumns = (columns) => {
    return columns.map(item => {
        const { dataIndex, type } = item;
        return {
            ...item,
            sorter: (a, b) => {
                return compare(a, b, dataIndex, type);
            },
        };
    });
};
const searchTable = (dataSource, key) => {
    if (key === undefined || key === '') {
        return dataSource;
    } else {
        return _.filter(dataSource, item => {
            for (const name in item) {
                const v = item[name];
                if (v === key) {
                    return true;
                } else if (_.isString(v) && _.includes(v, key)) {
                    return true;
                } else if (_.isNumber(v) && v === parseFloat(key)) {
                    return true;
                }
            }
            return false;
        });
    }
};
class DataTable extends Component {
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
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSelectChange(value) {
        const { selectProps = {} } = this.props;
        const { onChange = () => { } } = selectProps;
        onChange(value);
    }
    handleSearch(searchKey) {
        this.setState({
            searchKey
        });
    }

    render() {
        const {
            data = {}, // table 数据
            selectProps = {}, // select属性
            searchProps = {}, // search属性
            sort, // 全排序
            sortIndexs = [], // 列排序
            onPageChange = () => { },//eslint-disable-line
            download = {},
            columns: defaultColumns,
            headerStyle = {},
            ...restProps
        } = this.props;
        const { columns, dataSource } = toTableData(data);
        const {
            show: selectShow,
            data: optionData,
            defaultValue
        } = selectProps;
        const {
            show: searchShow,
        } = searchProps;
        const {
            show: downloadShow,
            handleClick = () => { }
        } = download;
        const { pagination, searchKey } = this.state;
        const initColumns = defaultColumns || columns;
        const _columns = sort ? getAllSortColumns(initColumns) : sortIndexs.length > 0 ? getSortColumns(initColumns, sortIndexs) : initColumns;
        const _dataSource = searchTable(dataSource, searchKey);
        const handlePageChange = (pageSize) => {
            const { pagination } = this.state;
            pagination.pageSize = pageSize;
            this.setState({
                pagination
            });
        };
        const tableSelect = <TableSelect
            show={selectShow || false}
            data={optionData}
            defaultValue={defaultValue}
            onChange={this.handleSelectChange}
        />;
        const search = <Search
            show={searchShow || false}
            onSearch={this.handleSearch}
        />;
        const down = <Button onClick={handleClick}>导出数据</Button>;
        const layout1 = <Row style={{ margin: '5px 0 2px 0', ...headerStyle }}>
            <Col span={12}>
                {tableSelect}
            </Col>
            <Col span={12} style={{ textAlign: 'right', paddingRight: '15px' }}>
                {search}
            </Col>
        </Row>;
        const layout2 = <Row style={{ margin: '5px 0 2px 0', ...headerStyle }}>
            <Col span={12}>
                {search}
            </Col>
            <Col span={12} style={{ textAlign: 'right', paddingRight: '15px' }}>
                {down}
            </Col>
        </Row>;
        return (
            <div>
                {downloadShow ? layout2 : layout1}
                <Table
                    columns={_columns}
                    dataSource={_dataSource}
                    bordered
                    pagination={{
                        ...pagination,
                        onShowSizeChange(current, pageSize) {  //eslint-disable-line
                            handlePageChange(pageSize);
                            // 当几条一页的值改变后调用函数，current：改变显示条数时当前数据所在页；pageSize:改变后的一页显示条数
                            // onPageChange(current, pageSize);
                        },
                        onChange(current, pageSize) { //eslint-disable-line 
                            // 点击改变页数的选项时调用函数，current:将要跳转的页数
                            // onPageChange(current, pageSize);
                        },
                    }}
                    {...restProps}
                />
            </div>
        );
    }
}
export default DataTable;