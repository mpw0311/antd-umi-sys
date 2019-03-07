/**
 * @author M
 * @E-mail mpw0311@163.com
 * @version  1.0.0
 * @description  表格封装组件header
 */
import { Button, Row, Col } from 'antd';
import Search from './search';
import TableSelect from './select';

function Index(props) {
    const { searchProps, selectProps, download, headerStyle, handleSearch = () => { } } = props;

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
    const layout1 = <Row style={{ margin: '5px 0 2px 0', ...headerStyle }}>
        <Col span={12}>
            {selectShow ? tableSelect : ''}
        </Col>
        <Col span={12} style={{ textAlign: 'right', paddingRight: '15px' }}>
            {searchShow ? search : ''}
        </Col>
    </Row>;
    const layout2 = <Row style={{ margin: '5px 0 2px 0', ...headerStyle }}>
        <Col span={12}>
            {searchShow ? search : ''}
        </Col>
        <Col span={12} style={{ textAlign: 'right', paddingRight: '15px' }}>
            {down}
        </Col>
    </Row>;

    return downloadShow ? layout2 : layout1;
}
export default Index;