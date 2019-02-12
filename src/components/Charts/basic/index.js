import { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import Context from '@context';
import chartConfig from '../config';

let timer = null;
export default class Chart extends PureComponent {
    componentDidMount() {
        window.addEventListener('resize', () => {
            let echarts_instance = this.echarts_react && this.echarts_react.getEchartsInstance();
            clearTimeout(timer);
            timer = setTimeout(() => {
                echarts_instance && echarts_instance.resize && echarts_instance.resize();
            }, 200);
        });
    }
    onChartReadyCallback = (e) => {
        console.log('onChartReadyCallback', e, e.resize);
    }
    render() {
        const { style, ...rest } = this.props;
        return (
            <Context.Consumer>
                {({ theme }) => (
                    <ReactEcharts
                        {...chartConfig}
                        {...rest}
                        style={{ width: '100%', height: '100%', minHeight: '300px', overflow: 'hidden', ...style }}
                        // onChartReady={this.onChartReadyCallback}
                        theme={theme}
                        ref={(e) => {
                            this.echarts_react = e;
                            console.log(e);
                        }}
                    />
                )}
            </Context.Consumer>
        );
    }
}