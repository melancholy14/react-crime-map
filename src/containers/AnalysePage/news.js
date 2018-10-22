// @flow

import React from 'react';

import {
  Table, Tr, Th, Td,
} from '../../components';

const News = ({ news }: {
  news: Array<{
    id: string,
    sectionName: string,
    pillarName: string,
    webTitle: string,
    webUrl: string,
    webPublicationDate: string,
  }>
}) => (
  <div>
    {
      news && news.map(({id, sectionName, pillarName, webTitle, webUrl, webPublicationDate }) =>
        (<Table key={id}>
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
  </div>
);

export default News;