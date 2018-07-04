export const SIGN_UP_USER = 'SIGN_UP_USER';

export const signUpUser = userData => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: SIGN_UP_USER,
    endpoint: '/api/users',
    method: 'POST',
    body: {
      user: userData
    }
  })
);

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (userId, userData) => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: UPDATE_USER,
    endpoint: `/api/users/${userId}`,
    method: 'PUT',
    body: {
      user: userData
    }
  })
);
