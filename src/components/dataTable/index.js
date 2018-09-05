import { Component } from 'react';
import { Table, Row, Col } from 'antd';
import { methods } from 'utils';
import Search from './search';
import TableSelect from './select';

// const filter = (dataSource, value, selectIndex) => {
//     return dataSource.filter(item => {
//         return item[selectIndex] !== value;
//     });
// };
const { toTableData } = methods;
const compare = (a, b, dataIndex, type) => {
    const _type = type ? type.toLowerCase() : 'string';
    if (_type === "string") {
        if (a[dataIndex] > b[dataIndex]) {
            return -1;
        } else {
            return 1;
        }
    } else if (_type === "number") {
        return parseFloat(a[dataIndex]) - parseFloat(b[dataIndex]);
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

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            columns: [],
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
    handleSearch(value) {
        const { searchProps = {} } = this.props;
        const { onSearch = () => { } } = searchProps;
        onSearch(value);
    }
    render() {
        const {
            data = {}, // table 数据
            selectProps = {}, // select属性
            searchProps = {}, // search属性
            sort, // 全排序
            sortIndexs = [], // 列排序
            onPageChange = () => { },
            ...restProps
        } = this.props;
        const {
            show: selectShow,
            data: optionData,
            defaultValue
        } = selectProps;
        const {
            show: searchShow,
        } = searchProps;
        const { pagination } = this.state;
        const { columns, dataSource } = toTableData(data);
        const _columns = sort ? getAllSortColumns(columns) : sortIndexs.length > 0 ? getSortColumns(columns, sortIndexs) : columns;
        // const _dataSource = filter(dataSource, key, selectIndex);
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <TableSelect
                            show={selectShow || false}
                            data={optionData}
                            defaultValue={defaultValue}
                            onChange={this.handleSelectChange}
                        />
                    </Col>
                    <Col span={12} style={{ textAlign: 'right', paddingRight: '15px' }}>
                        <Search
                            show={searchShow || false}
                            onSearch={this.handleSearch}
                        />
                    </Col>
                </Row>
                <Table
                    columns={_columns}
                    dataSource={dataSource}
                    bordered
                    pagination={{
                        ...pagination,
                        onShowSizeChange(current, pageSize) {  // 当几条一页的值改变后调用函数，current：改变显示条数时当前数据所在页；pageSize:改变后的一页显示条数
                            onPageChange(current, pageSize);
                        },
                        onChange(current, pageSize) {  // 点击改变页数的选项时调用函数，current:将要跳转的页数
                            onPageChange(current, pageSize);
                        },
                    }}
                    {...restProps}
                />
            </div>
        );
    }
}
export default DataTable;