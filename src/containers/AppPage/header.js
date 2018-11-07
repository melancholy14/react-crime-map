// @flow

import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.header`
    order: 0;
    background: darkslateblue;
    color: yellow;
    line-height: 2rem;
    height: 4rem;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    text-align: center;
    position: relative;

    .title {
      text-align: center;
      font-size: larger;
      font-weight: bolder;
    }

    .email {
      text-align: right;
      padding: 0 1rem;
      font-size: small;
    }
`;

const Header = () => (<HeaderDiv>
  <div className="title">
    CRIME MAP
  </div>
  <div className="email">
    <span className="smaller">Contact me: melancholy8914@gmail.com</span>
  </div>
</HeaderDiv>);

export default Header;