import { Row, Col } from 'antd';
import { sysName } from 'config';
import { routerRedux } from 'dva/router';
import User from './userSeting';
import Download from './Download';
import Search from './search';
import Roll from '../GlobalRoll';
import Notice from '../Notice';
import styles from './index.less';


function Header(props) {
    const { userInfo = {}, dispatch, menusData = [], dataSource = [], message, notification } = props;
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
                        <h1 style={{ color: '#fff' }}>{sysName}</h1>
                    </div>
                    <div className={styles.center}>
                        <Roll notification={notification} />
                    </div>
                    <div className={styles.rg}>
                        <Row>
                            <Col span={10} style={{ textAlign: 'right'}}>
                                <Search
                                    menusData={menusData}
                                    dataSource={dataSource}
                                    dispatch={dispatch}
                                />
                            </Col>
                            <Col span={3} style={{ textAlign: 'center' }}>
                                <Notice message={message} userInfo={userInfo} onLoadMore={handleLoadMore} />
                            </Col>
                            <Col span={3} style={{ textAlign: 'center' }}>
                                <Download message={message} userInfo={userInfo} />
                            </Col>
                            <Col span={8} style={{ textAlign: 'left' }}>
                                <User userInfo={userInfo} onSetting={handleSetting} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
export default Header;