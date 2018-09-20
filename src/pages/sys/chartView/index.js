import { connect } from 'dva';
import { Charts, Page } from 'components';
import View from './components/view';
// import styles from './index.less';

const { Line, Bar, BarWaterfall, ScatterAqiColor } = Charts;
function Chart(props) {
    const { dispatch, lineData = [], barData = [], barWaterfallData, scatterAqiColorData } = props;// eslint-disable-line
    const handleClick = (p) => {
        console.log(p);
    };
    const handleBlur = (value, type) => {
        dispatch({
            type: "chartView/save",
            payload: {
                [type]: value
            }
        });
    };
    return (
        <Page loading={false} pathtitles={['chartView']}>
            <View
                title="折线图"
                data={lineData}
                onBlur={(value) => {
                    handleBlur(value, "lineData");
                }}
            >
                <Line data={lineData} handleClick={handleClick} />
            </View>
            <View
                title="柱状图"
                data={barData}
                onBlur={(value) => {
                    handleBlur(value, "barData");
                }}
            >
                <Bar data={barData} handleClick={handleClick} />
            </View>
            <View
                title="瀑布图"
                data={barWaterfallData}
                onBlur={(value) => {
                    handleBlur(value, "barWaterfallData");
                }}
            >
                <BarWaterfall data={barWaterfallData} handleClick={handleClick} />
            </View>
            <View
                title="散点图"
                data={scatterAqiColorData}
                rows={24}
                onBlur={(value) => {
                    handleBlur(value, "scatterAqiColorData");
                }}
            >
                <ScatterAqiColor data={scatterAqiColorData} handleClick={handleClick} style={{ height: '400px', marginTop: '50px' }} />
            </View>
        </Page >
    );
}
function mapStateToProps({ chartView }) {
    return {
        ...chartView,
    };
}
export default connect(mapStateToProps)(Chart);