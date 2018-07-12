import { AUTHENTICATE_USER, LOG_OUT_USER } from '../actions/authActions';
import { hasAuthHeaders } from '../auth';

const initialState = {
  authenticated: hasAuthHeaders(),
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

    case LOG_OUT_USER:
      return {
        ...initialState,
        authenticated: false
      };

    default:
      return state;
  }
};
