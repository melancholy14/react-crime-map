// @flow

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

export function searchRequest (data: { url: string, dates: Array<string> }) {
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