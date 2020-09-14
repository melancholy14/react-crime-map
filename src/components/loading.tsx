// @flow

import React from 'react';
import styled from 'styled-components';

import { PulseLoader } from 'react-spinners';

const LoadingDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: ${props => (props.loading ? 'block' : 'none')}

  & > div {
    position: absolute;
    top: 47.5%;
    left: 47.5%;
  }
`;

const Loading = ({ loading }: { loading: boolean }) => (
  <LoadingDiv loading={loading}>
    <PulseLoader
      color="#fff"
      loading={loading}
    />
  </LoadingDiv>
);

export default Loading;
