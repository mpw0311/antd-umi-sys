import { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import chartConfig from '../config';
import _ from 'lodash';
import { toDatasetReverse, toDataset, getMark, showLoading, swap } from '../_';
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
      label,
      yIndex = 0,
      legendDict,
      legendData,
      dataReverse = false,
      YUnit,
      barWidth
    } = this.props;
    const loading = showLoading(data);
    if (loading) {
      return (
        <ReactEcharts
          option={{}}
          {...chartConfig}
          style={style}
          showLoading={loading}
        />
      );
    }
    const { onEvents } = this.state;
    let datasetSource = [];// dataReverse ? toDatasetReverse(data, yIndex) : toDataset(data);
    let _datasetSource = [];

    if (dataReverse) {
      datasetSource = toDatasetReverse(data, yIndex);
      _datasetSource = datasetSource.map(row => {
        return swap(row, yIndex);
      });
    } else {
      datasetSource = toDataset(data, yIndex);
      _datasetSource = swap(datasetSource, yIndex);
    }
    if (_.isArray(legendData)) {
      _datasetSource = _datasetSource.map((row, i) => {
        if (i === 0) {
          row[0] = "legendType";
        } else {
          row[0] = legendData[i - 1];
        }
        return row;
      });
    } else if (_.isObject(legendDict)) {
      _datasetSource = _datasetSource.map((row, i) => {
        if (i === 0) {
          row[0] = "legendType";
        } else {
          const name = row[0];
          row[0] = legendDict[name];
        }
        return row;
      });
    }
    const mark = getMark({ maxShow, minShow, averageShow });
    const _type = _getType(type);
    const series = [];
    for (let i = 1, len = _datasetSource.length; i < len; i++) {
      const setting = {
        ..._type,
        ...mark,
        stack,
        seriesLayoutBy: 'row',
        barWidth
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
        source: _datasetSource
      },
      xAxis: {
        type: 'category',
        // gridIndex: 0
      },
      yAxis: {
        type: 'value',
        name: YUnit
      },
      series
    };
    return (
      <ReactEcharts
        option={option}
        {...chartConfig}
        style={style}
        onEvents={onEvents}
      />
    );
  }
}

export default Line;
