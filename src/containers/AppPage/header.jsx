// @flow

import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.header`
    order: 0;
    background: darkslateblue;
    color: yellow;
    line-height: 2rem;
    height: 2.5rem;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    text-align: center;
    position: relative;
    display: flex;

    @media screen and (min-width: 768px) {
      height: 4rem;
      display: initial;
    }

    .title {
      width: calc(100% - 11rem);
      text-align: center;
      font-size: larger;
      font-weight: bolder;

      @media screen and (min-width: 768px) {
        width: initial;
      }
    }

    .email {
      width: 10rem;
      text-align: right;
      padding: 0 1rem 0 0;
      font-size: small;

      @media screen and (min-width: 768px) {
        width: initial;
        padding: 0 1rem;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
`;

const Header = React.memo(() => (
  <HeaderDiv>
    <div className="title">
      CRIME MAP
    </div>
    <div className="email">
      <span className="smaller">
        <a href="mailto:melancholy8914@gmail.com">melancholy8914@gmail.com</a>
      </span>
    </div>
  </HeaderDiv>));

export default Header;
