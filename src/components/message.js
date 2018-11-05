import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Modal from './modal';

const MessageDiv = styled.div`
  margin: 1rem;
  padding: 1rem 0.5rem;
`;

class Message extends React.PureComponent {
  static propTyeps = {
    message: PropTypes.string,
  }

  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  componentDidUpdate(prevProps) {
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