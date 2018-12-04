import { Row, Col } from 'antd';
import User from '../GlobalUserCenter';
import Download from '../GlobalDownload';
import Search from '../GlobalSearch';
import Notice from '../Notice';


function Header(props) {
    const {
        userInfo = {},
        dispatch,
        menusData = [],
        dataSource = [],
        message,
        theme,
        handleLoadMore = () => { },
        handleSetting = () => { }
    } = props;
    return (
        <Row>
            <Col span={10} style={{ textAlign: 'right' }}>
                <Search
                    menusData={menusData}
                    dataSource={dataSource}
                    dispatch={dispatch}
                    theme={theme}
                />
            </Col>
            <Col span={3} style={{ textAlign: 'center' }}>
                <Notice message={message} userInfo={userInfo} onLoadMore={handleLoadMore} theme={theme} />
            </Col>
            <Col span={3} style={{ textAlign: 'center' }}>
                <Download message={message} userInfo={userInfo} theme={theme} />
            </Col>
            <Col span={8} style={{ textAlign: 'left' }}>
                <User userInfo={userInfo} onSetting={handleSetting} theme={theme} />
            </Col>
        </Row>
    );
}
export default Header;