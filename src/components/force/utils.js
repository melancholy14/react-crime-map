import * as d3 from 'd3';

const width = 960;
const height = 500;

const force = (nodes, links) => d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(-1000))
  .force('link', d3.forceLink(links).distance(200))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('x', d3.forceX())
  .force('y', d3.forceY());

const enterNode = (selection) => {
  selection.select('circle')
    .attr('r', d => d.size).call(force.drag);

  selection.select('text')
    .attr('x', d => d.size + 5).attr('dy', '.35rem');
};

const updateNode = (selection) => {
  selection.attr('transform', d => `translate(${d.x},${d.y})`);
};

const enterLink = (selection) => {
  selection.attr('stroke-width', d => d.size);
};

const updateLink = (selection) => {
  selection.attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);
};

const updateGraph = (selection) => {
  selection.selectAll('.node').call(updateNode);
  selection.selectAll('.link').call(updateLink);
};

export {
  force,
  enterNode,
  updateNode,
  enterLink,
  updateLink,
  updateGraph,
};
