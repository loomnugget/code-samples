export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const CLEAR_AUTH_ERROR = 'CLEAR_AUTH_ERROR';

export const authenticateUser = (email, password) => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: AUTHENTICATE_USER,
    endpoint: 'api/auth/sign_in',
    method: 'POST',
    body: {
      email: email,
      password: password
    }
  })
);

export const logOutUser = () => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: LOG_OUT_USER,
    endpoint: 'api/auth/sign_out',
    method: 'DELETE'
  })
);

export const clearAuthError = () => ({
  type: CLEAR_AUTH_ERROR
});
