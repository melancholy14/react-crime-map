// @flow

import React from 'react';
import styled from 'styled-components';

import Modal from './modal';

const MessageDiv = styled.div`
  margin: 1rem;
  padding: 1rem 0.5rem;
`;

type Props = {
  message: string,
};

class Message extends React.PureComponent<Props, {
  show: boolean,
}> {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  componentDidUpdate(prevProps: Props) {
    const {
      message,
    } = this.props;

    if (prevProps.message !== message) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    const {
      show,
    } = this.state;

    this.setState({ show: !show });
  }

  render() {
    const {
      message,
    } = this.props;

    const {
      show,
    } = this.state;

    return (
      <Modal
        title="Something goes wrong"
        show={show}
        onClose={this.toggleModal}
      >
        <MessageDiv>
          {message}
        </MessageDiv>
      </Modal>);
  }
}

export default Message;
