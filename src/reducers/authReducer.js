import { AUTHENTICATE_USER, LOG_OUT } from '../actions/authActions';

const initialState = {
  authenticated: false,
  isAuthenticating: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${AUTHENTICATE_USER}_REQUEST_START`:
      return {
        ...state,
        error: null,
        isAuthenticating: true
      };

    case `${AUTHENTICATE_USER}_REQUEST_SUCCESS`:
      return {
        ...state,
        error: null,
        isAuthenticating: false,
        authenticated: true
      };

    case `${AUTHENTICATE_USER}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isAuthenticating: false,
        authenticated: false
      };

    case LOG_OUT:
      return {
        ...initialState,
        authenticated: false
      };

    default:
      return state;
  }
};
