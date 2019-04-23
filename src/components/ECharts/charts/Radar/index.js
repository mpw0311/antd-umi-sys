/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import { PureComponent } from 'react';
import Chart from '../../B_basic';
class Index extends PureComponent {
    static defaultProps = {
        data: {},
        type: 'radar',
        loading: false,
        showLegend: false,
        tooltip: {},
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
        },
        indicator: []
    }
    render() {
        const { radar, indicator } = this.props;
        return (
            <Chart
                {...this.props}
                radar={{ ...radar, indicator }}
            />
        );
    }
}
export default Index;