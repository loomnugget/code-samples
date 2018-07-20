export const RETRIEVE_MESSAGES = 'RETRIEVE_MESSAGES';
export const retrieveMessages = () => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: RETRIEVE_MESSAGES,
    endpoint: `api/messages`,
    method: 'GET'
  })
);
