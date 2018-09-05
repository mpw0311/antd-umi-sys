import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartConfig from './config';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: props.option,
      style: props.style,
    };
    this.onChartReadyCallback = this.onChartReadyCallback.bind(this);
  }
  onChartReadyCallback() {
    const state = this.state;
    console.log(state);
  }
  render() {
    return (
      <ReactEcharts
        option={this.state.option}
        {...chartConfig}
        onChartReady={this.onChartReadyCallback}
        style={this.state.style}
      />
    );
  }
}

export default LineChart;
