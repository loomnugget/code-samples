export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const CLEAR_API_ERROR = 'CLEAR_API_ERROR';

export const clearAPIError = () => ({
  type: CLEAR_API_ERROR
});

// All actions that are functions use thunk middleware
export const startRequest = () => ({
  type: REQUEST_START
});

export const requestSuccess = payload => ({
  type: REQUEST_SUCCESS,
  payload: payload
});

export const requestFailure = error => ({
  type: REQUEST_FAILURE,
  error: error
});

// async API actions are required to have a type of callAPI and an endpoint
// can also have a body, query and method (if not provided, defaults to a GET request)
export const TEST_RETRIEVE_CLIENTS = 'TEST_RETRIEVE_CLIENTS';
export const testCallApi = () => ({
  type: 'callAPI',
  endpoint: `clients`
});
