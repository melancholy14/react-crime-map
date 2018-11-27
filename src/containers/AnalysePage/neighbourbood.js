// @flow

import React from 'react';

const Neighbourbood = ({ data = {} }: { data: Object }) => {
  const {
    centre: {
      latitude,
      longitude,
    } = {},
    contact_details: {
      twitter,
      website,
    } = {},
    name,
    url_force,
  } = data;

  return (<div>
    <div>Name</div><div>{ name }</div>
    <div>Centre</div><div>{ latitude }, { longitude }</div>
    <div>Twitter</div><div>{ twitter }</div>
    <div>Website</div><div>{ website }</div>
    <div>URL</div><div>{ url_force }</div>
  </div>);
}

export default Neighbourbood;