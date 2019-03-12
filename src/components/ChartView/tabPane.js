import { PureComponent } from 'react';
import { Tabs } from 'antd';
import View from './view';

const TabPane = Tabs.TabPane;

export default class PageMenu extends PureComponent {
    render() {

        return (
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
            >
                {this.props.children.map((child, i) => {
                    const { props: { config = {} } } = child;
                    const { name, basic_type } = config;
                    return (
                        <TabPane tab={name || `Tab${i + 1}`} key={i + 1}>
                            <View type={basic_type}>
                                {child}
                            </View>
                        </TabPane>
                    );

                })}
            </Tabs>
        );
    }
}