import React from 'react';
import PropTypes from 'prop-types';

import {
  Table, Tr, Th, Td,
} from '../../components';

const CrimeTable = ({ crimes }) => (
  <div>
    {
      crimes && crimes.map(({id, list}) => (<Table key={id}>
          {
            list.map(([ title, content ]) => <Tr key={title}>
              <Th>{ title }</Th>
              <Td>{ content }</Td>
            </Tr>)
          }
          </Table>
        ))
    }
  </div>
);

CrimeTable.propTypes = {
  crimes: PropTypes.array,
}

export default CrimeTable;