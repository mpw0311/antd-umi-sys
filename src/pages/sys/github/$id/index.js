import { PureComponent } from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import { Page } from '@components';
import { Line } from '@components/Echarts';
// import RepoStargazers from '../components/repoStargazers';
@connect(({ github, loading }) => {
  const { account, stars, currentRepoName, description } = github;
  return {
    account,
    stars,
    currentRepoName,
    description,
    loading: loading.models.github,
  };
})
class Repo extends PureComponent {
  componentDidMount() {
    // eslint-disable-next-line
    const { account, currentRepoName, repos } = this.props;
    //stargazers Analysis
    this.getRepoStars(account, currentRepoName);
  }
  componentDidUpdate(nextProps, nextState) {
    const { account, currentRepoName } = nextProps;
    if (account !== this.props.account || currentRepoName !== this.props.currentRepoName) {
      //stargazers Analysis
      this.getRepoStars(account, currentRepoName);
    }
  }
  /**
   * 数据请求
   */
  getRepoStars = (account, repoName) => {
    this.props.dispatch({
      type: 'github/getReposStars',
      payload: {
        account,
        repoName,
      },
    });
  };
  render() {
    const { account, currentRepoName, description, stars, loading } = this.props;
    return (
      <Page
        loading={false}
        pathtitles={[
          {
            title: 'gitDataV',
            link: '/sys/github',
            icon: 'github',
            state: { account },
          },
          currentRepoName,
        ]}
        title={currentRepoName}
        description={description}
      >
        <Card title="stargazers Analysis">
          <Line data={stars} seriesLayoutBy={'column'} height={400} loading={loading} />
        </Card>
        {/* <RepoStargazers location={location} /> */}
      </Page>
    );
  }
}
export default Repo;
