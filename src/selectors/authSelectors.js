export const getAuth = state => state.auth;

export const getCurrentUser = state => state.auth.currentUser;

export const authError = state => state.auth.error;

export const isAuthenticating = state => state.auth.isAuthenticating;

export const userAuthenticated = state => state.auth.authenticated;
