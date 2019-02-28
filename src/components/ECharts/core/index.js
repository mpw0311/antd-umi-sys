import { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';
import Context from '@context';
import chartConfig from '../config/settings';

let timer = null;
export default class Chart extends PureComponent {
    static defaultProps = {
        isBindResize: false
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
                        theme={theme}
                        ref={(e) => {
                            this.echarts_react = e;
                        }}
                    />
                )}
            </Context.Consumer>
        );
    }
}
Chart.propTypes = {
    options: PropTypes.object,
    isBindResize: PropTypes.bool,
}