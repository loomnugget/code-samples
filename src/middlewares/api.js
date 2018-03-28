import { NEW_MIDDLEWARE_CALL_API, actionWithPayload, actionWithError } from './apiHelpers/requestHelpers';
import { showError } from '../actions/errorActions';
import callApi from './apiHelpers/callApi';
import handleResponse from './apiHelpers/handleResponse';
// import formatErrors from './apiHelpers/formatErrors';

export default store => next => action => {
  // NOTE: every action has to go through the new middleware, however
  // all actions except authenticateEmployee should skip this middleware
  // since they don't have the NEW_MIDDLEWARE_CALL_API symbol
  const newMiddlewareAction = action[NEW_MIDDLEWARE_CALL_API];
  if (typeof newMiddlewareAction === 'undefined') return next(action);

  // If the action has the new middleware symbol, that means
  // Request is started, so dispatch default start request action
  next(actionWithPayload({ type: newMiddlewareAction.requestType }));
  // make api call with action - note that return call here is important to return
  // the value of the promise chain
  return callApi(newMiddlewareAction)
  // handle response (throw request errors or return json)
  .then(response => handleResponse(response))
  // To continue to be able to extend this chain after handleResponse
  // resolves the promise with json from the api call, create a new promise
  // Source: https://javascript.info/promise-chaining
  //.then(json => console.log('json', json))

  .then(result => {
    const successData = {
      type: newMiddlewareAction.successType,
      payload: result
    };

    next(actionWithPayload(successData));
    return Promise.resolve(successData);
  })

  // now we can call .then from a container or component to route or do other logic
  // .then((response) => console.log('response', response))
  .catch(error => {
    console.log("ERROR", error)

    const errorData = {
      type: newMiddlewareAction.failureType,
      error: error.error,
      hasError: true
    };

    store.dispatch(showError(error.error));
    next(actionWithError(errorData));
    return Promise.reject(errorData);
  });
};
