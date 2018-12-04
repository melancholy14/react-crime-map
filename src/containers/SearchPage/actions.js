// @flow

export const LOAD_AVAILABILITY_SUCCESS = 'containers/SearchPage/actions/LOAD_AVAILABILITY_SUCCESS';
export const LOAD_AVAILABILITY_FAILURE = 'containers/SearchPage/actions/LOAD_AVAILABILITY_FAILURE';

export const LOAD_CRIME_CATEGORY_REQUEST = 'containers/SearchPage/actions/LOAD_CRIME_CATEGORY_REQUEST';
export const LOAD_CRIME_CATEGORY_SUCCESS = 'containers/SearchPage/actions/LOAD_CRIME_CATEGORY_SUCCESS';
export const LOAD_CRIME_CATEGORY_FAILURE = 'containers/SearchPage/actions/LOAD_CRIME_CATEGORY_FAILURE';

export const SEARCH_REQUEST = 'containers/SearchPage/actions/SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'containers/SearchPage/actions/SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'containers/SearchPage/actions/SEARCH_FAILURE';

export function loadAvailabilitySuccess(availability: Array<Object>) {
  const date = availability.reduce((acc, ele) => ({
    min: (acc.min && acc.min < ele.date) ? acc.min : ele.date,
    max: (acc.max && acc.max > ele.date) ? acc.max : ele.date,
    dates: acc.dates ? [...acc.dates, { value: ele.date }] : [{ value: ele.date }],
  }), {
    min: '',
    max: '',
    dates: [],
  });

  return {
    type: LOAD_AVAILABILITY_SUCCESS,
    data: {
      availability,
      date,
    },
  };
}

export function loadAvailabilityFailure(message: string) {
  return {
    type: LOAD_AVAILABILITY_FAILURE,
    message,
  };
}

export function loadCrimeCategorySuccess(data: Array<Object>) {
  return {
    type: LOAD_CRIME_CATEGORY_SUCCESS,
    data,
  };
}

export function loadCrimeCategoryFailure(message: string) {
  return {
    type: LOAD_CRIME_CATEGORY_FAILURE,
    message,
  };
}

export function searchRequest({
  minDate: originMinDate,
  maxDate: originMaxDate,
  dates: _dates,
  postcode,
}: {
  minDate: string,
  maxDate: string,
  dates: Array<{ value: string }>,
  postcode: string,
}) {
  const defaultDateValue = _dates[0].value;
  const minDate = originMinDate || defaultDateValue;
  const maxDate = originMaxDate || defaultDateValue;

  const dates: Array<string> = _dates.reduce((acc, ele: { value: string }) => {
    if (minDate <= ele.value && ele.value <= maxDate) {
      return [...acc, ele.value];
    }
    return acc;
  }, []).sort((a, b) => a.localeCompare(b));

  const data = {
    dates,
    postcode,
  };

  return {
    type: SEARCH_REQUEST,
    data,
  };
}

export function searchSuccess(data: Array<Object>) {
  return {
    type: SEARCH_SUCCESS,
    data,
  };
}

export function searchFailure(message: string) {
  return {
    type: SEARCH_FAILURE,
    message,
  };
}
