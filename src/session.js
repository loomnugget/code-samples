const authHeadersStorageKey = 'auth_headers';
const authHeaderKeys = ['Access-Token', 'Client', 'Expiry', 'Token-Type', 'Uid'];

export const loadAuthHeaders = () => {
  return JSON.parse(sessionStorage.getItem(authHeadersStorageKey)) || {};
};

export const hasAuthHeaders = () => {
  const authHeaders = loadAuthHeaders();
  if (!authHeaders) return false;
  return !!(authHeaders.hasOwnProperty(authHeaders['Access-Token']));
};

export const saveAuthHeaders = headers => {
  const authHeaders = authHeaderKeys.reduce((acc, key) => {
    const currentRequestValue = headers.get(key);
    if(currentRequestValue && currentRequestValue != '') {
      return {...acc, [key]: currentRequestValue };
    } else {
      return acc;
    }
  }, loadAuthHeaders());

  sessionStorage.setItem(authHeadersStorageKey, JSON.stringify(authHeaders));
};

export const removeAuthHeaders = () => {
  sessionStorage.removeItem(authHeadersStorageKey);
};

export const removeUserAuthHeader = () => {
  const authHeaders = loadAuthHeaders();
  authHeaderKeys.every(key => {
    return delete authHeaders[key];
  });
  sessionStorage.setItem(authHeadersStorageKey, JSON.stringify(authHeaders));
};
