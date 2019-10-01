// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { Modal } from '../../components';

import isMobileFunc from './selectors';

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
  padding: 0 0.5rem;

  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;


  font-size: x-small;
  line-height: 1rem;

  @media screen and (min-width: 768px) {
    font-size: small;
    line-height: 1.5rem;
  }
`;

const Message = styled.div`
  color: ${props => (props.color ? props.color : 'inherit')};
  padding: 0.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

class Header extends React.PureComponent<Props, State> {
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

  renderInfo = color => (
    <Message color={color}>
      <div>
        <span>This website shows the criminal information on the map.</span>
        <span>The data is retreived from </span>
        <a href="https://data.police.uk" target="_blank" rel="noopener noreferrer">https://data.police.uk</a>
      </div>
      <div>
        <span>If you have any query, please email me, </span>
        <a href="mailto:melancholy8914@gmail.com">melancholy8914@gmail.com</a>
      </div>
    </Message>
  );

  render() {
    const { toggle } = this.state;
    const { isMobile } = this.props;

    return (
      <HeaderDiv>
        <Title>
          CRIME MAP
          <InlineDiv onClick={this.toggle} role="button" tabIndex={0} onKeyPress={this.toggle}>
            <FontAwesomeIcon icon={faExclamationCircle} size="sm" />
          </InlineDiv>
        </Title>
        { isMobile && <Modal title="Information" show={toggle} onClose={this.toggle}>{ this.renderInfo('black') }</Modal> }
        { !isMobile && <Info show={toggle}>{ this.renderInfo() }</Info> }
      </HeaderDiv>);
  }
}

const mapStateToProps = () => ({
  isMobile: isMobileFunc(),
});

export default connect(mapStateToProps)(Header);
