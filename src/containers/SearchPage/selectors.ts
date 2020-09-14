// @flow

import { createSelector } from 'reselect';

const getSearch = state => state.search;

export const getCategoriesState = createSelector(
  [getSearch],
  search => search.category,
);

export const getSearchState = createSelector(
  [getSearch],
  (search) => {
    const {
      loading,
      message,
      ...state
    } = search;

    return state;
  },
);

export const getMetaState = createSelector(
  [getSearch],
  (search) => {
    const {
      loading,
      message,
    } = search;

    return {
      loading,
      message,
    };
  },
);
