import React from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

const ForceGraph = () => (
  <InteractiveForceGraph
    simulationOptions={{ height: 300, width: 300 }}
    labelAttr="label"
    onSelectNode={(node) => console.log(node)}
    highlightDependencies
  >
    <ForceGraphNode node={{ id: 'first-node', label: 'First node' }} fill="red" />
    <ForceGraphNode node={{ id: 'second-node', label: 'Second node' }} fill="green" />
    <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} strokeWidth={2} />
  </InteractiveForceGraph>
);

export default ForceGraph;
