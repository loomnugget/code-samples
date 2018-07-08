import { removeAuthHeaders } from '../session';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
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

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => dispatch => {
  removeAuthHeaders();
  return dispatch({
    type: LOG_OUT
  });
};
