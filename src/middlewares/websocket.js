import actionCable from '../cable';
import * as actions from '../actions/websocketActions';

const cable = new actionCable();

export default () => next => action => {
  if (action.type !== "websocket") return next(action);

  // Standard action cable callbacks dispatch an action, so need to be
  // passed into a cable instance's subscription
  const connected = () => next(actions.connected());
  const disconnected = () => next(actions.disconnected());
  const rejected = () => next(actions.rejected());
  const messageReceived = (message) => next(actions.messageReceived(message));

  if (action.request_type === actions.CREATE_WEBSOCKET_CONNECTION) {
    next(actions.connecting());
    cable.subscribe(connected, disconnected, messageReceived, rejected);
  }

  if (action.request_type === actions.SEND_MESSAGE) {
    next(actions.messageSent());
    cable.sendMessage(action.payload);
  }
};
