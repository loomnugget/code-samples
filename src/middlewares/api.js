import { callApi } from './apiHelpers/callApi';
import handleResponse from './apiHelpers/handleResponse';
import { startRequest, requestSuccess, requestFailure } from '../actions/apiActions';

export default () => next => action => {
  if (action.type !== "callAPI") return next(action);
  // Request has started, so dispatch default start request action
  next(startRequest());

  // make api call with action - note that return call here is important to return
  // the value of the promise chain
  return callApi(action)
  // handle response (throw request errors or return json)
  .then(response => handleResponse(response))
  // To continue to be able to extend this chain after handleResponse
  // resolves the promise with json from the api call, create a new promise
  // Source: https://javascript.info/promise-chaining

  .then(result => {
    next(requestSuccess(result));
    return Promise.resolve(result);
  })

  // now we can call .then from a container or component to route or do other logic
  .catch(error => {
    console.log('error', error)
    next(requestFailure("Error"));
    return Promise.reject(error);
  });
};
