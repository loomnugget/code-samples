import ActionCable from 'actioncable';
import { loadAuthHeaders } from './auth';
import config from './config';

class actionCable {
  constructor() {
    const headers = loadAuthHeaders();
    const token = headers["access-token"];
    this.cable = ActionCable.createConsumer(`${config.WEBSOCKET_HOST}?token=${token}`);
  }

  subscribe = () => {
    this.channel = this.cable.subscriptions.create(
      { channel: 'ChatChannel' }, {
        connected: this.connected,
        disconnected: this.disconnected,
        received: this.received,
        rejected: this.rejected,
        send_message: this.send_message
      }
    );
  };

  send_message = (message) => {
    this.channel.perform('send_message', { body: message });
  };

  received = (data) => {
    this.channel.perform('received', { body: data });
  };

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
