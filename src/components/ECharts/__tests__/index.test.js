// import { Bar, Line, Area, Funnel, YBar } from '../index';
// import renderer from 'reFunnelact-test-renderer';
import { mount } from 'enzyme';
import Bar from '../charts/Bar';
import YBar from '../charts/Bar-y';
import Line from '../charts/Line';
import Area from '../charts/Area';
import Funnel from '../charts/Funnel';
import Pie from '../charts/Pie';


describe('Layout: Echars', () => {
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
  test('Render Bar', () => {
    const component = mount(<Bar data={data} height={300} />);
    expect(component.exists()).toBe(true);
    expect(component.find('.echarts-for-react').length).toBe(1);
    expect(component.getDOMNode().style.height).toBe('300px');
    expect(component.props().loading).toBe(false);
    expect(component.props().type.toLowerCase()).toBe('bar');
  });
  test('Render Bar', () => {
    const component = mount(<Bar height={300} />);
    expect(component.exists()).toBe(true);
    expect(component.getDOMNode().style.height).toBe('300px');
    expect(component.props().loading).toBe(false);
    expect(component.props().type.toLowerCase()).toBe('bar');
  });
  test('Render Area', () => {
    const component = mount(<Area data={data} height={300} bindResize />);
    expect(component.exists()).toBe(true);
    expect(component.find('.echarts-for-react').length).toBe(1);
    expect(component.getDOMNode().style.height).toBe('300px');
    expect(component.props().loading).toBe(false);
    expect(component.props().type.toLowerCase()).toBe('line');
  });
  test('Render YBar', () => {
    const component = mount(<YBar data={data} height={300} />);
    expect(component.exists()).toBe(true);
    expect(component.find('.echarts-for-react').length).toBe(1);
    expect(component.getDOMNode().style.height).toBe('300px');
    expect(component.props().loading).toBe(false);
    expect(component.props().type.toLowerCase()).toBe('bar');
  });
  test('Render Line', () => {
    const component = mount(<Line data={data} height={300} />);
    expect(component.exists()).toBe(true);
    expect(component.find('.echarts-for-react').length).toBe(1);
    expect(component.getDOMNode().style.height).toBe('300px');
    expect(component.props().loading).toBe(false);
    expect(component.props().type.toLowerCase()).toBe('line');
  });
  test('Render Funnel', () => {
    const component = mount(<Funnel data={data} height={300} />);
    expect(component.exists()).toBe(true);
    expect(component.find('.echarts-for-react').length).toBe(1);
    expect(component.getDOMNode().style.height).toBe('300px');
    expect(component.props().type.toLowerCase()).toBe('funnel');
    // expect(component.find('canvas').length).toBe(1);
  });
  test('Render Pie', () => {
    const component = mount(<Pie data={data} height={300} />);
    expect(component.exists()).toBe(true);
    expect(component.find('.echarts-for-react').length).toBe(1);
    expect(component.getDOMNode().style.height).toBe('300px');
    expect(component.props().type.toLowerCase()).toBe('pie');
    // expect(component.find('canvas').length).toBe(1);
  });
});
