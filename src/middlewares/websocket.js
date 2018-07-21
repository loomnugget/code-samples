import actionCable from '../cable';
import * as actions from '../actions/websocketActions';
const cable = new actionCable();
console.log('cable', cable);

export default () => next => action => {
  if (action.type !== "websocket") return next(action);

  const connected = () => next(actions.ready());
  const disconnected = () => next(actions.disconnected());
  const rejected = () => next(actions.failed());
  const messageReceived = () => next(actions.messageReceived(action.payload));

  if (action.request_type === actions.CREATE_WEBSOCKET_CONNECTION) {
    cable.subscribe(connected, disconnected, messageReceived, rejected);
  }

  if (action.request_type === actions.SEND_MESSAGE) {
    next(actions.messageSent());
    cable.sendMessage(action.payload);
  }
};
