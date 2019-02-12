import { Component } from 'react';
import Chart from '../basic';
import Loading from '../Loading';
import { getMark, showLoading } from '../_';
import { _getType, _getYAxis, _getSeries, _toDataset, _resetLegend } from './_';

const dataCheck = (data) => {
  return showLoading(data);
};
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
      barWidth,
      loading,
      originOption = {}
    } = this.props;
    const {
      Y2Type = type,
      Y2Unit = YUnit,
      Y2Index = 1,
      Y2Show = false
    } = this.props;
    const yAxis = _getYAxis({ YUnit, Y2Show, Y2Index, Y2Unit, Y2Type });
    if (loading === true) {
      return (<Loading loading style={style} />);
    } else if (dataCheck(data)) {
      return (<Loading nodata style={style} />);
    }
    const { onEvents } = this.state;
    //是否倒序
    const datasetSource = _toDataset({ data, yIndex, dataReverse });
    //legend重命名
    const _datasetSource = _resetLegend({ legendData, legendDict, datasetSource });

    const mark = getMark({ maxShow, minShow, averageShow });
    const _type = _getType(type);
    const setting = {
      ..._type,
      ...mark,
      stack,
      seriesLayoutBy: 'row',
      barWidth
    };
    //获取series
    const series = _getSeries({
      setting,
      datasetSource: _datasetSource,
      label,
      Y2Show,
      Y2Type,
      Y2Index
    });
    //设置y2轴
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
      yAxis,
      series,
      ...originOption
    };
    return (
      <Chart
        option={option}
        style={style}
        onEvents={onEvents}
      />
    );
  }
}

export default Line;
