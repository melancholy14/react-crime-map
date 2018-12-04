// @flow

import {
  categoryColors,
} from '../../utils/constants';

import type {
  Location,
} from '../../utils/types';

export const SAVE_LOCATION = 'containers/MapPage/actions/SAVE_LOCATION';

export const INITIAL_CRIME_CIRCLES = 'containers/MapPage/actions/INITIAL_CRIME_CIRCLES';

export const FILTER_CRIME_CIRCLES = 'containers/MapPage/actions/FILTER_CRIME_CIRCLES';

const minOpacity = 0.75;
const maxOpacity = 1;
const minRadius = 25;
const maxRadius = 250;

const getOpacity = ratio => ratio * (maxOpacity - minOpacity) + minOpacity;
const getRadius = ratio => ratio * (maxRadius - minRadius) + minRadius;

export function saveLocation(data: Location) {
  return {
    type: SAVE_LOCATION,
    data,
  };
}

export function initialCrimeCircles(crimes: Array<Object>) {
  const crimeWithCount: Object = crimes.reduce((acc, ele) => {
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
          fillColor: categoryColors[category],
          street,
          count: 1,
          latlng: [parseFloat(latitude), parseFloat(longitude)],
        },
      };
    }
    return {
      ...acc,
      [street.id]: {
        ...acc[street.id],
        count: acc[street.id].count + 1,
      },
    };
  }, {});

  const values: Array<Object> = (Object.values(crimeWithCount): any);

  const max = Math.max(...values.map(ele => ele.count));

  const data: Array<Object> = values.map((ele: Object) => ({
    ...ele,
    opacity: getOpacity(ele.count / max),
    radius: getRadius(ele.count / max),
  }));

  return {
    type: INITIAL_CRIME_CIRCLES,
    data,
  };
}

export function filterCrimeCircles(data: Array<string> = []) {
  return {
    type: FILTER_CRIME_CIRCLES,
    data,
  };
}
