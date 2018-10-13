export const SAVE_LOCATION = 'containers/MapPage/actions/SAVE_LOCATION';

export function saveLocation (data) {
  return {
    type: SAVE_LOCATION,
    data,
  }
}