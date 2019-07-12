import Redirect from 'umi/redirect';
export default () => <Redirect to={{
    pathname: '/login',
    state: {}
}} />;