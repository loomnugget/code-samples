import ActionCable from 'actioncable';
import { loadAuthHeaders } from './auth';
import config from './config';

// Disconnect from server
// connection = new ActionCable.Connection
// App.cable.disconnect() (websocket API - connection.close())
// Restart the connection
// App.cable.connect() (websocket API - connection.open())
class actionCable {
  constructor() {
    const headers = loadAuthHeaders();
    const token = headers["access-token"];
    const uid = headers["uid"];
    const client = headers["client"];

    const url = `${config.WEBSOCKET_HOST}?token=${token}&uid=${uid}&client=${client}`;
    this.cable = ActionCable.createConsumer(url);
  }

  // Actioncable package provides callbacks that are invoked when connection
  // is opened or closed, and a perform method to call corresponding channel methods

  // The methods #appear and #away forward their intent to the remote AppearanceChannel instance on the server
  // by calling the `@perform` method with the first parameter being the action (which maps to AppearanceChannel#appear/away).
  // The second parameter is a hash that'll get JSON encoded and made available on the server in the data parameter.
  // Note that create is the only public method available on a subscription
  // Rejected is another base method that is called if the user doesn't have channel access
  // Recieved is a method defined on ActionCable::Connection::Base
  // Decodes WebSocket messages and dispatches them to subscribed channels.
  // WebSocket message transfer encoding is always JSON.
  subscribe = (connected, disconnected, received, rejected) => {
    this.channel = this.cable.subscriptions.create(
      { channel: 'ChatChannel' }, {
        connected: connected,
        disconnected: disconnected,
        received: received,
        rejected: rejected,
        sendMessage: this.sendMessage
      }
    );
  };

  // Send(data), perform(action, data = {}), and unsubscribe() are all methods on Subscription
  // Defined here: https://github.com/rails/rails/blob/master/actioncable/app/assets/javascripts/action_cable/subscription.coffee

  // Custom method defined on the ChatChannel
  sendMessage = (message) => {
    this.channel.perform('send_message', { body: message });
  };

  // Connected, disconnected, recieved and rejected are all callbacks defined by AcionCable
  connected = () => {
    console.log(`Connected!`);
  };

  disconnected = () => {
    console.log(`Disconnected!`);
  };

  rejected = () => {
    console.log('I was rejected! :(');
  };
}

export default actionCable;
