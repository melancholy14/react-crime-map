// @flow

import React from 'react';
import styled from 'styled-components';

import {
  Table, Tr, Th, Td,
} from '../../components';

import {
  NewsProps as Props,
} from '../../utils/types';

const NewsStyle = styled.div`
  .table {
    width: 90%;

    @media screen and (min-width: 768px) {
      display: inline-table;
      width: 45%;
      margin: 0.5rem;
    }
  }
  .tr {
    line-height: 2rem;

    .th, .td {
      padding: 0 0.5rem;
      font-size: smaller;
    }
  }
`;

const News = React.memo(({ news }: Props) => (
  <NewsStyle>
    {
      news && news.map(({
        id, sectionName, pillarName, webTitle, webUrl, webPublicationDate,
      }) => (
        <Table key={id}>
          <Tr>
            <Th>Date</Th>
            <Td>{ new Date(webPublicationDate).toLocaleDateString() }</Td>
          </Tr>
          <Tr>
            <Th>Section</Th>
            <Td>{ sectionName }</Td>
          </Tr>
          <Tr>
            <Th>Pillar</Th>
            <Td>{ pillarName }</Td>
          </Tr>
          <Tr>
            <Th>Title</Th>
            <Td><a href={webUrl} target="_new">{ webTitle }</a></Td>
          </Tr>
        </Table>
      ))
    }
  </NewsStyle>
));

export default News;
