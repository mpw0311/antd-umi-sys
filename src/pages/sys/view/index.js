import moment from 'moment';
import { Charts, Page } from 'components';
import styles from './index.css';

const { Bar } = Charts;
export default function () {
  console.log(moment);
  const data = {
    columns: [
      {
        field: "category",
        name: "分类",
        type: "string",
      },
      {
        field: "amount_1",
        name: "1k-3k",
        type: "number",
      },
      {
        field: "amount_2",
        name: "3k-1w",
        type: "number",
      },
      {
        field: "amount_3",
        name: "1w-3w",
        type: "number",
      },
      {
        field: "amount_4",
        name: "3w-5w",
        type: "number",
      },
      {
        field: "amount_4",
        name: "5w-10w",
        type: "number",
      },
      {
        field: "amount_5",
        name: ">=10w",
        type: "number",
      },

    ],
    rows: [
      {
        category: '低于30%',
        amount_1: 24,
        amount_2: 53,
        amount_3: 23,
        amount_4: 73,
        amount_5: 93,
      },
      {
        category: '30%-50%',
        amount_1: 24,
        amount_2: 53,
        amount_3: 23,
        amount_4: 73,
        amount_5: 93,
      },
      {
        category: '50%-65%',
        amount_1: 24,
        amount_2: 53,
        amount_3: 23,
        amount_4: 73,
        amount_5: 93,
      },
      {
        category: '65%-75%',
        amount_1: 24,
        amount_2: 53,
        amount_3: 23,
        amount_4: 73,
        amount_5: 93,
      },
      {
        category: '75%-85%',
        amount_1: 24,
        amount_2: 53,
        amount_3: 23,
        amount_4: 73,
        amount_5: 93,
      },
      {
        category: '高于85%',
        amount_1: 24,
        amount_2: 53,
        amount_3: 23,
        amount_4: 73,
        amount_5: 93,
      },
    ],
  };
  const handleClick = (p) => {
    console.log(p);
  };
  return (
    <Page loading={false} pathtitles={['view']}>
      <div className={styles.normal}>
        <h1>Page view</h1>
        <Bar data={data} handleClick={handleClick} />
      </div>
    </Page>
  );
}
