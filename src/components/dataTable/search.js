import { Input } from 'antd';
import { trim } from 'lodash';

function TableSearch(props) {
    const { onSearch = () => { } } = props;
    return (
        <Input
            placeholder="请输入搜索内容"
            onChange={e => {
                const { target } = e;
                const { value } = target;
                onSearch(trim(value));
            }}
            style={{ width: 200 }}
        />
    );
}
export default TableSearch;