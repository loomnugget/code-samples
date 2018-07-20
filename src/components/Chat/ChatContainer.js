import { connect } from 'react-redux';
import { retrieveMessages } from '../../actions/messageActions';
import Chat from './Chat';

const mapStateToProps = state => ({
  messages: state.messages.results
});

const mapDispatchToProps = (dispatch) => ({
  retrieveMessages: () => dispatch(retrieveMessages())
});

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
