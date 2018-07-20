// All actions that are functions use thunk middleware
export const startRequest = (request_type) => ({
  type: `${request_type}_REQUEST_START`
});

export const requestSuccess = (request_type, payload) => ({
  type: `${request_type}_REQUEST_SUCCESS`,
  payload: payload
});

export const requestFailure = (request_type, error) => ({
  type: `${request_type}_REQUEST_FAILURE`,
  error: error
});
