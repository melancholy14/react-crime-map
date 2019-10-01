// @flow

export const LOAD_GRAPHS_REQUEST = 'containers/AnalysePage/LOAD_GRAPHS_REQUEST';
export const LOAD_GRAPHS_SUCCESS = 'containers/AnalysePage/LOAD_GRAPHS_SUCCESS';
export const LOAD_GRAPHS_FAILURE = 'containers/AnalysePage/LOAD_GRAPHS_FAILURE';

export const LOAD_NEWS_REQUEST = 'containers/AnalysePage/LOAD_NEWS_REQUEST';
export const LOAD_NEWS_SUCCESS = 'containers/AnalysePage/LOAD_NEWS_SUCCESS';
export const LOAD_NEWS_FAILURE = 'containers/AnalysePage/LOAD_NEWS_FAILURE';

export const LOAD_NEIGHBOURHOOD_REQUEST = 'containers/AnalysePage/LOAD_NEIGHBOURHOOD_REQUEST';
export const LOAD_NEIGHBOURHOOD_SUCCESS = 'containers/AnalysePage/LOAD_NEIGHBOURHOOD_SUCCESS';
export const LOAD_NEIGHBOURHOOD_FAILURE = 'containers/AnalysePage/LOAD_NEIGHBOURHOOD_FAILURE';

export const SAVE_STREET_DATA = 'containers/AnalysePage/SAVE_STREET_DATA';

export const TOGGLE_SHOW = 'containers/AnalysePage/TOGGLE_SHOW';

export function loadGraphsRequest(street: { id: number, name: string }) {
  return {
    type: LOAD_GRAPHS_REQUEST,
    street,
  };
}

export function loadGraphsSuccess(
  data: {
    date: Array<Object>,
    category: Array<Object>,
    outcome: Array<Object>,
  },
) {
  return {
    type: LOAD_GRAPHS_SUCCESS,
    data,
  };
}

export function loadGraphsFailure(message: string) {
  return {
    type: LOAD_GRAPHS_FAILURE,
    message,
  };
}

export function loadNewsRequest(latlng: { lat: number, lng: number }) {
  return {
    type: LOAD_NEWS_REQUEST,
    latlng,
  };
}

export function loadNewsSuccess(news: Array<Object>) {
  return {
    type: LOAD_NEWS_SUCCESS,
    data: news,
  };
}

export function loadNewsFailure(message: string) {
  return {
    type: LOAD_NEWS_FAILURE,
    message,
  };
}

export function loadNeighbourhoodRequest(latlng: { lat: number, lng: number }) {
  return {
    type: LOAD_NEIGHBOURHOOD_REQUEST,
    latlng,
  };
}

export function loadNeighbourhoodSuccess(
  init: Object,
  team: Object,
  events: Object,
  priorities: Object,
) {
  return {
    type: LOAD_NEIGHBOURHOOD_SUCCESS,
    data: {
      init,
      team: team || [],
      events: events || [],
      priorities: priorities || [],
    },
  };
}

export function loadNeighbourhoodFailure(message: string) {
  return {
    type: LOAD_NEIGHBOURHOOD_FAILURE,
    message,
  };
}

export function saveStreetData(street: Object) {
  return {
    type: SAVE_STREET_DATA,
    data: street,
  };
}

export function toggleShow(show: boolean) {
  return {
    type: TOGGLE_SHOW,
    data: show,
  };
}
