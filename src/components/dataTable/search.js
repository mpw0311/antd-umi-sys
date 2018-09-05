import { Input } from 'antd';
import _ from 'lodash';

const Search = Input.Search;
function TableSearch(props) {
    const { onSearch = () => { } } = props;
    return (
        <Search
            placeholder="请输入搜索内容"
            onSearch={value => onSearch(_.trim(value))}
            style={{ width: 200 }}
        />
    );
}
export default TableSearch;