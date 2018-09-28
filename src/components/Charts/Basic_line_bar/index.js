import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartConfig from '../config';
import _ from 'lodash';
import { toDataset, getMark, showLoading } from '../_';
import { _getType } from './_';

class Line extends Component {
  constructor(props) {
    super(props);
    const { handleClick = () => { } } = props;
    this.state = {
      onEvents: {
        click: (params) => {
          handleClick(params);
        }
      }
    };
  }
  render() {
    const {
      data = {},
      style,
      title = '',
      maxShow = false,
      minShow = false,
      averageShow = false,
      type = 'Line',
      stack,
      label
    } = this.props;
    const { onEvents } = this.state;
    const datasetSource = toDataset(data);
    const mark = getMark({ maxShow, minShow, averageShow });
    const _type = _getType(type);
    const series = [];
    for (let i = 1, len = datasetSource.length; i < len; i++) {
      const setting = {
        ..._type,
        ...mark,
        stack,
        seriesLayoutBy: 'row'
      };
      if (_.isArray(label)) {
        setting.label = label[i];
      } else {
        setting.label = label;
      }
      series.push(setting);
    }
    const option = {
      title: {
        text: title
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        bottom: 10
      },
      grid: {
        top: 40,
        bottom: 70
      },
      dataset: {
        source: datasetSource
      },
      xAxis: {
        type: 'category',
        // gridIndex: 0
      },
      yAxis: {
        type: 'value'
      },
      series
    };
    return (
      <ReactEcharts
        option={option}
        {...chartConfig}
        style={style}
        onEvents={onEvents}
        showLoading={showLoading(data)}
      />
    );
  }
}

export default Line;
