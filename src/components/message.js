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
    if (prevProps.message !== this.props.message) {
      this.toggleModal();
    }
  }

  toggleModal = () => this.setState({ show: !this.state.show })

  render() {
    return (<Modal
      title="Something goes wrong"
      show={this.state.show}
      onClose={this.toggleModal}
      >
        <MessageDiv>
          {this.props.message}
        </MessageDiv>
      </Modal>);
  }
}

export default Message;