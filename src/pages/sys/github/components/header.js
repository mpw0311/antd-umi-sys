import { PureComponent, Fragment } from 'react';
import { Col, Row, Statistic, Card, Avatar, Divider } from 'antd';
import { formatMessage } from 'umi/locale';
import { connect } from 'dva';
import Account from './account';
import styles from '../index.less';

const { Meta } = Card;
class Index extends PureComponent {
    handleSubmit = ({ account }) => {
        this.props.dispatch({
            type: 'github/getAccountInfo',
            payload: {
                account
            }
        });
    }
    render() {
        const { account, accountInfo: { avatar_url, name, bio, public_repos, followers, following } } = this.props;
        /* eslint-disable-next-line */
        const title = (<Fragment><a className={styles.a} href={`https://github.com/${account}`} target="_blank">{name}</a><span style={{ paddingLeft: '10px', fontSize: '12px' }}>({account})</span></Fragment>)
        const layout = {
            sm: 24,
            md: 12,
            lg: 12,
            xl: 5
        };
        return (
            <Card>
                <Account value={account} onSubmit={this.handleSubmit} />
                <Divider />
                <Row type={'flex'} justify={'space-between'} style={{ textAlign: 'center', padding: '10px 20px', }}>
                    <Col {...layout} xl={7}>
                        <Card style={{ textAlign: 'left', minHeight: 140 }}>
                            <Meta
                                avatar={<Avatar size={64} src={avatar_url} />}
                                title={title}
                                description={bio}
                            />
                        </Card>
                    </Col>
                    <Col  {...layout} >
                        <Card style={{ minHeight: 140 }}>
                            <Statistic
                                title={formatMessage({ id: 'gitDataV.repositories' })}
                                value={public_repos}
                            //   suffix={'个'}
                            //   prefix={<Icon type="like" />}
                            />
                        </Card>
                    </Col>
                    <Col  {...layout} >
                        <Card style={{ minHeight: 140 }}>
                            <Statistic
                                title={formatMessage({ id: 'gitDataV.followers' })}
                                value={followers}
                            // suffix="人"
                            />
                        </Card>
                    </Col>
                    <Col  {...layout} >
                        <Card style={{ minHeight: 140 }}>
                            <Statistic
                                title={formatMessage({ id: 'gitDataV.following' })}
                                value={following}
                            // suffix="人"
                            />
                        </Card>
                    </Col>
                </Row>
            </Card>
        );
    }
}
export default connect(({ github }) => {
    const { account, accountInfo } = github
    return {
        account,
        accountInfo,
    };
})(Index);