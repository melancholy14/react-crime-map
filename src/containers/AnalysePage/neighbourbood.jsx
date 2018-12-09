// @flow

import React from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

const Neighbourbood = React.memo(({ data = {} }: { data: Object }) => {
  const {
    init: {
      nodes = [],
      links = [],
    } = {},
    team: {
      nodes: teamNodes = [],
      links: teamLinks = [],
    } = {},
    events: {
      nodes: eventsNodes = [],
      links: eventsLinks = [],
    } = {},
    priorities: {
      nodes: prioritiesNodes = [],
      links: prioritiesLinks = [],
    },
  } = data;

  let width = window.innerWidth;
  if (width >= 768) {
    width = (width * 0.75) / 2;
  }
  width -= 35;

  console.log('width', width);

  return (
    <InteractiveForceGraph
      simulationOptions={{ height: width, width }}
      labelAttr="label"
      highlightDependencies
    >
      { nodes.map(({ id, label }) => <ForceGraphNode key={id} node={{ id, label }} fill="red" />) }
      { links.map(({ source, target }) => <ForceGraphLink key={`${source}_${target}`} link={{ source, target }} />) }
      { teamNodes.map(({ id, label }) => <ForceGraphNode key={id} node={{ id, label }} fill="blue" />) }
      { teamLinks.map(({ source, target }) => <ForceGraphLink key={`${source}_${target}`} link={{ source, target }} />) }
      { eventsNodes.map(({ id, label }) => <ForceGraphNode key={id} node={{ id, label }} fill="green" />) }
      { eventsLinks.map(({ source, target }) => <ForceGraphLink key={`${source}_${target}`} link={{ source, target }} />) }
      { prioritiesNodes.map(({ id, label }) => <ForceGraphNode key={id} node={{ id, label }} fill="yellow" />) }
      { prioritiesLinks.map(({ source, target }) => <ForceGraphLink key={`${source}_${target}`} link={{ source, target }} />) }
    </InteractiveForceGraph>);
});

export default Neighbourbood;
