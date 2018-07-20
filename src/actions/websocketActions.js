export const CONNECTION_OPENING = 'CONNECTION_OPENING';
export const CONNECTION_SUBSCRIBING = 'CONNECTION_SUBSCRIBING';
export const CONNECTION_READY = 'CONNECTION_READY';
export const CONNECTION_FAILED = 'CONNECTION_FAILED';
export const CONNECTION_DISCONNECTED = 'CONNECTION_DISCONNECTED';

export const opening = () => ({
  type: CONNECTION_OPENING
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
