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

  .modal-main {
    position: fixed;
    background: white;
    width: 75%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Modal = ({ title, show, onClose, children }) => (
  <ModalDiv className={`display-${show ? 'block' : 'none'}`}>
    <div class="main-title">{ title }</div>
    <div className="modal-main">
      { children }
    </div>
    <div className="footer">
      <button onClick={onClose}>Close</button>
    </div>
  </ModalDiv>
);

Modal.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any,
};

export default Modal;