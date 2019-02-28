import { PureComponent } from 'react';
import Chart from '../../A_basic';
class Index extends PureComponent {
    static defaultProps = {
        data: {},
        type: 'line',
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
export default Index;