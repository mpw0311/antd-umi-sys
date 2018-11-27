import { Input } from 'antd';
import _ from 'lodash';

function TableSearch(props) {
    const { onSearch = () => { }, show } = props;
    const search = (
        <Input
            placeholder="请输入搜索内容"
            onChange={e => {
                const { target } = e;
                const { value } = target;
                onSearch(_.trim(value));
            }}
            style={{ width: 200 }}
        />
    );
    return (show ? search : <div />);
}
export default TableSearch;