import React from 'react';
import PropTypes from 'prop-types';
import css from './Message.scss';

const Message = props => {
  const { message } = props;
  const displayText = message || 'This is a test message.';

  return (
    <div className={css.message}>
      <span className={css.text}>{displayText}</span>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string
};

export default Message;
