import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewMessage from './NewMessage';
import css from './Chat.scss';

class Chat extends Component {
  static propTypes = {
    isConnecting: PropTypes.bool.isRequired,
    createConnection: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.createConnection();
  }

  handleSendMessage = (message) => {
    this.props.sendMessage(message);
  };

  render () {
    return (
      <div className={css.chat}>
        <NewMessage onSubmit={this.handleSendMessage}/>
      </div>
    );
  }
}

export default Chat;
