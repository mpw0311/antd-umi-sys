import styles from './index.css';
const data = [
  {
    name: 123,
    value: 1232
  }
];
export default function () {
  const view = data.map(item => <div key={item.value}>{item.name}</div>);
  return (
    <div className={styles.normal}>
      <h1>Page $chart</h1>
      {view}
    </div>
  );
}
