// @flow

import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

import {
  Table, Tr, Th, Td,
} from '../../components';

import type {
  NewsProps as Props,
} from '../../utils/types';

const NewsStyle = styled.div`
  & > div {
    width: 95%;
    margin: auto;

    @media screen and (min-width: 768px) {
      display: inline-table;
      width: 45%;
      margin: 0.5rem;
    }

    & > div {
      line-height: 2rem;
  
      & > div {
        padding: 0 0.5rem;
        font-size: smaller;
      }
    }
  }
`;

const News = ({ news }: Props) => (
  <NewsStyle>
    {
      news && news.map(({
        id, sectionName, pillarName, webTitle, webUrl, webPublicationDate,
      }) => (
        <Table key={id}>
          <Tr>
            <Th>Date</Th>
            <Td>{ format(webPublicationDate, 'Do MMM YYYY HH:mm') }</Td>
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
);

export default News;
