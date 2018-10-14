import React from 'react';
import PropTypes from 'prop-types';

import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const Graphs = ({ date, category, outcome }) => {
  const width = window.innerWidth - 35;

  return (<div>
    { date && <p>The number of crimes per Date</p> }
    { date && <LineChart
      width={width}
      height={width}
      data={date}
    >
      <XAxis dataKey="date" />
      <YAxis type="number" yAxisId={0} />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="count" stroke="#ff7300" yAxisId={0} />
    </LineChart> }
    { category && <p>The number of crimes per Category</p> }
    { category && <BarChart
      width={width}
      height={width}
      data={category}
    >
      <XAxis dataKey="category" />
      <YAxis type="number" yAxisId={0} />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar type="monotone" dataKey="count" fill="#387908" yAxisId={0} />
    </BarChart> }
    { outcome && <p>The ratio of crimes per Outcome</p> }
    { outcome && <BarChart
        width={width}
        height={width}
        data={outcome}
      >
        <XAxis dataKey="outcome" />
        <YAxis type="number" yAxisId={0} />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar type="monotone" dataKey="count" fill="#38abc8" yAxisId={0} />
      </BarChart> }
  </div>);
}

Graphs.propTypes = {
  date: PropTypes.array,
  category: PropTypes.array,
  outcome: PropTypes.array,
}

export default Graphs;
