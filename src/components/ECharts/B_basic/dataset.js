/**
 * author：M
 * E-mail: mpw0311@163.com
 */
import { _toDataset } from '../methods';
export default (props) => {
    const { data } = props;
    const source =  _toDataset(data);
    return {
        source
    };
}