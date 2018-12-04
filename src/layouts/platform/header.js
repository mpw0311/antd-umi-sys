import { routerRedux } from 'dva/router';
import { GlobalHeader } from 'components';
function Index(props) {
    const { searchData, userInfo, message, dispatch, menusData = [], notification } = props;
    const handleLoadMore = () => {
        dispatch({
            type: 'global/getMessage',
            payload: {
                size: 10,
            },
        });
    };
    const handleSetting = (param) => {
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
    };
    return (
        <div style={{ width: '460px' }}>
            <GlobalHeader
                userInfo={userInfo}
                dispatch={dispatch}
                message={message}
                notification={notification}
                menusData={menusData}
                dataSource={searchData}
                theme={'light'}
                handleLoadMore={handleLoadMore}
                handleSetting={handleSetting}
            />
        </div>
    );
}
export default Index;