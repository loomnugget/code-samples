import ActionCable from 'actioncable';

const WEBSOCKET_HOST = process.env.NODE_ENV === 'production'
                         ? 'wss://<YOUR_SERVER_SITE>/cable'
                         : 'ws://localhost:3000/cable';


const cable = ActionCable.createConsumer(WEBSOCKET_HOST);

cable.subscriptions.create('Channel', {
// normal channel code goes here...
});
