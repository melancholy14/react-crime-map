// @flow

import { createSelector } from 'reselect';

const getAnalyse = state => state.analyse;

const getAnalyseState = createSelector(
  [getAnalyse],
  analyse => analyse,
);

export default getAnalyseState;
