// @flow

import React from 'react';
import styled from 'styled-components';

import {
  LineChart, Line,
  BarChart, Bar,
  // ScatterChart, Scatter,
  XAxis, YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

import {
  GraphProps as Props,
} from '../../utils/types';

const StyledGraph = styled.div`
  display: inline-block;
  padding: 0 0.5rem;
`;

const Graphs = (props: Props) => {
  const {
    graph: {
      date,
      category,
      outcome,
    } = {},
  } = props;
  
  let width = window.innerWidth;
  if (width >= 768) {
    width = (width * 0.85) / 2;
  }
  width = width - 35;
  
  return (<div>
    { date && 
    <StyledGraph>
      <p>Number of crimes by date</p>
      <LineChart
        width={width}
        height={width}
        data={date}
      >
        <XAxis dataKey="date" />
        <YAxis type="number" yAxisId={0} />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="basis" dataKey="count" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </StyledGraph>
    }
    { category &&
      <StyledGraph>
        <p>Number of crimes by category</p>
        <BarChart
          width={width}
          height={width}
          data={category}
        >
          <XAxis dataKey="category" />
          <YAxis type="number" yAxisId={0} />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar legendType="line" dataKey="count" fill="#387908" yAxisId={0} />
        </BarChart>
      </StyledGraph>
    }
    { outcome &&
      <StyledGraph>
        <p>Number of crimes by outcome</p>
        <BarChart
          width={width}
          height={width}
          data={outcome}
        >
          <XAxis dataKey="outcome" />
          <YAxis type="number" yAxisId={0} />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar legendType="circle" dataKey="count" fill="#38abc8" yAxisId={0} />
        </BarChart>
      </StyledGraph>
    }
    {/* <StyledGraph>
      <p>Demo</p>
      <BarChart
        width={width}
        height={width}
        data={multiple}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="category" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="outcome" fill="#82ca9d" />
      </BarChart>
    </StyledGraph> */}
  </div>);
}

export default Graphs;
