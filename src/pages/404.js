import { Page } from 'components';
import styles from './404.css';
import img from '../assets/404.png';

export default function () {
  return (
    <Page
      inner={true}
    >
      <img className={styles.img} src={img} alt="404" />
    </Page>
  );
}
