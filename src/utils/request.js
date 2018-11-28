import axios from 'axios';

export const api = {
  police: 'https://data.police.uk/api',
  guardian: 'https://content.guardianapis.com/search',
  mapquest: 'https://open.mapquestapi.com/geocoding/v1',
};

export const keys = {
  guardian: '36ecd8a8-f9be-4d95-9643-4095fae41301',
  mapquest: '7qAl9AvfefdHSIOkkLrVvSc466ZoHenG',
};

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error();
  error.response = response;

  try {
    const body = await response.json();
    error.body = body;
    error.message = body.message || response.statusText;

    throw error;
  } catch (err) {
    throw err;
  }
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  return response;
}

export function request(path, options) {
  return axios.get(path, options)
    .then(checkStatus)
    .then(parseJSON);
}
