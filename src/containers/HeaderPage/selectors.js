// @flow

import { createSelector } from 'reselect';

const isMobile = createSelector(
  [],
  () => {
    if (window.screen.width < 768) {
      return true;
    }
    return false;
  },
);

export default isMobile;
