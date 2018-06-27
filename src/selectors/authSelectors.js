export const getAuth = state => state.auth;

export const getUser = state => state.auth.user;

export const isAuthenticating = state => state.auth.isAuthenticating;

export const userAuthenticated = state => state.auth.isAuthenticated;
