
export const getResults = state => state.websocket.results;

export const isConnecting = state => state.websocket.isConnecting;

export const connectionOpen = state => state.websocket.connectionOpen;

export const connectionRejected = state => state.websocket.rejected;

export const disconnected = state => state.websocket.disconnected;
