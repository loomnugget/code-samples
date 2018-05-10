import * as apiActions from '../actions/apiActions';

const initialState = {
  error: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case apiActions.REQUEST_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case apiActions.REQUEST_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };

    case apiActions.REQUEST_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case apiActions.CLEAR_API_ERROR:
      return {
        ...state,
        error: null,
        isLoading: false
      };

    default:
      return state;
  }
};