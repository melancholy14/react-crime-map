export const SAVE_LOCATION = 'containers/MapPage/actions/SAVE_LOCATION';

export const SELECT_CRIME_CATEGORY = 'containers/MapPage/actions/SELECT_CRIME_CATEGORY';

export function saveLocation (data) {
  return {
    type: SAVE_LOCATION,
    data,
  }
}

export function selectCrimeCategory (data) {
  return {
    type: SELECT_CRIME_CATEGORY,
    data,
  }
}