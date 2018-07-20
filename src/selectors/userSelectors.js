export const getUsers = state => state.users.results;

export const getUser = (state, userId) => state.users.results[userId];

export const isLoading = state => state.users.isLoading;

export const userError = state => state.users.error;
