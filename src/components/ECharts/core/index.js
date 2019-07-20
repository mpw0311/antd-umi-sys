/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description
 */
import { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';
import Context from '@context';
import chartConfig from '../config';

let timer = null;
export default class Chart extends PureComponent {
  static defaultProps = {
    isBindResize: false,
    height: '100%',
  };
  componentDidMount() {
    const { isBindResize } = this.props;
    isBindResize && this.bindResize();
  }
  bindResize = () => {
    window.addEventListener('resize', () => {
      let echarts_instance = this.echarts_react && this.echarts_react.getEchartsInstance();
      clearTimeout(timer);
      timer = setTimeout(() => {
        echarts_instance && echarts_instance.resize && echarts_instance.resize();
      }, 200);
    });
  };
  render() {
    const { style, height, showLoading, ...rest } = this.props;
    return (
      <Context.Consumer>
        {({ theme }) => (
          <ReactEcharts
            {...chartConfig}
            {...rest}
            style={{
              width: '100%',
              textAlign: 'left',
              height,
              minHeight: '300px',
              ...style,
            }}
            showLoading={showLoading}
            theme={theme}
            ref={e => {
              this.echarts_react = e;
            }}
          />
        )}
      </Context.Consumer>
    );
  }
}
Chart.propTypes = {
  //the echarts option config, can see http://echarts.baidu.com/option.html#title.
  option: PropTypes.object.isRequired,
  //改变图表尺寸，在容器大小发生改变时是否需要手动调用。
  isBindResize: PropTypes.bool,
  //when setOption, not merge the data, default is false. See http://echarts.baidu.com/api.html#echartsInstance.setOption.
  notMerge: PropTypes.bool,
  // when setOption, lazy update the data, default is false. See http://echarts.baidu.com/api.html#echartsInstance.setOption.
  lazyUpdate: PropTypes.bool,
  // the style of echarts div. object, default is {height: '300px'}.
  style: PropTypes.object,
  //the class of echarts div. you can setting the css style of charts by class name.
  className: PropTypes.string,
  //the theme of echarts. string, should registerTheme before use it
  theme: PropTypes.string,
  //when the chart is ready, will callback the function with the echarts object as it's paramter.
  onChartReady: PropTypes.func,
  //the echarts loading option config, can see http://echarts.baidu.com/api.html#echartsInstance.showLoading.
  loadingOption: PropTypes.object,
  //bool, when the chart is rendering, show the loading mask.
  showLoading: PropTypes.bool,
  //binding the echarts event, will callback with the echarts event object, and the echart object as it's paramters
  onEvents: PropTypes.object,
  //the opts of echarts. object, will be used when initial echarts instance by echarts.init. Document here.
  opts: PropTypes.object,
};
