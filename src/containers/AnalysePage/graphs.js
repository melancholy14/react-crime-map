// @flow

import React from 'react';

import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

import {
  GraphProps as Props,
} from '../../utils/types';

const Graphs = (props: Props) => {
  const {
    date,
    category,
    outcome,
  } = props;
  
  const width = window.innerWidth - 35;

  return (<div>
    { date && date.length > 0 && 
    <div>
      <p>The number of crimes per Date</p>
      <LineChart
        width={width}
        height={width}
        data={date}
      >
        <XAxis dataKey="date" />
        <YAxis type="number" yAxisId={0} />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="count" stroke="#ff7300" yAxisId={0} />
      </LineChart>
      </div>
    }
    { category && category.length > 1 &&
      <div>
        <p>The number of crimes per Category</p>
        <BarChart
          width={width}
          height={width}
          data={category}
        >
          <XAxis dataKey="category" />
          <YAxis type="number" yAxisId={0} />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar type="monotone" dataKey="count" fill="#387908" yAxisId={0} />
        </BarChart>
      </div>
    }
    { outcome && outcome.length > 0 &&
      <div>
        <p>The ratio of crimes per Outcome</p>
        <BarChart
          width={width}
          height={width}
          data={outcome}
        >
          <XAxis dataKey="outcome" />
          <YAxis type="number" yAxisId={0} />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar type="monotone" dataKey="count" fill="#38abc8" yAxisId={0} />
        </BarChart>
      </div>
    }
  </div>);
}

export default Graphs;
