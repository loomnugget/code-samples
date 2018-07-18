const authHeadersStorageKey = 'auth_headers';

export const loadAuthHeaders = () => {
  return JSON.parse(localStorage.getItem(authHeadersStorageKey)) || {};
};

export const hasAuthHeaders = () => {
  const authHeaders = loadAuthHeaders();
  return !!(authHeaders.hasOwnProperty('access-token'));
};

export const saveAuthHeaders = headers => {
  const authHeaders = {};
  headers.forEach((value, key) => {
    authHeaders[key] = value;
  });

  // console.log('authHeaders', authHeaders)
  localStorage.setItem(authHeadersStorageKey, JSON.stringify(authHeaders));
};
