import Basic from './index';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
describe('Basic', () => {
    const data = {
        columns: [
            {
                field: "product",
                name: "分类",
                type: "string"
            },
            {
                field: "2015",
                name: "2015",
                type: "number"
            },
            {
                field: "2016",
                name: "2016",
                type: "number"
            },
            {
                field: "2017",
                name: "2017",
                type: "number"
            }
        ],
        rows: [
            {
                product: 'Matcha Latte',
                2015: 43.3,
                2016: 85.8,
                2017: 93.7
            },
            {
                product: 'Milk Tea',
                2015: 83.1,
                2016: 73.4,
                2017: 55.1
            },
            {
                product: 'Cheese Cocoa',
                2015: 86.4,
                2016: 65.2,
                2017: 82.5
            },
            {
                product: 'Walnut Brownie',
                2015: 72.4,
                2016: 53.9,
                2017: 39.1
            },
        ]
    };
    test('Render A_basic', () => {
        const component = mount(<Basic data={data} height={300} />);
        expect(component.exists()).toBe(true);
        expect(component.find('.echarts-for-react').length).toBe(1);
        expect(component.getDOMNode().style.height).toBe('300px');
        expect(component.props().loading).toBe(false);
        expect(component.props().type.toLowerCase()).toBe('line');
    });
});
