import { PureComponent } from 'react';
import config from './config';
import View from './view';
import Line from '../charts/Line';
import Bar from '../charts/Bar';

const { line: lineConfig } = config;
export default class Views extends PureComponent {
    render() {
        const { data, props } = lineConfig;
        return (
            <View data={data} config={props}>
                <Line />
            </View>
        );
    }
}