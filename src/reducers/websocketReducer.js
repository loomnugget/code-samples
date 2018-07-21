import * as actions from '../actions/websocketActions';

const initialState = {
  results: {},
  failed: false,
  disconnected: false,
  isConnecting: false,
  connectionOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${actions.CONNECTION_OPENING}`:
      return {
        ...state,
        isConnecting: true
      };

    case `${actions.CONNECTION_READY}`: {
      return {
        ...state,
        isConnecting: false,
        connectionOpen: true
      };
    }

    case `${actions.CONNECTION_DISCONNECTED}`: {
      return {
        ...state,
        disconnected: true,
        isConnecting: false,
        connectionOpen: false
      };
    }

    case `${actions.MESSAGE_RECEIVED}`: {
      return {
        ...state,
        results: action.payload,
        isConnecting: false
      };
    }

    default:
      return state;
  }
};
