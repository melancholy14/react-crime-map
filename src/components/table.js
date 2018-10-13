import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableDiv = styled.div`
  margin: 0.5rem auto;
  display: table;

  box-shadow: 3px 3px 1px 1px;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  .tr {
    display: table-row;
  }

  .th {
    display: table-cell;
    font-weight: 600;
  }

  .td {
    display: table-cell;
  }
`;

const Table = ({ children }) => (<TableDiv>{ children }</TableDiv>);
Table.propTypes = {
  children: PropTypes.any,
};

const Tr = ({ children }) => (<div className="tr">{ children }</div>);
Tr.propTypes = {
  children: PropTypes.any,
};

const Th = ({ children }) => (<div className="th">{ children }</div>);
Th.propTypes = {
  children: PropTypes.any,
};

const Td = ({ children }) => (<div className="td">{ children }</div>);
Td.propTypes = {
  children: PropTypes.any,
};

export {
  Table,
  Tr, Th, Td,
};
