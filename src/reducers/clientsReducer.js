import { TEST_RETRIEVE_CLIENTS } from '../actions/apiActions';

const initialState = {
  results: {}
};

export default (state = initialState, action) => {
  switch (action.type) {

    case TEST_RETRIEVE_CLIENTS:
      return {
        ...state,
        results: action.payload
      };

    default:
      return state;
  }
};
