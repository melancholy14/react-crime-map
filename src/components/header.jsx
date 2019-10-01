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
    vertical-align: middle;
    padding: 0;
    margin: 0;
    text-align: center;
    position: relative;

    svg {
      margin: auto 0.5rem;
    }
`;

const Title = styled.div`
  text-align: center;
  font-size: larger;
  font-weight: bolder;
`;

const InlineDiv = styled.div`
  display: inline;

  &:focus {
    outline: 0;
  }
`;

const Info = styled.div`
  text-align: left;
  padding: 0 1rem;

  font-size: x-small;
  line-height: 1rem;

  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;

  @media screen and (min-width: 768px) {
    font-size: small;
    line-height: 1.5rem;
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
        <Info show={toggle}>
          <div>
            <span>This website shows the criminal information on the map. The data is retreived from </span>
            <a href="https://data.police.uk" target="_blank" rel="noopener noreferrer">https://data.police.uk</a>
          </div>
          <div>
            <span>If you have query, please email me, </span>
            <a href="mailto:melancholy8914@gmail.com">melancholy8914@gmail.com</a>
          </div>
        </Info>
      </HeaderDiv>);
  }
}
