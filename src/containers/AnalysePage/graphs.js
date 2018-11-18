// @flow

import React from 'react';
import styled from 'styled-components';

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
  
  let width = window.innerWidth + 24;
  if (width >= 1024) {
    width = width / 3;
  } else if (width >= 768) {
    width = width / 2;
  }
  width = width - 35 - 12;

  return (<div>
    { date && date.length > 0 && 
    <StyledGraph>
      <p>Number of date crimes</p>
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
    </StyledGraph>
    }
    { category && category.length > 1 &&
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
          <CartesianGrid stroke="#f5f5f5" />
          <Bar type="monotone" dataKey="count" fill="#387908" yAxisId={0} />
        </BarChart>
      </StyledGraph>
    }
    { outcome && outcome.length > 0 &&
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
          <CartesianGrid stroke="#f5f5f5" />
          <Bar type="monotone" dataKey="count" fill="#38abc8" yAxisId={0} />
        </BarChart>
      </StyledGraph>
    }
  </div>);
}

export default Graphs;
