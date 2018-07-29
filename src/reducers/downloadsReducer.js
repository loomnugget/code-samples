import * as downloadActions from '../actions/downloadActions';

const initialState = {
  error: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case downloadActions.DOWNLOAD_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case downloadActions.DOWNLOAD_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };

    case downloadActions.DOWNLOAD_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case downloadActions.CLEAR_DOWNLOADS_ERROR_MESSAGE:
      return {
        ...state,
        error: null,
        isLoading: false
      };

    default:
      return state;
  }
};
