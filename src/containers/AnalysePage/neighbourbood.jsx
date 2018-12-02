// @flow

import React from 'react';

const Neighbourbood = React.memo(({ data = {} }: { data: Object }) => {
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
    url_force: urlForce,
  } = data;

  return (
    <div>
      <div>Name</div>
      <div>{ name }</div>
      <div>Centre</div>
      <div>{ latitude }</div>
      <div>{ longitude }</div>
      <div>Twitter</div>
      <div>{ twitter }</div>
      <div>Website</div>
      <div>{ website }</div>
      <div>URL</div>
      <div>{ urlForce }</div>
    </div>);
});

export default Neighbourbood;
