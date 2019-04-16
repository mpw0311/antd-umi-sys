import { Page } from '@components';
import pathToRegexp from 'path-to-regexp';
import styles from './index.css';

export default function (props) {
    const { location } = props;
    const { pathname } = location;
    const match = pathToRegexp('/sys/users/:id').exec(pathname);
    const userName = match[1];
    return (
        <Page
            loading={false}
            pathtitles={[{ title: '用户分析', link: '/sys/users', icon: 'user' }, userName]}
            title={`${userName}详情`}
        >
            <div className={styles.normal}>
                <h1>{userName}</h1>
            </div>
        </Page>
    );
}
