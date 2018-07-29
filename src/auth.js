const authHeadersStorageKey = 'auth_headers';
const authHeaderKeys = ['access-token', 'client', 'expiry', 'token-type', 'uid'];

export const loadAuthHeaders = () => {
  return JSON.parse(sessionStorage.getItem(authHeadersStorageKey)) || {};
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

  // console.log('authHeaders', authHeaders);
  sessionStorage.setItem(authHeadersStorageKey, JSON.stringify(authHeaders));
};

export const removeAuthHeaders = () => {
  sessionStorage.removeItem(authHeadersStorageKey);
};

export const removeHeaderKeys = () => {
  const authHeaders = loadAuthHeaders();
  authHeaderKeys.every(key => {
    console.log('key', key);
    return delete authHeaders[key];
  });

  sessionStorage.setItem(authHeadersStorageKey, JSON.stringify(authHeaders));
};
