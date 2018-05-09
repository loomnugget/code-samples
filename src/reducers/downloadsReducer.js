import * as downloadActions from '../actions/csvActions';

const initialState = {
  error: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case downloadActions.DOWNLOAD_CSV_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    default:
      return state;
  }
};
