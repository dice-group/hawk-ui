/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';
import D3 from 'd3';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const TreeComponent = React.createClass({
    componentWillReceiveProps: function(newProps) {
        this.setState({data: newProps.data});
    },
    componentWillUpdate: function(nextProps, nextState) {
        if(nextState.data && nextState.data.hasOwnProperty('label')) {
            var data = nextState.data;
            this.createTree(data);
        }
    },
    createTree: function(data) {
        var container = this.getDOMNode();
        container.innerHTML = '';
        var totalNodes = 0;
        var maxLabelLength = 0;
        var options = {
            nodeRadius: 5,
            fontSize: 12
        };
        this.visitTree(data, function(d) {
            totalNodes++;
            maxLabelLength = Math.max(d.label.length, maxLabelLength);
        }, function(d) {
            return d.children && d.children.length > 0 ? d.children : null;
        });
        var size = {
            width: container.offsetWidth > 500 ? container.offsetWidth : (screen.width * 0.7),
            height: totalNodes * 30
        };
        var tree = D3.layout.tree()
            .sort(null)
            .size([size.height, size.width - maxLabelLength * options.fontSize])
            .children(function(d) {
                return (!d.children || d.children.length === 0) ? null : d.children;
            });

        var nodes = tree.nodes(data);
        var links = tree.links(nodes);

        var layoutRoot = D3.select(container)
            .append('svg:svg').attr('width', size.width).attr('height', size.height)
            .append('svg:g')
            .attr('class', 'container')
            .attr('transform', 'translate(' + maxLabelLength + ',0)');

        var link = D3.svg.diagonal()
            .projection(function(d)
            {
                return [d.y, d.x];
            });

        layoutRoot.selectAll('path.link')
            .data(links)
            .enter()
            .append('svg:path')
            .attr('class', 'link')
            .attr('d', link);

        var nodeGroup = layoutRoot.selectAll('g.node')
            .data(nodes)
            .enter()
            .append('svg:g')
            .attr('class', 'node')
            .attr('transform', function(d)
            {
                return 'translate(' + d.y + ',' + d.x + ')';
            });

        nodeGroup.append('svg:circle')
            .attr('class', 'node-dot')
            .attr('r', options.nodeRadius);

        nodeGroup.append('svg:text')
            .attr('text-anchor', function(d)
            {
                return d.children ? 'end' : 'start';
            })
            .attr('dx', function(d)
            {
                var gap = 2 * options.nodeRadius;
                return d.children ? -gap : gap;
            })
            .attr('dy', 3)
            .text(function(d)
            {
                return d.label;
            });
    },
    visitTree: function(parent, visitFn, childrenFn) {
        if (!parent) { return; }

        visitFn(parent);

        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                this.visitTree(children[i], visitFn, childrenFn);
            }
        }
    },
    render: Template,
});

export default TreeComponent;
