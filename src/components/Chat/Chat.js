import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import NewMessage from './NewMessage';
import css from './Chat.scss';

class Chat extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired,
    isConnecting: PropTypes.bool.isRequired,
    connectionOpen: PropTypes.bool.isRequired,
    connectionRejected: PropTypes.bool.isRequired,
    disconnected: PropTypes.bool.isRequired,
    createConnection: PropTypes.func.isRequired,
    retrieveMessages: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { createConnection, retrieveMessages } = this.props;
    retrieveMessages();
    createConnection();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  handleSendMessage = (message) => {
    this.props.sendMessage(message);
  };

  renderMessages() {
    const { messages } = this.props;
    if (!messages) return null;

    return messages.map(message => {
      return (
        <Message key={message.id} message={message.content}/>
      );
    });
  }

  render () {
    return (
      <div className={css.chat}>
        <div className={css.messages}>
          {this.renderMessages()}
          <div ref={el => this.messagesEnd = el}/>
        </div>
        <NewMessage onSubmit={this.handleSendMessage}/>
      </div>
    );
  }
}

export default Chat;
