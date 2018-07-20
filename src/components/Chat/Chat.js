import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import actionCable from '../../cable';
import NewMessage from './NewMessage';
import css from './Chat.scss';
import PrimaryButton from '../Buttons/PrimaryButton';

class Chat extends Component {
  // constructor() {
  //   super();
  //   this.cable = '';
  // }

  // componentWillMount() {
  //   this.cable.subscribe();
  // }

  handleSendMessage = (message) => {
    this.cable.sendMessage(message);
  };

  handleSubscribe = () => {
    console.log(this.cable);
    this.cable = new actionCable();
    this.cable.subscribe();
  }

  render () {
    return (
      <div className={css.chat}>
        <div className={css.sidebar}></div>
        <PrimaryButton onClick={this.handleSubscribe} text="Connect" />
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

// Chat.propTypes = {
//   messages: PropTypes.object,
//   retrieveMessages: PropTypes.func.isRequired
// };

export default Chat;
