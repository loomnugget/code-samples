import ActionCable from 'actioncable';
import config from './config';

// const cable = ActionCable.createConsumer(config.WEBSOCKET_HOST);

class actionCable {
  constructor() {
    this.cable = ActionCable.createConsumer(config.WEBSOCKET_HOST);
    this.channel = this.cable.subscriptions.create('ChatChannel');
 }

  received = (data) => {
    console.log(`Received Data: ${data}`);
  };

  connected = () => {
    console.log(`Connected!`);
  };

  disconnected = () => {
    console.warn(`Disconnected!`);
  };

  rejected = () => {
    console.warn('I was rejected! :(');
  };
}

export default actionCable;
