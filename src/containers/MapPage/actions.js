// @flow

import {
  categoryColors,
} from '../../utils/constants';

import {
  Location,
} from '../../utils/types';

export const SAVE_LOCATION = 'containers/MapPage/actions/SAVE_LOCATION';

export const INITIAL_CRIME_CIRCLES = 'containers/MapPage/actions/INITIAL_CRIME_CIRCLES';

export const FILTER_CRIME_CIRCLES = 'containers/MapPage/actions/FILTER_CRIME_CIRCLES';

export function saveLocation (data: Location) {
  return {
    type: SAVE_LOCATION,
    data,
  }
}

export function initialCrimeCircles (crimes: Array<Object>, dates: Array<string>) {
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
      } else {
        return {
          ...acc,
          [street.id]: {
            ...acc[street.id],
            count: acc[street.id].count + 1,
          },
        };
      }
  }, {});

  const values: Array<Object> = (Object.values(crimeWithCount): any);

  const max = Math.max(...values.map((ele) => ele.count));
  const dateLength = dates.length || 0;

  const data: Array<Object> = values.map((ele: Object) => {
    const opacity = ((ele.count - (ele.count % max)) / max > 0) ? 1 : (((ele.count - (ele.count % (max / 2))) / 10 > 0) ? 0.75 : 0.5);
    const radius = ((25 / dateLength) * ele.count) < 10 ? ((25 / dateLength) * ele.count) * 25 : 250;
    
    console.log('category', ele.category, 'count', ele.count);
    console.log('max', max, 'date', dateLength);
    console.log('opacity', opacity, 'radius', radius);

    return {
      ...ele,
      opacity,
      radius,
    }
  });

  return {
    type: INITIAL_CRIME_CIRCLES,
    data,
  }
}

export function filterCrimeCircles (selected: Array<string> = []) {
  // const crimeWithCount: Object = crimes.reduce((acc, ele) => {
  //   if (categories.includes(ele.category)) {
  //     const {
  //       category,
  //       location: {
  //         latitude,
  //         longitude,
  //         street = {},
  //       } = {},
  //     } = ele;

  //     if (!acc[street.id]) {
  //       return {
  //         ...acc,
  //         [street.id]: {
  //           category,
  //           fillColor: categoryColors[category],
  //           street,
  //           count: 1,
  //           latlng: [parseFloat(latitude), parseFloat(longitude)],
  //         },
  //       };
  //     } else {
  //       return {
  //         ...acc,
  //         [street.id]: {
  //           ...acc[street.id],
  //           count: acc[street.id].count + 1,
  //         },
  //       };
  //     }
  //   }
  //   return acc;
  // }, {});

  // const values: Array<Object> = (Object.values(crimeWithCount): any);

  // const max = Math.max(...values.map((ele: Object) => ele.count));

  // const data: Array<Object> = values.map((ele: Object) => ({
  //   ...ele,
  //   opacity: ((ele.count - (ele.count % 100)) / 100 > 0) ? 1 : (((ele.count - (ele.count % 10)) / 10 > 0) ? 0.75 : 0.5),
  //   // radius: (25 / max) * ele.count,
  //   radius: ((25 / max) * ele.count) < 10 ? ((25 / max) * ele.count) * 25 : 250,
  // }));

  return {
    type: FILTER_CRIME_CIRCLES,
    selected,
  }
}