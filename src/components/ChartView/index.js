import { Line, Bar, Area, YBar, Funnel, Pie, Sankey } from '../Echarts';
import ChartTabs from './tabPane';
import data from './data/data01.json';
import funneldata from './data/data02.json';
import Sankeydata from './data/data03.json';
export default () => {
    return (
        <ChartTabs>
            <Bar config={{ name: '柱状图', basic_type: 'A' }} data={data} showLabel />
            <Area config={{ name: '面积图', basic_type: 'A' }} data={data} />
            <Line config={{ name: '折线图', basic_type: 'A' }} data={data} showToolbox showToolboxMagicType showY2 showY2SplitLine />
            <Bar config={{ name: '堆叠柱图', basic_type: 'A' }} data={data} stack />
            <YBar config={{ name: '条形图', basic_type: 'A' }} data={data} />
            <Funnel config={{ name: '漏斗图', basic_type: 'B' }} data={funneldata} height={400} />
            <Pie config={{ name: '饼图', basic_type: 'B' }} data={funneldata} height={400} />
            <Sankey config={{ name: '桑基图', basic_type: 'B' }} data={Sankeydata} height={400} />
        </ChartTabs>
    );
};