import data from './data.json';
import a_basic_config from './A_basic.config.json';

export default {
    line: {
        data,
        ...a_basic_config
    }
};
