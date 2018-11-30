import React from 'react';
import styled from 'styled-components';

import Graph from './graph';
import { width, height } from './utils';

const ForceDiv = styled.div`
  .update {
    color: #888888;
    position:absolute;
    top: 10px;
    left: 10px;
    padding: 5px 10px;
    margin: 10px;
    cursor: pointer;
    border: 1px solid #999999;
    border-radius: 3px;
  }

  .node circle {
    fill: #888888;
    stroke: #fff;
    stroke-width: 2px;
  }

  .node text {
    fill: #888888;
    stroke: none;
    font-size: .6em;
  }

  .link {
    stroke: #cccccc;
    stroke-opacity: .6;
  }
`;

export default class Force extends React.Component {
  constructor() {
    super();

    this.state = {
      nodes: [],
      links: [],
    };
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    const {
      nodes,
    } = this.state;

    // this.setState(randomData(nodes, width, height));
    this.setState({
      nodes: [{key: 12, size: 9, x: 494, y: 225},
        {key: 13, size: 6, x: 376, y: 228},
        {key: 14, size: 9, x: 447, y: 240},
        {key: 1, size: 10, x: 467, y: 261},
        {key: 2, size: 4, x: 331, y: 243},
        {key: 15, size: 10, x: 624, y: 270},
        {key: 27, size: 5, x: 490, y: 240},
        {key: 5, size: 4, x: 409, y: 266},
        {key: 30, size: 8, x: 369, y: 248},
        {key: 0, size: 9, x: 364, y: 250},
        {key: 22, size: 5, x: 465, y: 239},
        {key: 29, size: 7, x: 613, y: 257},
        {key: 24, size: 5, x: 428, y: 225},
        {key: 21, size: 7, x: 335, y: 227},
        {key: 25, size: 5, x: 446, y: 232},
        {key: 28, size: 6, x: 411, y: 243},
        {key: 26, size: 5, x: 361, y: 266}],
      links: [{source: 11, target: 14, key: "11,14", size: 1},
      {source: 15, target: 0, key: "15,0", size: 2},
      {source: 9, target: 15, key: "9,15", size: 2},
      {source: 15, target: 4, key: "15,4", size: 2},
      {source: 10, target: 14, key: "10,14", size: 3},
      {source: 12, target: 8, key: "12,8", size: 3},
      {source: 4, target: 0, key: "4,0", size: 3},
      {source: 7, target: 7, key: "7,7", size: 1},
      {source: 1, target: 16, key: "1,16", size: 3},
      {source: 14, target: 1, key: "14,1", size: 2},
      {source: 5, target: 0, key: "5,0", size: 1},
      {source: 3, target: 8, key: "3,8", size: 1},
      {source: 6, target: 3, key: "6,3", size: 2},
      {source: 9, target: 2, key: "9,2", size: 3},
      {source: 10, target: 3, key: "10,3", size: 3},
      {source: 12, target: 2, key: "12,2", size: 2},
      {source: 4, target: 7, key: "4,7", size: 3},
      {source: 0, target: 14, key: "0,14", size: 3},
      {source: 3, target: 13, key: "3,13", size: 2}]
    })
  }

  render() {
    const {
      nodes,
      links,
    } = this.state;

    return (
      <div>
        <ForceDiv>
          <button className="update" onClick={this.updateData}>update</button>
          <Graph nodes={nodes} links={links} />
        </ForceDiv>
      </div>
    )
  }
}