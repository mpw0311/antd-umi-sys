import { PureComponent } from 'react';
import { Page } from '@components';
export default class Authorized extends PureComponent {
    render() {
        const { children, noMatch, diffMenuData, location: { pathname } } = this.props;
        const [res] = diffMenuData.filter(item => item.link === pathname);
        return res ? (<Page showHeader={false} flex={true}>{noMatch}</Page>) : children;
    }
}