/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  layout header组件
 */
import User from '../GlobalUserCenter';
import Search from '../GlobalSearch';
import Notice from '../Notice';
import SelectLang from '../SelectLang';
import styles from './index.less';


function Header(props) {
    const {
        userInfo = {},
        message,
        handleLoadMore = () => { },
        handleSetting = () => { }
    } = props;
    return (
        <div className={styles.rightCenter}>
            <Search className={`${styles.action} ${styles.search}`} />
            <Notice
                className={styles.action}
                message={message}
                userInfo={userInfo}
                onLoadMore={handleLoadMore}
            />
            <User
                className={styles.action}
                userInfo={userInfo}
                onSetting={handleSetting}
            />
            <SelectLang className={styles.action} />
        </div>
    );
}
export default Header;