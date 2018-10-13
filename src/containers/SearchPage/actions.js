export const LOAD_AVAILABILITY_SUCCESS = 'containers/SearchPage/actions/LOAD_AVAILABILITY_SUCCESS';
export const LOAD_AVAILABILITY_FAILURE = 'containers/SearchPage/actions/LOAD_AVAILABILITY_FAILURE';

export const LOAD_CRIME_CATEGORY_REQUEST = 'containers/SearchPage/actions/LOAD_CRIME_CATEGORY_REQUEST';
export const LOAD_CRIME_CATEGORY_SUCCESS = 'containers/SearchPage/actions/LOAD_CRIME_CATEGORY_SUCCESS';
export const LOAD_CRIME_CATEGORY_FAILURE = 'containers/SearchPage/actions/LOAD_CRIME_CATEGORY_FAILURE';

export const SEARCH_REQUEST = 'containers/SearchPage/actions/SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'containers/SearchPage/actions/SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'containers/SearchPage/actions/SEARCH_FAILURE';

export function loadAvailabilitySuccess (data) {
  return {
    type: LOAD_AVAILABILITY_SUCCESS,
    data,
  }
}

export function loadAvailabilityFailure (message) {
  return {
    type: LOAD_AVAILABILITY_FAILURE,
    message,
  }
}

export function loadCrimeCategoryRequest (date) {
  return {
    type: LOAD_CRIME_CATEGORY_REQUEST,
    date,
  }
}

export function loadCrimeCategorySuccess (data) {
  return {
    type: LOAD_CRIME_CATEGORY_SUCCESS,
    data,
  }
}

export function loadCrimeCategoryFailure (message) {
  return {
    type: LOAD_CRIME_CATEGORY_FAILURE,
    message,
  }
}

export function searchRequest (params) {
  return {
    type: SEARCH_REQUEST,
    params,
  }
}

export function searchSuccess (data) {
  return {
    type: SEARCH_SUCCESS,
    data,
  }
}

export function searchFailure (message) {
  return {
    type: SEARCH_FAILURE,
    message,
  }
}