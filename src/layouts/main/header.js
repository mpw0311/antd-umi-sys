import { Row, Col } from 'antd';
import { sysName } from '@config';
import { routerRedux } from 'dva/router';
import GlobalHeader from '../components/GlobalHeader';
import styles from './header.less';


function Header(props) {
    const { userInfo = {}, dispatch, menusData = [], dataSource = [], message } = props;
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
        <Row>
            <Col span={24}>
                <div className={styles.header}>
                    <div className={styles.lf}>
                        <div className={styles.logo} />
                        <h2 style={{ color: '#fff', fontSize: '20px' }}>{sysName}</h2>
                    </div>
                    <div className={styles.center}>
                        {/* <Roll notification={notification} /> */}
                    </div>
                    <div className={styles.rg}>
                        <GlobalHeader
                            userInfo={userInfo}
                            menusData={menusData}
                            dataSource={dataSource}
                            message={message}
                            dispatch={dispatch}
                            handleLoadMore={handleLoadMore}
                            handleSetting={handleSetting}
                        />
                    </div>
                </div>
            </Col>
        </Row>
    );
}
export default Header;