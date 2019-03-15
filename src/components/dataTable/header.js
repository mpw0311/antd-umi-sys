/**
 * @author M
 * @email mpw0311@163.com
 * @version 1.1.0
 * @description datatable组件
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'antd';
import Search from './search';
import TableSelect from './select';


export default class DataTable extends PureComponent {
    static defaultProps = {
        selectProps: {}, // select属性
        searchProps: {}, // search属性
        download: {},
        headerStyle: {},
        handleSearch: () => { }
    }
    render() {
        const { searchProps, selectProps, download, headerStyle, handleSearch } = this.props;

        const {
            show: selectShow,
            data: optionData,
            defaultValue,
            onChange: selectChange,
        } = selectProps;

        const {
            show: searchShow,
        } = searchProps;
        const {
            show: downloadShow,
            handleClick = () => { }
        } = download;
        const handleSelectChange = (value) => {
            if (typeof selectChange === "function") {
                selectChange(value);
            }
        };
        const onSearch = key => {
            if (typeof handleSearch === "function") {
                handleSearch(key);
            }
        };

        const tableSelect = <TableSelect
            data={optionData}
            defaultValue={defaultValue}
            onChange={handleSelectChange}
        />;
        const search = <Search
            onSearch={onSearch}
        />;
        const down = <Button onClick={handleClick}>导出数据</Button>;
        const layout1 = <Row style={{ margin: '5px 0 4px 0', ...headerStyle }}>
            <Col span={12}>
                {selectShow ? tableSelect : ''}
            </Col>
            <Col span={12} style={{ textAlign: 'right', paddingRight: '15px' }}>
                {searchShow ? search : ''}
            </Col>
        </Row>;
        const layout2 = <Row style={{ margin: '5px 0 4px 0', ...headerStyle }}>
            <Col span={12}>
                {searchShow ? search : ''}
            </Col>
            <Col span={12} style={{ textAlign: 'right', paddingRight: '15px' }}>
                {down}
            </Col>
        </Row>;

        return downloadShow ? layout2 : layout1;
    }
}
DataTable.propTypes = {
    searchProps: PropTypes.object,
    selectProps: PropTypes.object,
    download: PropTypes.object,
    headerStyle: PropTypes.object,
    handleSearch: PropTypes.func
};