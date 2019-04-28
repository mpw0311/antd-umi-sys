/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import { PureComponent } from 'react';
import Chart from '../../B_basic';

export default class extends PureComponent {
  static defaultProps = {
    data: {},
    type: 'pie',
    loading: false,
    showLegend: false,
    tooltip: {},
    seriesSettings: {
      radius: ['50%', '70%'],
      center: ['40%', '50%'],
    }
  }
  render() {

    return (
      <Chart
        {...this.props}
      />
    );
  }
}