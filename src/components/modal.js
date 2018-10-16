import React from 'react';
import PropTypes from 'prop-types';
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
  }

  .modal-main {
    position: fixed;
    background: white;
    width: 100%;
    height: calc(50% - 6rem);
    overflow: auto;
    top: 10rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .modal-footer {
    position: fixed;
    top: calc(50% - 6rem + 10rem);
    height: 3rem;
    background-color: white;
    width: 100%;
    line-height: 3rem;
    vertical-align: middle;
    text-align: center;
    border-top: 1px solid black;
    box-sizing: border-box;

    .close {
      background-color: black;
      color: white;
      font-weight: bolder;
      padding: 0.5rem 1rem;
      border: 0;
    }
  }
`;

const Modal = ({ title, show, onClose, showFooter = true, children }) => (
  <ModalDiv className={`display-${show ? 'block' : 'none'}`}>
    <div className="modal-title">{ title }</div>
    <div className="modal-main">
      { children }
    </div>
    { showFooter &&
    <div className="modal-footer">
      <button className="close" onClick={onClose}>Close</button>
    </div> }
  </ModalDiv>
);

Modal.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  showFooter: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any,
};

export default Modal;