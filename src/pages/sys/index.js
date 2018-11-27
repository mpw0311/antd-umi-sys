import Redirect from 'umi/redirect';
import { indexSys } from 'config';
const { pathname, search, state } = indexSys;
// export default () => <Redirect to={`/sys/${pathname}`} />;
export default () => <Redirect to={{
    pathname,
    search,
    state
}} />;