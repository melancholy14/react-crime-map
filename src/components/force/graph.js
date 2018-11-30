import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

import {
  width, height, force, updateGraph,
} from './utils';
import Node from './node';
import Link from './link';

export default class Graph extends React.Component {
  componentDidMount() {
    this.d3Graph = d3.select(ReactDOM.findDOMNode(this));
    force.on('tick', () => {
      this.d3Graph.call(updateGraph);
    });
  }

  componentDidUpdate() {
    const {
      nodes,
      links,
    } = this.props;

    force.nodes(nodes).links(links);

    force.start();
  }

  render() {
    const {
      nodes,
      links,
    } = this.props;

    const nodeEles = nodes.map(node => <Node data={node} key={node.key} />);
    const linkEles = links.map(link => <Link data={link} key={link.key} />);

    return (
      <svg width={width} height={height}>
        <g>
          { nodeEles }
          { linkEles }
        </g>
      </svg>
    );
  }
}
