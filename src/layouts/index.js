import styles from './index.css';

function BasicLayout(props) {
  // if (props.location.pathname === '/login') {
  //   return <SimpleLayout>{ props.children }</SimpleLayout>
  // }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;
