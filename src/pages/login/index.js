import { connect } from 'dva';
import { Login } from 'components';
import { message } from 'antd';
import styles from './index.css';
function Index({ dispatch, loading }) {
  const handleSubmit = (err, values) => {
    for(const name in values){
      if(values[name]===undefined){
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
    <div className={styles.normal}>
      <Login onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

function mapStateToProps({ login, loading }) {
  return {
    ...login,
    loading:loading.global,
  };
}

export default connect(mapStateToProps)(Index);