import React from 'react';
import PropTypes from 'prop-types';
import css from './NewMessage.scss';

const NewMessage = props => {
  const { onSubmit } = props;

  const handleSend = e => {
    const newMessage = e.target.value;

    if (e.key == 'Enter') {
      onSubmit(newMessage);
    }
  };

  return (
    <input
      className={css.newMessageInput}
      type="text"
      onKeyPress={e => handleSend(e)}
    />
  );
};


NewMessage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};


export default NewMessage;
