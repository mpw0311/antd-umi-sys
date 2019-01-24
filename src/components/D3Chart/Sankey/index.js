import { PureComponent } from 'react';
import { select, event, drag } from 'd3';
/*eslint-disable-next-line*/
import { sankey, sankeyLeft, sankeyRight, sankeyCenter, sankeyJustify, sankeyLinkHorizontal } from 'd3-sankey';
export default class SankeyChart extends PureComponent {
    static defaultProps = {
        data: {},
        width: 900,
        height: 900,
        nodeWidth: 80,
        nodePadding: 10,
        style: {},
        nodeColor: '#1F90E2',
        pathColor: '#35ad5b',
        fontColor: '#fff',
        fontSize: 12,
        gridPading: {
            top: 10,
            right: 80,
            bottom: 10,
            left: 10
        },
    };
    renderInit(dom) {
        const {
            data,
            width,
            height,
            nodeWidth,
            nodePadding,
            gridPading
        } = this.props;
        const svg = select(dom)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('transform', `translate(${gridPading.left},${gridPading.top})`);
        const Sankey = sankey()
            .nodeWidth(nodeWidth)
            .nodePadding(nodePadding)
            .size([width - gridPading.left - gridPading.right, height - gridPading.top - gridPading.bottom])
            .nodeAlign(sankeyJustify);
        // const path = Sankey.links();
        const { nodes, links } = Sankey(data);
        /*eslint-disable-next-line */
        const Nodes = this.renderNode(svg, nodes);
        /*eslint-disable-next-line */
        const Links = this.renderLink(svg, links);
        // this.dragmove(path, Nodes, Links);
    }
    renderNode(svg, nodes) {
        const {
            nodeColor,
            nodePadding,
            fontSize
        } = this.props;
        const Nodes = svg.append('g')
            .selectAll('.node')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${d.x0},${d.y0})`);

        Nodes.append('rect')
            // .attr("x", d => d.x0)
            // .attr("y", d => d.y0)
            .attr("height", d => d.y1 - d.y0)
            .attr("width", d => d.x1 - d.x0)
            .attr("fill", nodeColor);
        Nodes.append('text')
            .text(d => d.name)
            .attr('dx', nodePadding)
            .attr('dy', d => (d.y1 - d.y0 - fontSize) / 2)
            .style('fill', '#333');
        return Nodes;
    }
    renderLink(svg, links) {
        const {
            pathColor,
        } = this.props;
        const Links = svg.append('g')
            .selectAll('path')
            .data(links)
            .enter()
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', pathColor)
            .attr('stroke-opacity', 0.4)
            .attr('d', sankeyLinkHorizontal())
            .attr('stroke-width', d => d.width)
            .attr('id', (d, i) => `link${i}`);
        return Links;
    }
    dragmove(path, Nodes, Links) {//eslint-disable-line
        const { width, height } = this.props;
        const Drag = drag()
            .on("start", function () {
            })
            .on("drag", function (d) {
                select(this)
                    .attr('transform', `translate(${d.x = Math.max(0, Math.min(width - d.x1 + d.x0, event.x))},${d.y = Math.max(0, Math.min(height - d.y1 + d.y0, event.y))})`);
            });
        Nodes.call(Drag);
    }
    componentDidMount() {
        this.renderInit(this.dom);
    }
    render() {
        const { style } = this.props;
        return (<div ref={dom => this.dom = dom} style={style} />);
    }
} 