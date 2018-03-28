import config from '../../config';

export const API_ROOT = config.API_ROOT;

export const NEW_MIDDLEWARE_CALL_API = Symbol('New Middleware Call API');

// Available HTTP request methods
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

// These functions return pure actions - objects with type and payload
// we are copying the original action and returning it with the CALL_API
// info removed (includes types, endpoint, body...)
export const actionWithPayload = data => {
  const finalAction = Object.assign({}, data);
  delete finalAction[NEW_MIDDLEWARE_CALL_API];
  return finalAction;
};

export const actionWithError = data => {
  let finalAction = Object.assign({}, data);
  delete finalAction[NEW_MIDDLEWARE_CALL_API];
  return finalAction;
};
