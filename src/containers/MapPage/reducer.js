import {
  SAVE_LOCATION,
} from './actions';

import {
  SEARCH_SUCCESS,
} from '../SearchPage/actions';

const initialState = {
  latlng: {
    lat: 51.505,
    lng: -0.09,
  },
};

export default function mapReducer(state = initialState, action){
  switch(action.type) {
    case SAVE_LOCATION:
      return {
        ...state,
        latlng: action.data,
      };
    case SEARCH_SUCCESS:
      return {
        ...state, 
        locations: Object.values(action.data.reduce((acc, ele) => {
          const {
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
        }, {})),
      };
    default:
      return state;
  }
}