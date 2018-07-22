import { createSelector } from 'reselect';
import collection from 'lodash/collection';
// import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';

const getResults = state => state.messages.results;

// const getFilteredMessages = createSelector(
//   getResults,
//   messages => filter(messages, messages => messages.active)
// );

const getOrderedMessages = createSelector(
  getResults,
  messages => orderBy(messages, 'created_at', 'asc')
);

export const getMessages = createSelector(
  getOrderedMessages,
  messages => collection.map(messages)
);
