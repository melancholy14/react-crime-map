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
    right: 0;
    left: 0;
    top: 7rem;
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
    min-height: 10rem;
    // height: calc(50% - 6rem);
    overflow: auto;
    top: 4.5rem;
    left: 0;
    right: 0;

    @media screen and (min-width: 426px) {
      top: 10rem;
    }

    &.fixed-bottom {
      bottom: 7.5rem;

      @media screen and (min-width: 426px) {
        bottom: 10rem;
      }
    }
  }

  .modal-footer {
    position: fixed;
    background-color: white;
    padding: 1rem;
    right: 0;
    left: 0;
    text-align: right;

    bottom: 4rem;
    @media screen and (min-width: 426px) {
      bottom: 7rem;
    }
    
    border-top: 1px dotted black;

    .close {
      border: none;
      font-size: large;
      background: transparent;
    }
  }
`;

const Modal = ({ title, show, onClose, fixedBottom = false, children }: {
  title?: string,
  show: boolean,
  onClose?: Function,
  fixedBottom?: boolean,
  children: any,
}) => (
  <ModalDiv className={`display-${show ? 'block' : 'none'}`}>
    { title &&
    <div className="modal-title">
      <div className="title">{ title }</div>
      { onClose && <button className="close" onClick={onClose}>X</button> }
    </div> }
    <div className={`modal-main ${fixedBottom ? 'fixed-bottom' : ''}`}>
      { children }
    </div>
    {
      !title && onClose && fixedBottom && (<div className="modal-footer">
        { onClose && <button className="close" onClick={onClose}>Close</button> }
      </div>)
    }
  </ModalDiv>
);

export default Modal;