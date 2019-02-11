import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';

import Sankey from '@/components/D3Chart/Sankey';

class SankeyChart extends PureComponent {

    render() {
        const { dataset, dispatch, loading } = this.props;
        //eslint-disable-next-line
        const handleClick = (name) => {
            dispatch({
                type: 'dimensional/getData',
                payload: {
                    name
                }
            });
        };
        const getData = (dd) => {
            const { nodes, links } = dd;
            const Nodes = nodes.map(item => item.name);
            const Links = links.map(item => {
                const { source, target, ...rest } = item;

                return {
                    source: Nodes.indexOf(source),
                    target: Nodes.indexOf(target),
                    ...rest
                };
            });
            return {
                nodes,
                links: Links
            };
        };
        return (
            <Page title={'sankey'} loading={loading}>
                <Sankey
                    width={1200}
                    height={800}
                    data={getData(dataset)}
                />
            </Page>
        );
    }
}

export default connect(({ sankeyModel }) => {
    return {
        ...sankeyModel
    };
})(SankeyChart);