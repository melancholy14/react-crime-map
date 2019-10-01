// @flow

import React from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const ModalTitle = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 4.5rem;
  height: 3rem;
  background-color: black;
  color: white;
  vertical-align: middle;
  line-height: 3rem;
  text-align: center;

  @media screen and (min-width: 426px) {
    top: 7rem;
  }

  @media screen and (min-width: 769px) {
    right: 10%;
    left: 10%;
  }

  .close {
  }
`;

const Title = styled.div`
  display: inline-block;
  width: calc(100% - 2rem);
`;

const X = styled.button`
  display: inline-block;
  width: 2rem;
  font-size: large;
  font-weight: bold;    
  border: 0;
  background-color: black;
  color: white;
`;

const ModalMain = styled.div`
  position: fixed;
  background: white;
  min-height: 10rem;
  overflow: auto;
  top: 7.5rem;
  left: 0;
  right: 0;
  bottom: ${props => (props.fixed ? '6.5rem' : 'initial')};
  
  @media screen and (min-width: 426px) {
    top: 10rem;
    bottom: ${props => (props.fixed ? '10em' : 'initial')}
  }

  @media screen and (min-width: 769px) {
    right: 10%;
    left: 10%;
  }
`;

const ModalFooter = styled.div`
  position: fixed;
  background-color: white;
  padding: 0.5rem;
  right: 0;
  left: 0;
  text-align: right;

  bottom: 4rem;
  border-top: 1px dotted black;

  @media screen and (min-width: 426px) {
    bottom: 6.5rem;
    padding: 1rem;
  }

  @media screen and (min-width: 769px) {
    right: 10%;
    left: 10%;
  }
`;

const Close = styled.button`
  border: none;
  font-size: large;
  background: transparent;
`;

const Modal = ({
  title, show, onClose, fixedBottom = false, children,
}: {
  title?: string,
  show: boolean,
  onClose?: Function,
  fixedBottom?: boolean,
  children: any,
}) => (
  <ModalDiv show={show}>
    { title && (
    <ModalTitle>
      <Title>{ title }</Title>
      { onClose && !fixedBottom && <X type="button" onClick={onClose}>X</X> }
    </ModalTitle>) }
    <ModalMain fixed={fixedBottom}>
      { children }
    </ModalMain>
    {
      onClose && fixedBottom && (
      <ModalFooter>
        { onClose && <Close type="button" onClick={onClose}>Close</Close> }
      </ModalFooter>)
    }
  </ModalDiv>
);

Modal.defaultProps = {
  title: null,
  onClose: null,
  fixedBottom: false,
};

export default Modal;
