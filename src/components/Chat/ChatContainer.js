import { connect } from 'react-redux';
import { getResults, isConnecting, connectionOpen, connectionFailed, disconnected } from '../../selectors/websocketSelectors';
import { retrieveMessages } from '../../actions/messageActions';
import { createConnection, sendMessage } from '../../actions/websocketActions';
import Chat from './Chat';

const mapStateToProps = state => ({
  messages: state.messages.results,
  results: getResults(state),
  isConnecting: isConnecting(state),
  connectionOpen: connectionOpen(state),
  connectionFailed: connectionFailed(state),
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
