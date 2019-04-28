/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import { PureComponent } from 'react';
import Chart from '../../A_basic';

export default class extends PureComponent {
    static defaultProps = {
        data: {},
        type: 'bar',
        loading: false,
    }
    render() {

        return (
            <Chart
                {...this.props}
            />
        );
    }
}