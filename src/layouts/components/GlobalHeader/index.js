import { Row, Col } from 'antd';
import User from '../GlobalUserCenter';
import Download from '../GlobalDownload';
import Search from '../GlobalSearch';
import Notice from '../Notice';


function Header(props) {
    const {
        userInfo = {},
        message,
        handleLoadMore = () => { },
        handleSetting = () => { }
    } = props;
    return (
        <Row>
            <Col span={10} style={{ textAlign: 'right' }}>
                <Search />
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
    );
}
export default Header;