import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

import { enterNode, updateNode } from './utils';

export default class Node extends React.Component {
  componentDidMount() {
    const {
      data,
    } = this.props;

    this.d3Node = d3.select(ReactDOM.findDOMNode(this)).datum(data).call(enterNode);
  }

  componentDidUpdate() {
    const {
      data,
    } = this.props;

    this.d3Node.datum(data).call(updateNode);
  }

  render() {
    const {
      data: {
        key,
      } = {},
    } = this.props;

    return (
      <g className="node">
        <circle />
        <text>{key}</text>
      </g>
    );
  }
}
