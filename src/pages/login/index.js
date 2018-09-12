import { connect } from 'dva';
import { Login } from 'components';
import styles from './index.css';
function Index({ dispatch, loading }) {
  const handleSubmit = (err, values) => {
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