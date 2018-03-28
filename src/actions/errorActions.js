export const SHOW_ERROR_ACTION = "SHOW_ERROR_ACTION";
export const showError = (error) => ({
  type: SHOW_ERROR_ACTION,
  payload: error
});

export const START_REQUEST = "START_REQUEST";
export const startRequest = {
  type: START_REQUEST,
  payload: null
};
