// @flow

import { createSelector } from 'reselect';

const getMap = state => state.map;

const getMapState = createSelector(
  [getMap],
  map => map,
);

export default getMapState;
