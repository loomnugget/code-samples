import { connect } from 'react-redux';
import { getMessages } from '../../selectors/messageSelectors';
import { isConnecting, connectionOpen, connectionRejected, disconnected } from '../../selectors/websocketSelectors';
import { retrieveMessages } from '../../actions/messageActions';
import { createConnection, sendMessage } from '../../actions/websocketActions';
import Chat from './Chat';

const mapStateToProps = state => ({
  messages: getMessages(state),
  isConnecting: isConnecting(state),
  connectionOpen: connectionOpen(state),
  connectionRejected: connectionRejected(state),
  disconnected: disconnected(state)
});

const mapDispatchToProps = (dispatch) => {
  return {
    createConnection: () => dispatch(createConnection()),
    retrieveMessages: () => dispatch(retrieveMessages()),
    sendMessage: (message) => dispatch(sendMessage(message))
  };
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
