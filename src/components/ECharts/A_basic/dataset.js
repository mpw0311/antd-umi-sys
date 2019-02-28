import { _toDataset } from '../methods';
export default (props) => {
    const { data } = props;
    const source = _toDataset(data);
    return {
        source
    };
}