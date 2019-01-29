import Redirect from 'umi/redirect';
import { indexDefultPage } from '@config';
export default () => <Redirect to={{...indexDefultPage}} />;