import * as userActions from '../actions/userActions';

const initialState = {
  results: {},
  error: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case `${userActions.SIGN_UP_USER}_REQUEST_START`:
    case `${userActions.RETRIEVE_USERS}_REQUEST_START`:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case `${userActions.RETRIEVE_USERS}_REQUEST_SUCCESS`: {
      const users = action.payload;

      return {
        ...state,
        error: null,
        isLoading: false,
        results: users
      };
    }

    case `${userActions.SIGN_UP_USER}_REQUEST_SUCCESS`: {
      const user = action.payload;

      return {
        ...state,
        error: null,
        isLoading: false,
        results: {
          ...state.results,
          [user.id]: user
        }
      };
    }

    case `${userActions.SIGN_UP_USER}_REQUEST_FAILURE`:
    case `${userActions.RETRIEVE_USERS}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case `${userActions.CLEAR_USER_ERROR}`:
      return {
        ...initialState,
        error: null
      };

    default:
      return state;
  }
};
