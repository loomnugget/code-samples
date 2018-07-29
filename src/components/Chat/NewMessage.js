import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './NewMessage.scss';

class NewMessage extends Component {
  state = {
    message: ''
  }

  handleChange = e => this.setState({ message: e.target.value })

  handleSend = e => {
    const newMessage = e.target.value;

    if (e.key == 'Enter') {
      this.props.onSubmit(newMessage);
      this.setState({ message: '' });
    }
  };

  render () {

    return (
      <input
        value={this.state.message}
        className={css.newMessageInput}
        type="text"
        placeholder="New message..."
        onKeyPress={this.handleSend}
        onChange={this.handleChange}
      />
    );
  }

}


NewMessage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};


export default NewMessage;
