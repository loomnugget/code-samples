import ActionCable from 'actioncable';
import { loadAuthHeaders } from '../auth';
import config from '../config';
 import * as actions from '../actions/websocketActions';

export default () => next => action => {
  if (action.type !== "websocket") return next(action);

  const headers = loadAuthHeaders();
  const token = headers["access-token"];
  const uid = headers["uid"];
  const client = headers["client"];

  const url = `${config.WEBSOCKET_HOST}?token=${token}&uid=${uid}&client=${client}`;
  const cable = ActionCable.createConsumer(url);

  const channel = cable.subscriptions.create(
    { channel: 'ChatChannel' }, {
      connected: () => next(actions.ready()),
      disconnected: () => next(actions.disconnected()),
      received: (data) => next(actions.messageReceived(data)),
      rejected: () => next(actions.failed()),
      sendMessage: function (message) {
        console.log(this.perform('send_message', { body: message }));
      }
    }
  );

  if (action.request_type === actions.SEND_MESSAGE) {
    channel.sendMessage(action.payload);
    return next(actions.messageSent());
  }
};
