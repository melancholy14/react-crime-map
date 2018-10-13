import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  Table, Tr, Th, Td,
} from '../../components';

const CrimeTableModal = ({ show, onClose, title, crimes }) => (
  <Modal
    show={show}
    onClose={onClose}
    title={title}
  >
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
  </Modal>
);

CrimeTableModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  crimes: PropTypes.array,
}

export default CrimeTableModal;