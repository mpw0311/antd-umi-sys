import { Page, ResetPassword } from '@components';
import { Row, Col } from 'antd';
// import styles from './index.css';

export default function () {
  return (
    <Page
      pathtitles={['修改密码']}
      inner={true}
    >
      <Row style={{paddingTop:'40px'}}>
        <Col span={8} offset={7}>
          <ResetPassword
          />
        </Col>
      </Row>
    </Page>
  );
}
