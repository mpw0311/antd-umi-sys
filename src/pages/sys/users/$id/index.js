import { Page } from '@components';
import pathToRegexp from 'path-to-regexp';
import styles from './index.css';

export default function (props) {
    const { location } = props;
    const { pathname } = location;
    const match = pathToRegexp('/sys/users/:id').exec(pathname);
    return (
        <Page loading={false} inner={true} pathtitles={['info']} location={location}>
            <div className={styles.normal}>
                <h1>{match[1]}</h1>
            </div>
        </Page>
    );
}
