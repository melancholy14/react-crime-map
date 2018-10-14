import React from 'react';
import PropTypes from 'prop-types';

import {
  Table, Tr, Th, Td,
} from '../../components';

const News = ({ news }) => (
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

News.propTypes = {
  crimes: PropTypes.array,
}

export default News;