import isObjectLike from 'lodash/isObjectLike';
import { API_ROOT } from '../apiHelpers/requestHelpers';

export const callApi = callAPI => {
  let { endpoint, method, body, query } = callAPI;
  if(query) endpoint = `${endpoint}?${query}`;

  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  if (isObjectLike(body)) body = JSON.stringify(body);

  const config = {
    method: method || 'GET',
    body,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
  // fetch resolves to a reponse to the request (success or fail will always resolve the promise)
  return fetch(fullUrl, config);
};


export const callApiCSV = endpoint => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
  return fetch(fullUrl, config);
};
