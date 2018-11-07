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

  .modal-title {
    position: fixed;
    top: 7rem;
    width: 100%;
    height: 3rem;
    background-color: black;
    color: white;
    vertical-align: middle;
    line-height: 3rem;
    text-align: center;

    .title {
      display: inline-block;
      width: calc(100% - 2rem);
    }

    .close {
      display: inline-block;
      width: 2rem;
      font-size: large;
      font-weight: bold;    
      border: 0;
      background-color: black;
      color: white;
    }
  }

  .modal-main {
    position: fixed;
    background: white;
    width: 100%;
    min-height: 10rem;
    // height: calc(50% - 6rem);
    overflow: auto;
    top: 10rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Modal = ({ title, show, onClose, children }: {
  title: string,
  show: boolean,
  onClose?: Function,
  children: any,
}) => (
  <ModalDiv className={`display-${show ? 'block' : 'none'}`}>
    <div className="modal-title">
      <div className="title">{ title }</div>
      { onClose && <button className="close" onClick={onClose}>X</button> }
    </div>
    <div className="modal-main">
      { children }
    </div>
  </ModalDiv>
);

export default Modal;