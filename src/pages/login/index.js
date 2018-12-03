import { connect } from 'dva';
import { Login } from 'components';
import { message, Row, Col } from 'antd';
import { loginName } from 'config';
import logo from '../../assets/logo_blue_1024.png';
import styles from './index.less';
function Index({ dispatch, loading }) {
  const handleSubmit = (err, values) => {
    for (const name in values) {
      if (values[name] === undefined) {
        message.error('用户名或密码错误！');
        return false;
      }
    }
    dispatch({
      type: 'login/login',
      payload: {
        ...values,
      },
    });
  };
  return (
    <div className={styles.content}>
      <Row>
        <Col span={24} className={styles.logo}>
          <img alt="logo" src={logo} />
        </Col>
      </Row>
      <h2 className={styles.title}>{loginName}</h2>
      <Login onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

function mapStateToProps({ login, loading }) {
  return {
    ...login,
    loading: loading.global,
  };
}

export default connect(mapStateToProps)(Index);