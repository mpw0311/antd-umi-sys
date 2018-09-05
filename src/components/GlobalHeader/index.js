import { Row, Col } from 'antd';
import { SYSTEMNAME } from 'config';
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
            type: 'login/getMessage',
            payload: {
                size: 10,
            },
        });
    };
    return (
        <Row>
            <Col span={24}>
                <div className={styles.header}>
                    <div className={styles.lf}>
                        <div className={styles.logo} />
                        <h1 style={{ color: '#fff' }}>{SYSTEMNAME}</h1>
                    </div>
                    <div className={styles.center}>
                        <Roll notification={notification} />
                    </div>
                    <div className={styles.rg}>
                        <Row>
                            <Col span={1} style={{ textAlign: 'right', display: 'none' }}>
                                <Search
                                    menusData={menusData}
                                    dataSource={dataSource}
                                    dispatch={dispatch}
                                />
                            </Col>
                            <Col span={5} style={{ textAlign: 'center' }}>
                                <Notice message={message} userInfo={userInfo} onLoadMore={handleLoadMore} />
                            </Col>
                            <Col span={6} style={{ textAlign: 'center' }}>
                                <Download message={message} userInfo={userInfo} />
                            </Col>
                            <Col span={12} style={{ textAlign: 'left' }}>
                                <User userInfo={userInfo} dispatch={dispatch} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
export default Header;