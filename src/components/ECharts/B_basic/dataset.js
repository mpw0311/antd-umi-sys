/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import { _toDataset } from '../methods';
export default (props) => {
    const { data, dataType } = props;
    if (dataType === 'dataset') {
        const source = _toDataset(data);
        return {
            source
        };
    } else {
        return null;
    }
};