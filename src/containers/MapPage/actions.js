import {
  categoryColors,
} from '../../utils/contants';

export const SAVE_LOCATION = 'containers/MapPage/actions/SAVE_LOCATION';

export const FILTER_CRIME_CIRCLES = 'containers/MapPage/actions/FILTER_CRIME_CIRCLES';

export function saveLocation (data) {
  return {
    type: SAVE_LOCATION,
    data,
  }
}

export function filterCrimeCircles (crimes = [], categories = []) {
  const values = Object.values(crimes.reduce((acc, ele) => {
    const {
      category,
      location: {
        latitude,
        longitude,
        street = {},
      } = {},
    } = ele;

    if (categories.length === 0 || categories.find((cat) => cat === category)) {
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
    }
    return acc;
  }, {}));

  const max = Math.max(...values.map((ele) => ele.count));

  const data = values.map((ele) => ({
    ...ele,
    opacity: ((ele.count - (ele.count%100))/100 > 0) ? 1 : (((ele.count - (ele.count%10))/10 > 0) ? 0.75 : 0.5),
    radius: (25 / max) * ele.count,
  }));

  return {
    type: FILTER_CRIME_CIRCLES,
    data,
  }
}