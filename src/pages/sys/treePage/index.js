import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';

import Tree from '@/components/D3Chart/Tree';

class Sankey extends PureComponent {

    render() {
        const { dataset, dispatch, loading } = this.props;
        const handleClick = (name) => {
            dispatch({
                type: 'dimensional/getData',
                payload: {
                    name
                }
            });
        };
        return (
            <Page title={'tree'} loading={loading}>
                <Tree
                    data={dataset}
                    nodeClick={(d) => {
                        const { data: { name } } = d;
                        handleClick(name);
                    }}
                    maxDepth={5}
                    siderbarClick={(d) => {
                        console.log(d);
                    }}
                    routerClick={(d) => {
                        const { value } = d;
                        handleClick(value);
                    }}
                />
            </Page>
        );
    }
}

export default connect(({ dimensional }) => {
    return {
        ...dimensional
    };
})(Sankey);