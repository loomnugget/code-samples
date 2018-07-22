export const CREATE_WEBSOCKET_CONNECTION = 'CREATE_WEBSOCKET_CONNECTION';
export const CLOSE_WEBSOCKET_CONNECTION = 'CLOSE_WEBSOCKET_CONNECTION';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const CONNECTION_OPENING = 'CONNECTION_OPENING';
export const CONNECTION_READY = 'CONNECTION_READY';
export const MESSAGE_SENT = 'MESSAGE_SENT';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const CONNECTION_REJECTED = 'CONNECTION_REJECTED';
export const CONNECTION_DISCONNECTED = 'CONNECTION_DISCONNECTED';

// websocket.js middleware is called if actions have a type of 'websocket'
// createConnection, closeConnection, and sendMessage are called by chat component
// to start the socket connection and send messages

// The rest of the actions are called by actionCable callbacks when a
// response is recieved from the actioncable server

export const createConnection = () => ({
  type: 'websocket',
  request_type: CREATE_WEBSOCKET_CONNECTION
});

export const closeConnection = () => ({
  type: 'websocket',
  request_type: CLOSE_WEBSOCKET_CONNECTION
});

export const sendMessage = message => ({
  type: 'websocket',
  request_type: SEND_MESSAGE,
  payload: message
});

// Helper actions dispatche in websocket.js middleware upon
// receiving data from the actionCable server
export const connecting = () => ({
  type: CONNECTION_OPENING
});

export const connected = () => ({
  type: CONNECTION_READY
});

export const messageSent = () => ({
  type: MESSAGE_SENT
});

export const messageReceived = payload => ({
  type: MESSAGE_RECEIVED,
  payload: payload
});

export const rejected = () => ({
  type: CONNECTION_REJECTED
});

export const disconnected = () => ({
  type: CONNECTION_DISCONNECTED
});
