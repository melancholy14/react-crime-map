// @flow

import React from 'react';
import type { ChildrenArray, Element } from 'react';

import styled from 'styled-components';

const TableDiv = styled.div`
  margin: 0.5rem auto;
  display: table;

  box-shadow: 1.5px 2px 1px 1px;
  border-radius: 0.5rem;
  width: -webkit-fill-available;
  padding: 0.5rem;
`;

const TrDiv = styled.div`
  display: table-row;
`;

const ThDiv = styled.div`
  display: table-cell;
  font-weight: 600;
  width: 4rem;
`;

const TdDiv = styled.div`
  display: table-cell;
`;

const Th = ({ children }: { children?: any }) => <ThDiv>{children}</ThDiv>;

Th.defaultProps = {
  children: null,
};

const Td = ({ children }: { children: any }) => <TdDiv>{children}</TdDiv>;

const Tr = ({
  children,
}: {
  children: ChildrenArray<Element<typeof Th | typeof Td>>
}) => <TrDiv>{children}</TrDiv>;

const Table = ({
  children,
}: {
  children: ChildrenArray<Element<typeof Tr>>
}) => <TableDiv>{children}</TableDiv>;

export {
  Table, Tr, Th, Td,
};
