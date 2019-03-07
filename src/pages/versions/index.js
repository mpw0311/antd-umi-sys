/**
 * @author M
 * @E-mail mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import { Timeline } from 'antd';
import { Page } from '@components';
import Version from './components/version';
import styles from './index.less';
import data from '@utils/versions.config.json';
function Index() {
    return (
        <Page inner pathtitles={['更新日志']} title={'更新日志'}>
            <div className={styles.wrapper}>
                <Timeline reverse>
                    {
                        data.map((item, i) =>
                            <Timeline.Item key={i} >
                                <Version data={item} />
                            </Timeline.Item>)
                    }
                </Timeline>
            </div>
        </Page >
    );
}
export default Index;