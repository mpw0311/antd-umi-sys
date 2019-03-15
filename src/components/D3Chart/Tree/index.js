/**
 * @author：M
 * @email: mpw0311@163.com
 * @version: 1.0.0
 * @description： d3 tree图
 */
import { PureComponent } from 'react';
import { select, tree, hierarchy, zoom, event } from 'd3';
//1.文字超界处理
export default class Sankey extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: 12,
            treeData: {},
        };
    }
    static defaultProps = {
        style: {},
        maxDepth: 5,
        width: 1200,
        height: 1200,
        siderbarWidth: 36,
        radius: 6,//圆角平滑
        nodeWidth: {//传参null就按字数设置宽度
            _0: 160,
            _1: 160,
            _2: 160,
            _3: 160,
            _4: 160,
            _5: 160,
        },//默认节点宽度
        nodeHeight: 50,//节点rect高度
        modelWidth: {
            _0: 180,
            _1: 180,
            _2: 180,
            _3: 180,
            _4: 180,
            _5: 180,
        },
        modelHeight: 80,
        gridPading: {
            top: 80,
            right: 220,
            bottom: 10,
            left: 20
        },
        selector: null,//挂载元素
        fontNum: 1,//设置字体大小因子
        fontColor: {//字体颜色
            normal: "#fff",
            warning: "#e3e3e1",
            error: "#f00"
        },
        bgColor: {//node节点颜色
            normal: "#35ad5b",
            warning: "#e3e3e1",
            error: "#f00"
        },
        nodeColor: '#1F90E2',
        pathColor: '#35ad5b',
        data: {},
        router: {
            baseWidth: 40,
            arrowHeight: 30,
            gap: 10,
            paddingTop: 10
        },
        routerClick: () => { },
        nodeClick: () => { },
        siderbarClick: () => { },
    }
    drawInit(dom) {
        const {
            width,
            height,
            gridPading,
        } = this.props;
        const svg = select(dom).append("svg")
            .attr("width", width)
            .attr("height", height)
            .style('border', '1px solid #333');
        const routeGroup = svg.append("g")
            .attr("transform", `translate(0,0)`);
        const contentGroup = svg.append("g")
            .attr("transform", `translate(${gridPading.left},${gridPading.top})`);
        const { nodes, links } = this.getTreeData();
        /*eslint-disable-next-line */
        const link = this.renderLink(contentGroup, links);
        const node = this.renderNode(contentGroup, nodes);
        const siderbar = this.renderSiderbar(node);
        this.renderRouter(routeGroup);
        this.renderModel(node);
        this.bindEvent(node);
        this.bindSiderbarEvent(siderbar);
        this.bindScaleAndDrag(svg, contentGroup);
    }
    getTreeData() {
        const {
            width,
            height,
            gridPading,
            data,
            maxDepth
        } = this.props;
        const depthFilter = (children, depth, n = 1) => {
            const [item] = children.filter(item => item.children && item.children.length > 0);
            if (depth !== undefined && n > depth) {
                return {
                    item,
                    depth: n
                };
            }
            if (item) {
                const { children } = item;
                return depthFilter(children, depth, ++n);
            }
            return {
                item,
                depth: n
            };
        };
        const { depth } = depthFilter([data], undefined);
        const { item: dataSource } = depthFilter([data], depth - maxDepth);
        //创建一个树状图
        const d3Tree = tree()
            .size([width - gridPading.top - gridPading.bottom, height - gridPading.right - gridPading.left])
            .separation((a, b) => { //适应radial布局，可以简单的理解为深度越高，相邻子节点之间的距离越小。
                // return (a.parent === b.parent ? 1 : 2) / a.depth;
                return a.parent === b.parent ? 1 : 1;
            });
        //创建一个层级布局
        const hierarchyData = hierarchy(dataSource)
            .sum(function (d) {
                return d.value;
            });
        //初始化树状图，传入数据得到绘制树的基本数据
        const treeData = d3Tree(hierarchyData);
        //得到边和节点（已经完成转换的）
        const nodes = treeData.descendants();
        const links = treeData.links();
        return {
            nodes,
            links
        };
    }
    renderLink(group, links) {
        const {
            nodeWidth,
            fontNum,
            pathColor
        } = this.props;
        const { fontSize } = this.state;
        const link = group.selectAll(".link")
            .data(links)
            .enter()
            .append('path')
            .attr('class', 'link')
            .attr('d', d => {
                let lineOffsetWidth;
                if (nodeWidth === null) {
                    lineOffsetWidth = (d.source.name.length + d.source.number.length + 2)
                        * fontSize * fontNum;
                } else {
                    lineOffsetWidth = nodeWidth[`_${d.source.depth}`];
                }
                lineOffsetWidth = lineOffsetWidth + 10;
                return "M" + d.source.y + " " + d.source.x +
                    "L" + (d.source.y + lineOffsetWidth) + " " + d.source.x +
                    " L" + (d.source.y + lineOffsetWidth) + " " + d.target.x + " L" +
                    d.target.y + " " + d.target.x;
            })
            .attr('style', () => `stroke:${pathColor};fill: none;stroke-width: 1.5px;`);
        return link;
    }
    renderNode(group, nodes) {
        const {
            nodeHeight,
            nodeWidth,
            fontNum,
            radius,
            nodeColor,
            fontColor,
            bgColor//eslint-disable-line
        } = this.props;
        const { fontSize } = this.state;
        const node = group.selectAll('.node')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${d.y},${d.x - nodeHeight / 2})`)
            .style('style', () => `font:${fontSize * fontNum}px sans-serif;`)
            .style('cursor', 'pointer');
        node.append('rect')
            .attr('width', d => nodeWidth === null ?
                (d.name.length + 2) * fontSize * fontNum :
                nodeWidth[`_${d.depth}`])
            .attr('height', nodeHeight)
            .attr('x', 0)
            .attr('y', 0)
            .attr('rx', radius)
            .attr('ry', radius)
            .attr('style', d => {//eslint-disable-line
                return `fill:${nodeColor}`;
                // if (d.type === '1') {
                //     return `fill:${bgColor.normal}`;
                // } else if (d.type === '2') {
                //     return `fill:${bgColor.warning}`;
                // } else {
                //     return `fill:${bgColor.error}`;
                // }
            });
        node.append('text')
            .attr('dx', d => {
                const width = nodeWidth[`_${d.depth}`];
                const name = d.data.name;
                const len = name.length;
                const n = (/[A-Za-z0-9\s]/g).test(name) ? len / 2 : len;
                return (width - n * fontSize * fontNum) / 2 - 4;
            })
            .attr('dy', (fontSize * fontNum + nodeHeight / 2) / 2 - 2)
            .style('text-anchor', 'start')
            .style('fill', fontColor.normal)
            .text(d => d.data.name);
        node.append('text')
            .attr('dx', d => (nodeWidth[`_${d.depth}`] - ((d.value + '').length + 4) * fontSize * fontNum) / 2)
            .attr('dy', (fontSize * fontNum / 2 + nodeHeight * 3 / 4) - 2)
            .style('text-anchor', 'start')
            .style('fill', fontColor.normal)
            .text(d => {
                return '人数：' + d.value;
            });
        node.append('rect')
            .attr('class', 'tag')
            .attr('width', d => nodeWidth === null ?
                (d.name.length + d.number.length + 2) * fontSize * fontNum :
                nodeWidth[`_${d.depth}`])
            .attr('height', nodeHeight)
            .attr('x', 0)
            .attr('y', 0)
            .attr('rx', radius)
            .attr('ry', radius)
            .attr('style', 'opacity:0');
        return node;
    }
    renderSiderbar(node) {
        const {
            nodeHeight,
            nodeWidth,
            fontNum,
            siderbarWidth,
            fontColor
        } = this.props;
        const { fontSize } = this.state;
        const siderbarHeight = nodeHeight / 2 - 1;
        const g = node.append('g')
            .attr("transform", d => {
                const x = nodeWidth[`_${d.depth}`] + 1;
                return `translate(${x},0)`;
            })
            .attr('class', '_d3_anchor')
            .style('display', 'none');
        g.append('rect')
            .attr('width', siderbarWidth)
            .attr('height', siderbarHeight)
            .attr('x', 0)
            .attr('y', 0)
            .attr('rx', 4)
            .attr('ry', 4)
            .style('fill', '#797979');
        g.append('text')
            .text('导出')
            .style('fill', fontColor.normal)
            .attr('dx', () => (siderbarWidth - 2.5 * fontSize * fontNum) / 2)
            .attr('dy', (fontSize * fontNum + siderbarHeight) / 2 - 2)
            .style('text-anchor', 'start');
        // g.append('path')
        //     .attr('d', 'M20,14.4c0.54,0,0.97,0.43,0.97,0.97v7.23c0,1.89-1.54,3.42-3.42,3.42H3.42C1.53,26.02,0,24.49,0,22.6V4.91c0-1.89,1.53-3.42,3.42-3.42h9.82c0.54,0,0.97,0.43,0.97,0.97c0,0.54-0.43,0.97-0.97,0.97H3.42c-0.82,0-1.48,0.67-1.49,1.49V22.6c0,0.82,0.67,1.49,1.49,1.49h17.69c0.82,0,1.49-0.67,1.49-1.49v-7.23C22.6,14.83,23.04,14.4,23.57,14.4L23.57,14.4z M25.82,6.24c0.21,0.18,0.34,0.44,0.34,0.73c0,0.29-0.13,0.55-0.34,0.73l-5.43,5.43c-0.18,0.18-0.43,0.28-0.69,0.28c-0.39,0-0.74-0.24-0.89-0.6c-0.15-0.36-0.07-0.78,0.21-1.06l3.74-3.74c-8.41,0.56-11.77,4.21-11.77,12.51c0,0.35-0.18,0.67-0.48,0.84c-0.3,0.17-0.67,0.17-0.97,0c-0.3-0.17-0.48-0.49-0.48-0.84c0-9.47,4.18-13.89,13.86-14.46l-3.89-3.89c-0.25-0.24-0.35-0.6-0.26-0.94c0.09-0.34,0.35-0.6,0.69-0.69c0.34-0.09,0.7,0.01,0.94,0.26L25.82,6.24z M25.82,6.24')
        //     .attr('fill', "#797979")
        //     .attr('p-id', "5549");
        return g;
    }
    renderModel(node) {
        const {
            modelWidth,
            modelHeight,
            nodeWidth,
            radius,
            fontNum,
            fontColor
        } = this.props;
        const { fontSize } = this.state;
        const L = 20;
        const g = node.append('g')
            .attr("transform", d => `translate(${(nodeWidth[`_${d.depth}`] - modelWidth[`_${d.depth}`]) / 2},-${modelHeight - Math.sin(60) * L})`)
            .attr('class', '_d3_model')
            .style('display', 'none');
        g.append('rect')
            .attr('width', d => modelWidth[`_${d.depth}`])
            .attr('height', modelHeight)
            .attr('x', 0)
            .attr('y', 0)
            .attr('rx', radius)
            .attr('ry', radius)
            .style('fill', 'rgba(50, 50, 50, 0.7)');
        g.append('text')
            .text(d => {
                const { value, parent } = d;
                return `占比：${parent ? (value / parent.value * 100).toFixed(2) : 100}%`;
            })
            .style('fill', fontColor.normal)
            .attr('dx', d => {
                const fontWidth = 8 * fontSize * fontNum;
                return (modelWidth[`_${d.depth}`] - fontWidth) / 2;
            })
            .attr('dy', (fontSize * fontNum + modelHeight) / 4 + 2)
            .style('text-anchor', 'start');
        g.append('text')
            .text(d => {
                const { data: { time } } = d;
                return `平均访问时长：${time ? time : 0}ms`;
            })
            .style('fill', fontColor.normal)
            .attr('dx', d => {
                const fontWidth = 12 * fontSize * fontNum;
                return (modelWidth[`_${d.depth}`] - fontWidth) / 2;
            })
            .attr('dy', (fontSize * fontNum + modelHeight * 3 / 2) / 2 - 4)
            .style('text-anchor', 'start');
        g.append('polygon')
            .attr('points', d => {
                const x1 = (modelWidth[`_${d.depth}`] - L) / 2,
                    y1 = modelHeight,
                    x2 = x1 + L,
                    y2 = y1,
                    x3 = x1 + L / 2,
                    y3 = modelHeight - Math.sin(60) * L;
                return `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
            })
            // .style('transform','rotate(45deg)')
            .style('fill', 'rgba(50, 50, 50, 0.7)');
        return g;
    }
    renderRouter(group) {
        const {
            data,
            fontNum,
            width,
            router: {
                baseWidth,
                arrowHeight,
                gap,
                paddingTop
            },
            routerClick,
            maxDepth
        } = this.props;
        const { fontSize } = this.state;
        const getPath = (children, arr = []) => {
            if (children && children.length > 0) {
                const [obj] = children.filter(item => item.children && item.children.length > 0);
                if (obj) {
                    const { name, children } = obj;
                    arr.push(name);
                    return getPath(children, arr);
                }
            }
            return arr;
        };
        const getArrowPath = (start = [], L = 10, n) => {
            const [x1, y1] = start;
            const h = arrowHeight;
            const
                x2 = x1 + L,
                y2 = y1,
                x3 = x2 + 14,
                y3 = y1 + h / 2,
                x4 = x2,
                y4 = y1 + h,
                x5 = x1,
                y5 = y1 + h,
                x6 = x1 + 14,
                y6 = y1 + h / 2;
            if (n === 0) {
                return `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5}`;
            }
            return `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${x6},${y6}`;
        };

        const pathData = getPath([data]);
        const routerLength = pathData.length;
        const getCoorData = (pathData) => {
            let _x = gap;
            let _y = paddingTop;
            return pathData.map((item, i) => {
                const n = (/[A-Za-z0-9\s]/g).test(item) ? item.length / 2 : item.length;
                const L = n * 12 + baseWidth;
                if ((_x + L) > width) {
                    _x = gap + L;
                    _y += arrowHeight + paddingTop;
                } else {
                    _x += L
                };
                return {
                    value: item,
                    x: _x - L,
                    y: _y,
                    depth: i
                };
            });
        };
        const coordata = getCoorData(pathData);
        const nodes = group.selectAll('.polygon')
            .data(coordata)
            .enter()
            .append('g')
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .style('cursor', 'pointer');
        nodes.append('polygon')
            .attr('points', d => {
                const { value, depth } = d;
                const n = (/[A-Za-z0-9\s]/g).test(value) ? value.length / 2 : value.length;
                return getArrowPath([0, 0], n * 12 + baseWidth - gap, depth);
            })
            .attr('class', 'polygon')
            .style('fill', d => d.depth <= routerLength - maxDepth ? 'rgba(241, 79, 67, 0.8)' : 'rgba(0, 33, 64, 0.7)');
        nodes.append('text')
            .text(d => d.value)
            .attr('dx', d => d.depth === 0 ? gap : gap + 10)
            .attr('dy', (arrowHeight + fontSize * fontNum) / 2)
            .style('fill', '#e1e1e1');
        nodes.on('click', function (d) {
            typeof routerClick === 'function' && routerClick(d);
        });
        return nodes;
    }
    bindEvent(node) {
        const { nodeClick } = this.props;
        node.select('.tag')
            .on('click', function (d) {//eslint-disable-line
                typeof nodeClick === 'function' && nodeClick(d);
            });
        node.on('mouseover', function () {
            select(this)
                .select('._d3_anchor')
                .style('display', 'block');
            select(this)
                .select('._d3_model')
                .style('cursor', 'auto')
                .style('display', 'block');
        })
            .on('mouseout', function () {
                select(this)
                    .select('._d3_anchor')
                    .style('display', 'none');
                select(this)
                    .select('._d3_model')
                    .style('display', 'none');
            });
    }
    bindSiderbarEvent(siderbar) {
        const { siderbarClick } = this.props;
        siderbar.on('click', function (d) {
            typeof siderbarClick === 'function' && siderbarClick(d);
        });
    }
    bindScaleAndDrag(svg, group) {
        const Zoom = zoom()
            .scaleExtent([0.1, 100])
            .on('zoom', function () {
                const { x, y, k } = event.transform;
                group
                    .attr('transform', `translate(${x},${y}) scale(${k})`);
            });
        svg.call(Zoom);
    }
    componentDidMount() {
        this.drawInit(this.dom);
    }
    componentDidUpdate() {
        this.dom.innerHTML = '';
        this.drawInit(this.dom);
    }
    render() {
        const { style } = this.props;
        return (
            <div ref={dom => this.dom = dom} style={style} />
        );
    }
}
