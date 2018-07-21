export const CONNECTION_OPENING = 'CONNECTION_OPENING';
export const CONNECTION_SUBSCRIBING = 'CONNECTION_SUBSCRIBING';
export const CONNECTION_READY = 'CONNECTION_READY';
export const CONNECTION_FAILED = 'CONNECTION_FAILED';
export const CONNECTION_DISCONNECTED = 'CONNECTION_DISCONNECTED';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const MESSAGE_SENT = 'MESSAGE_SENT';
export const CREATE_WEBSOCKET_CONNECTION = 'CREATE_WEBSOCKET_CONNECTION';

export const createConnection = () => ({
  type: 'websocket',
  request_type: CREATE_WEBSOCKET_CONNECTION
});

export const sendMessage = message => ({
  type: 'websocket',
  request_type: SEND_MESSAGE,
  payload: message
});

export const messageSent = () => ({
  type: MESSAGE_SENT
});

export const messageReceived = payload => ({
  type: MESSAGE_RECEIVED,
  payload: payload
});

export const opening = () => ({
  type: CONNECTION_OPENING,
});

export const subscribing = () => ({
  type: CONNECTION_SUBSCRIBING
});

export const ready = () => ({
  type: CONNECTION_READY
});

export const failed = () => ({
  type: CONNECTION_FAILED
});

export const disconnected = () => ({
  type: CONNECTION_DISCONNECTED
});
