import Redirect from 'umi/redirect';
import { sysInit } from 'config';
const { pathname, search, state } = sysInit;
// export default () => <Redirect to={`/sys/${pathname}`} />;
export default () => <Redirect to={{
    pathname,
    search,
    state
}} />;