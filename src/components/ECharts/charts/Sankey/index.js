/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chart from '../../B_basic';
class Index extends PureComponent {
    static defaultProps = {
        data: {},
        dataType: 'special',
        type: 'sankey',
        loading: false,
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
        },
        orient: 'horizontal',
        focusNodeAdjacency: 'allEdges',
        nodeAlign: 'left',
        draggable: true,
        right: 200,
        left: 20,
        showLabel: true,
    }
    render() {
        const {
            data: { nodes, links },
            orient,
            focusNodeAdjacency,
            nodeAlign,
            draggable,
            top,
            bottom,
            right,
            left,
            showLabel
        } = this.props;
        const series = [
            {
                type: 'sankey',
                layoutIterations: 64,
                orient,
                layout: 'none',
                data: nodes,
                links: links,
                // nodeWidth: 40,
                // nodeHeight: 100,
                focusNodeAdjacency,
                nodeAlign,
                draggable,
                top,
                bottom,
                right,
                left,
                label: {
                    show: showLabel
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ];
        return (
            <Chart
                {...this.props}
                series={series}
            />
        );
    }
}
export default Index;

Index.propTypes = {
    //桑基图中节点的布局方向，可以是水平的从左往右，也可以是垂直的从上往下，对应的参数值分别是 horizontal, vertical。
    orient: PropTypes.oneOf(['horizontal', 'vertical']),
    //控制节点拖拽的交互，默认开启。开启后，用户可以将图中任意节点拖拽到任意位置。若想关闭此交互，只需将值设为 false 就行了。
    draggable: PropTypes.bool,
    //是否开启动画。
    animation: PropTypes.bool,
    //节点对其方式
    nodeAlign: PropTypes.oneOf(['left', 'center', 'right']),
    //鼠标 hover 到节点或边上，相邻接的节点和边高亮的交互，默认关闭，可手动开启。
    focusNodeAdjacency: PropTypes.oneOfType([
        PropTypes.oneOf(['allEdges', 'outEdges', 'inEdges']),
        PropTypes.bool,
    ]),
    //sankey组件离容器上侧的距离。
    top: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    //sankey组件离容器下侧的距离。
    bottom: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    //sankey组件离容器右侧的距离。
    right: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    //sankey组件离容器左侧的距离。
    left: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    //label 描述了每个矩形节点中文本标签的样式。
    showLabel: PropTypes.bool,
};