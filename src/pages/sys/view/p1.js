import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import View from './components/view1.js';

class Index extends PureComponent {
    render() {
        const { loading, p1, dispatch } = this.props;
        const onSubmit = (times) => {
            dispatch({
                type: 'viewModel/getData',
                payload: {
                    time: times,
                    key: "p1"
                }
            });
        };
        return (
            <Page title={'view1'} loading={loading}>

                <View data={p1} showY2={true} Y2SeriesIndex={[1]} Y2Name={"万"} YName={"万"} handleSubmit={onSubmit} loading={loading} />
            </Page>
        );
    }
}
function mapStateToProps({ viewModel, loading }) {
    return {
        ...viewModel,
        loading: loading.models.snbThree,
    };
}

export default connect(mapStateToProps)(Index);