// @flow

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import type {
  HeaderProps as Props,
  HeaderState as State,
} from '../utils/types';

const HeaderDiv = styled.header`
    order: 0;
    background: darkslateblue;
    color: yellow;
    line-height: 2rem;
    // height: 2.5rem;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    text-align: center;
    position: relative;
    // display: initial;

    // @media screen and (min-width: 768px) {
    //   height: 4rem;
    //   display: initial;
    // }

    svg {
      margin: auto 0.5rem;
    }
`;

const Title = styled.div`
  // width: calc(100% - 11rem);
  text-align: center;
  font-size: larger;
  font-weight: bolder;

  // @media screen and (min-width: 768px) {
  //   width: initial;
  // }
`;

const InlineDiv = styled.div`
  display: inline;

  &:focus {
    outline: 0;
  }
`;

const Email = styled.div`
  width: 10rem;
  text-align: right;
  padding: 0 1rem 0 0;
  font-size: small;

  display: ${props => (props.show ? 'block' : 'none')};

  @media screen and (min-width: 768px) {
    width: initial;
    padding: 0 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default class Header extends React.PureComponent<Props, State> {
  constructor() {
    super();

    this.state = {
      toggle: false,
    };
  }

  toggle = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  }

  render() {
    const { toggle } = this.state;

    return (
      <HeaderDiv>
        <Title>
          CRIME MAP
          <InlineDiv onClick={this.toggle} role="button" tabIndex={0} onKeyPress={this.toggle}>
            <FontAwesomeIcon icon={faExclamationCircle} size="sm" />
          </InlineDiv>
        </Title>
        <Email show={toggle}>
          <span className="smaller">
            <a href="mailto:melancholy8914@gmail.com">melancholy8914@gmail.com</a>
          </span>
        </Email>
      </HeaderDiv>);
  }
}
