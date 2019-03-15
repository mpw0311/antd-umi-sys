/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import styles from './index.less';

function Roll(props) {
    const {
        notification = '',// "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.----------------------------------------------------"
    } = props;
    const len = notification.length;
    const ss = Math.floor(len / 12);
    return (
        <div className={styles.rollbox}>
            <div className={styles.roll} style={{ animationDuration: `${ss}s` }}>
                {notification}
            </div>
        </div>
    );
}
export default Roll;