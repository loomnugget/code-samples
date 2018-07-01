import * as userActions from '../actions/userActions';

const initialState = {
  results: {},
  error: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case `${userActions.SIGN_UP_USER}_REQUEST_START`:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case `${userActions.SIGN_UP_USER}_REQUEST_SUCCESS`:
      return {
        ...state,
        error: null,
        results: action.payload
      };

    case `${userActions.SIGN_UP_USER}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
};