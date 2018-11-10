// @flow

import React from 'react';
import styled from 'styled-components';

const TableDiv = styled.div`
  margin: 0.5rem auto;
  display: table;

  box-shadow: 1.5px 2px 1px 1px;
  border-radius: 0.5rem;
  width: -webkit-fill-available;
  padding: 0.5rem;

  .tr {
    display: table-row;
  }

  .th {
    display: table-cell;
    font-weight: 600;
    width: 4rem;
  }

  .td {
    display: table-cell;
  }
`;

const Th = ({ children }: { children: any }) => (<div className="th">{ children }</div>);

const Td = ({ children }: { children: any }) => (<div className="td">{ children }</div>);

const Tr = ({ children }: { children: Array<any> }) => (<div className="tr">{ children }</div>);

const Table = ({ children }: { children: Array<typeof Tr> }) => (<TableDiv className="table">{ children }</TableDiv>);

export {
  Table,
  Tr, Th, Td,
};
