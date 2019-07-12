/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  
 */
import { PureComponent } from 'react';
import Context from '@context';
export default (WrappedComponent) => {
    return class extends PureComponent {
        render() {
            return (
                <Context.Consumer >
                    {({ theme, location }) => (
                        < WrappedComponent theme={theme} location={location} {...this.props} />
                    )}
                </Context.Consumer>
            );
        }
    };
};