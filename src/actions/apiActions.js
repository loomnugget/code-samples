export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const CLEAR_API_ERROR = 'CLEAR_API_ERROR';

export const clearAPIError = () => ({
  type: CLEAR_API_ERROR
});

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
