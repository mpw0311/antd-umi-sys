import Redirect from 'umi/redirect';
import { indexPage } from 'config';
const { pathname, search, state } = indexPage;
// export default () => <Redirect to={`/sys/${pathname}`} />;
export default () => <Redirect to={{
    pathname,
    search,
    state
}} />;