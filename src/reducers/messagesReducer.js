import * as messageActions from '../actions/messageActions';

const initialState = {
  results: {},
  error: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case `${messageActions.RETRIEVE_MESSAGES}_REQUEST_START`:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case `${messageActions.RETRIEVE_MESSAGES}_REQUEST_SUCCESS`: {
      const messages = action.payload;

      return {
        ...state,
        error: null,
        isLoading: false,
        results: messages
      };
    }

    case `${messageActions.RETRIEVE_MESSAGES}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
};
