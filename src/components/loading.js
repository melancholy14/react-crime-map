// @flow

import React from 'react';
import styled from 'styled-components';

import Modal from './modal';

import iu from '../assets/iu.gif'
import boa from '../assets/boa.gif';

const LoadingDiv = styled.div` 
  img {
    width: 100%;
  }
`;

const Loading = ({ loading }: { loading: boolean }) => (
  <Modal
    title="Loading..."
    show={loading}
  >
    <LoadingDiv>
      <img src={Math.round(Math.random()) % 2 === 0 ? boa : iu} alt="loading..." />
    </LoadingDiv>
  </Modal>
);

export default Loading;