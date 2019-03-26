/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  header组件
 */
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { PureComponent } from 'react';
import GlobalHeader from '../components/GlobalHeader';
class Index extends PureComponent {
    handleLoadMore = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'global/getMessage',
            payload: {
                size: 10,
            },
        });
    }
    handleSetting = (param) => {
        const { dispatch } = this.props;
        const { key, item } = param;
        const { state } = item.props;
        if (key === 'logout') {
            dispatch({
                type: "global/logout",
                payload: {
                    ...state,
                },
            });
        } else {
            dispatch(routerRedux.push({
                pathname: key,
                state,
            }));
        }
    }
    render() {
        const { userInfo, message, notification } = this.props;
        return (
            <div style={{ width: '460px' }}>
                <GlobalHeader
                    userInfo={userInfo}
                    message={message}
                    notification={notification}
                    handleLoadMore={this.handleLoadMore}
                    handleSetting={this.handleSetting}
                />
            </div>
        );
    }
}
export default connect(({ global: { userInfo, message, notification } }) => {
    return {
        userInfo,
        message,
        notification
    };
})(Index);