import Redirect from 'umi/redirect';
// export default () => <Redirect to={`/sys/${pathname}`} />;
export default () => <Redirect to={{
    pathname: '/sys/github',
    state: {
        key: 'gitDataV',
        pathtitles: [{ title: 'gitDataV', icon: 'github' }],
    }
}} />;