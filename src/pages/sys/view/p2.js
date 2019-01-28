import React, { PureComponent } from "react";
import { connect } from 'dva';
import { Page } from 'components';
import View from './components/view.js';

class Index extends PureComponent {
    render() {
        const { location, p2, dispatch, loading } = this.props;
        const onSubmit = (times) => {
            console.log("submit ok", times);
            dispatch({
                type: 'viewModel/getData',
                payload: {
                    time: times,
                    key: "p2"
                }
            });
        };
        return (
            <Page pathtitles={["view2"]}>
                <View data={p2} handleSubmit={onSubmit} loading={loading} />
            </Page>
        );
    }
}
function mapStateToProps({ viewModel, loading }) {
    return {
        ...viewModel,
        loading: loading.snbThree
    };
}
export default connect(mapStateToProps)(Index);
