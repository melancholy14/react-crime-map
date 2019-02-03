// @flow

import React from 'react';

const Neighbourbood = React.memo(({ data = {} }: { data: Object }) => {
  const {
    init,
    team,
    events,
    priorities,
  } = data;

  const {
    contact_details: {
      email,
      facebook,
      twitter,
    } = {},
    description,
    links,
    locations,
    name,
    url_force: force,
  } = init;

  console.log(init);
  console.log(team);
  console.log(events);
  console.log(priorities);

  return (
    <div>
      <div>{name}</div>
      <div>{force}</div>
      <ul>
        { email && <li>{email}</li> }
        { facebook && <li>{facebook}</li> }
        { twitter && <li>{twitter}</li> }
      </ul>
      <div>{description}</div>
      <div>
        { links && links.map(({ title, url }, index) => (
          <div key={title}>
            <div>{title}</div>
            <div>{url}</div>
            <div>{locations[index].address}</div>
            <div>{locations[index].postcode}</div>
            <div>{locations[index].name}</div>
          </div>
        ))}
      </div>
      <hr />
      <div>
        {
          team && team.map(({ name: tname, bio }) => (
            <div key={tname}>
              <div>{ tname }</div>
              <div>{ bio }</div>
            </div>
          ))
        }
      </div>
      <hr />
      <div>
        {
          events && events.map(({
            title, start_date: start, end_date: end, type, address,
          }) => (
            <div key={`${title}_${start}_${end}`}>
              <div>{ title }</div>
              <div>{ start }</div>
              <div>{ end }</div>
              <div>{ type }</div>
              <div>{ address }</div>
            </div>
          ))
        }
      </div>
      <hr />
      <div>
        {
          priorities && priorities.map(({ issue, action, ...dates }) => (
            <div key={`${issue}_${action}`}>
              <div>{ issue }</div>
              <div>{ dates['issue-date'] }</div>
              <div>{ action }</div>
              <div>{ dates['action-date'] }</div>
            </div>
          ))
        }
      </div>
    </div>
  );
});

export default Neighbourbood;
