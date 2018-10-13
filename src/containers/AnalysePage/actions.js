export const SAVE_STREET_ID = 'containers/AnalysePage/SAVE_STREET_ID';

export const EXTRACT_DATA_SUCCESS = 'containers/AnalysePage/EXTRACT_DATA_SUCCESS';
export const EXTRACT_DATA_FAILURE = 'containers/AnalysePage/EXTRACT_DATA_FAILURE';

export function saveStreetId(id) {
  return {
    type: SAVE_STREET_ID,
    id,
  }
}

export function extractDataSuccess(data) {
  return {
    type: EXTRACT_DATA_SUCCESS,
    data,
  }
}

export function extractDataFailure(message) {
  return {
    type: EXTRACT_DATA_FAILURE,
    message,
  }
}