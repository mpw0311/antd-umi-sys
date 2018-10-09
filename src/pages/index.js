import Redirect from 'umi/redirect';
import { pageInit } from 'config';
const { pathname, search, state } = pageInit;
// export default () => <Redirect to={`/sys/${pathname}`} />;
export default () => <Redirect to={{
    pathname,
    search,
    state
}} />;