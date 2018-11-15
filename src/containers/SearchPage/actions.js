// @flow

import {
  allCrime,
} from '../../utils/constants';

export const LOAD_AVAILABILITY_SUCCESS = 'containers/SearchPage/actions/LOAD_AVAILABILITY_SUCCESS';
export const LOAD_AVAILABILITY_FAILURE = 'containers/SearchPage/actions/LOAD_AVAILABILITY_FAILURE';

export const LOAD_CRIME_CATEGORY_REQUEST = 'containers/SearchPage/actions/LOAD_CRIME_CATEGORY_REQUEST';
export const LOAD_CRIME_CATEGORY_SUCCESS = 'containers/SearchPage/actions/LOAD_CRIME_CATEGORY_SUCCESS';
export const LOAD_CRIME_CATEGORY_FAILURE = 'containers/SearchPage/actions/LOAD_CRIME_CATEGORY_FAILURE';

export const SEARCH_REQUEST = 'containers/SearchPage/actions/SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'containers/SearchPage/actions/SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'containers/SearchPage/actions/SEARCH_FAILURE';

export function loadAvailabilitySuccess (data: Array<Object>) {
  return {
    type: LOAD_AVAILABILITY_SUCCESS,
    data,
  }
}

export function loadAvailabilityFailure (message: string) {
  return {
    type: LOAD_AVAILABILITY_FAILURE,
    message,
  }
}

export function loadCrimeCategorySuccess (data: Array<Object>) {
  return {
    type: LOAD_CRIME_CATEGORY_SUCCESS,
    data,
  }
}

export function loadCrimeCategoryFailure (message: string) {
  return {
    type: LOAD_CRIME_CATEGORY_FAILURE,
    message,
  }
}

export function searchRequest ({
  selectCategory,
  minDate: min_date,
  maxDate: max_date,
  dates: _dates,
  postcode,
}: {
  selectCategory: string,
  minDate: string,
  maxDate: string,
  dates: Array<{ value: string }>,
  postcode: string,
}) {
  const defaultDateValue = _dates[0].value;
  const minDate = min_date || defaultDateValue;
  const maxDate = max_date || defaultDateValue;

  const dates: Array<string> = _dates.reduce((acc, ele: { value: string }) => {
    if (minDate <= ele.value && ele.value <= maxDate) {
      return [...acc, ele.value];
    }
    return acc;
  }, []).sort((a, b) => a.localeCompare(b));

  const data = {
    url: selectCategory || allCrime.url,
    dates,
    postcode,
  };

  return {
    type: SEARCH_REQUEST,
    data,
  }
}

export function searchSuccess (data: Array<Object>) {
  return {
    type: SEARCH_SUCCESS,
    data,
  }
}

export function searchFailure (message: string) {
  return {
    type: SEARCH_FAILURE,
    message,
  }
}