// @flow

import React from 'react';
import styled from 'styled-components';

import { HashLoader } from 'react-spinners';

const LoadingDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;

  & > div {
    margin: 15rem auto;
  }
`;

const Loading = ({ loading }: { loading: boolean }) => (
  <LoadingDiv className={`display-${loading ? 'block' : 'none'}`}>
    <HashLoader
      color="#fff"
      loading={loading}
    />
  </LoadingDiv>
);

export default Loading;