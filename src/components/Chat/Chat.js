import React, { Component } from 'react';
import actionCable from '../../cable';
import NewMessage from './NewMessage';
import css from './Chat.scss';

class Chat extends Component {
  constructor() {
    super();
    this.cable = new actionCable();
  }

  componentWillMount() {
    this.cable.subscribe();
  }

  handleSendMessage = (message) => {
    this.cable.send_message(message);
  };

  render () {
    return (
      <div className={css.chat}>
        <div className={css.sidebar}></div>

        <div className={css.main}>
          <div className={css.messages}>

          </div>
          
          <div className={css.newMessage}>
            <NewMessage onSubmit={this.handleSendMessage}/>
          </div>
        </div>

      </div>
    );
  }
}

export default Chat;
