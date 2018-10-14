export const LOAD_GRAPHS_REQUEST = 'containers/AnalysePage/LOAD_GRAPHS_REQUEST';
export const LOAD_GRAPHS_SUCCESS = 'containers/AnalysePage/LOAD_GRAPHS_SUCCESS';
export const LOAD_GRAPHS_FAILURE = 'containers/AnalysePage/LOAD_GRAPHS_FAILURE';

export const LOAD_NEWS_REQUEST = 'containers/AnalysePage/LOAD_NEWS_REQUEST';
export const LOAD_NEWS_SUCCESS = 'containers/AnalysePage/LOAD_NEWS_SUCCESS';
export const LOAD_NEWS_FAILURE = 'containers/AnalysePage/LOAD_NEWS_FAILURE';

export function loadGraphsRequest(id) {
  return {
    type: LOAD_GRAPHS_REQUEST,
    id,
  }
}

export function loadGraphsSuccess(data) {
  return {
    type: LOAD_GRAPHS_SUCCESS,
    data,
  }
}

export function loadGraphsFailure(message) {
  return {
    type: LOAD_GRAPHS_FAILURE,
    message,
  }
}

export function loadNewsRequest(latlng) {
  return {
    type: LOAD_NEWS_REQUEST,
    latlng,
  }
}

export function loadNewsSuccess(news) {
  return {
    type: LOAD_NEWS_SUCCESS,
    news,
  }
}

export function loadNewsFailure(message) {
  return {
    type: LOAD_NEWS_FAILURE,
    message,
  }
}