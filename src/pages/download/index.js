import { Page } from '@components';
import { Row, Col } from 'antd';

export default function () {
    return (
        <Page
            pathtitles={['下载任务列表']}
            inner={true}
        >
            <Row style={{ paddingTop: '40px' }}>
                <Col span={24}>
                    download……
            </Col>
            </Row>
        </Page>
    );
}
