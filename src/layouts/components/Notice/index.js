/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  公告通知组件
 */
import { Popover, Badge, Icon, Tabs, Spin, List, Avatar } from 'antd';
import { Link } from 'umi';
import { Consumer } from '@components';
import classNames from 'classnames';
import styles from './index.less';

const { TabPane } = Tabs;
const { Item: ListItem } = List;
const { Meta: ListItemMeta } = ListItem;
function NoticeIcon(props) {
    const { message = [], loading = false, onLoadMore = () => { }, className, theme } = props;
    const computeData = (data) => {
        const unread = data.filter(item => item.type === 'unread');
        const read = data.filter(item => item.type === 'read');
        return {
            unread,
            read
        };
    };
    const { unread = [], read = [] } = computeData(message);
    const getList = (data = []) => {
        return (<List
            itemLayout="horizontal"
            dataSource={data}
            loadMore={
                <div onClick={onLoadMore} className={styles.more}>
                    加载更多
                </div>
            }
            renderItem={item => (
                <ListItem>
                    <ListItemMeta
                        avatar={<Avatar icon="link" />}
                        title={
                            <Link to={{ pathname: "/sys/message", state: { pathtitles: ["消息中心"] } }}>
                                {item.title}
                            </Link>
                        }
                        description={item.description}
                    />
                </ListItem>
            )}
        />
        );
    };
    const getNoticeIcon = () => {
        return (
            <Spin spinning={loading} delay={0}>
                <Tabs defaultActiveKey="1" className={styles.tabs} size="small" tabBarGutter={8}>
                    <TabPane tab={<span><Icon type="mail" />全部({message.length})</span>} key="1">
                        {getList(message)}
                    </TabPane>
                    <TabPane tab={<span><Icon type="folder" />未读({unread.length})</span>} key="2">
                        {getList(unread)}
                    </TabPane>
                    <TabPane tab={<span><Icon type="folder-open" />已读({read.length})</span>} key="3">
                        {getList(read)}
                    </TabPane>
                </Tabs>
            </Spin>
        );
    };
    const news = getNoticeIcon();
    return (
        <Popover
            placement="bottomRight"
            trigger="click"
            content={news}
            className={classNames(className)}
            popupClassName={styles.popover}
        >
            <span className={styles.noticeButton} style={{ color: theme === 'dark' ? "#FFF" : undefined }}>
                <Badge count={unread.length} offset={[-5, 5]}>
                    <Icon type="bell" className={styles.icon} />
                </Badge>
            </span>
        </Popover>
    );
}
export default Consumer(NoticeIcon);