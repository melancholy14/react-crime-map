import {
  SAVE_LOCATION,
  SELECT_CRIME_CATEGORY,
} from './actions';

import {
  SEARCH_SUCCESS,
} from '../SearchPage/actions';

const initialState = {
  latlng: {
    lat: 51.505,
    lng: -0.09,
  },
  selectedCrimes: [],
  searchedCrimes: [],
};

export default function mapReducer(state = initialState, action){
  switch(action.type) {
    case SAVE_LOCATION:
      return {
        ...state,
        latlng: action.data,
      };
    case SELECT_CRIME_CATEGORY: {
      return {
        ...state,
        selectedCrimes: state.searchedCrimes.filter((crime) => action.data.find((ele) => ele === crime.category)),
      }
    }
    case SEARCH_SUCCESS: {
      const values = Object.values(action.data.reduce((acc, ele) => {
        const {
          category,
          location: {
            latitude,
            longitude,
            street = {},
          } = {},
        } = ele;

        if (!acc[street.id]) {
          return {
            ...acc,
            [street.id]: {
              category,
              street,
              count: 1,
              latlng: [parseFloat(latitude), parseFloat(longitude)],
            },
          };
        } else {
          return {
            ...acc,
            [street.id]: {
              ...acc[street.id],
              count: acc[street.id].count + 1,
            },
          };
        }
      }, {}));

      return {
        ...state, 
        selectedCrimes: [...values],
        searchedCrimes: [...values],
      };
    }
    default:
      return state;
  }
}