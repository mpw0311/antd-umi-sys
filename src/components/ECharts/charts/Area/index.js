/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import { PureComponent } from 'react';
import Chart from '../../A_basic';
class Index extends PureComponent {
    static defaultProps = {
        data: {},
        type: 'line',
        loading: false,
        stack:true,
        seriesSettings: {
            areaStyle: {},
        },
    }
    render() {

        return (
            <Chart
                {...this.props}
            />
        );
    }
}
export default Index;