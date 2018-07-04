import isObjectLike from 'lodash/isObjectLike';
import { API_ROOT } from '../apiHelpers/requestHelpers';
import { loadAuthHeaders } from '../../session';

const fullUrl = endpoint => {
  return (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
};

export const callApi = callAPI => {
  let { endpoint, method, body, query } = callAPI;
  if(query) endpoint = `${endpoint}?${query}`;

  const url = fullUrl(endpoint);

  if (isObjectLike(body)) body = JSON.stringify(body);

  const config = {
    method: method || 'GET',
    body,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...loadAuthHeaders(),
    }
  };
  // fetch resolves to a reponse to the request (success or fail will always resolve the promise)
  return fetch(url, config);
};


export const callApiCSV = endpoint => {
  const url = fullUrl(endpoint);

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
  return fetch(url, config);
};
