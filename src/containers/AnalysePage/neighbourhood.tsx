// @flow

import React from 'react';
import Parser from 'html-react-parser';
import styled from 'styled-components';
import format from 'date-fns/format';

import {
  Table, Tr, Th, Td,
} from '../../components';

const Div = styled.div`
  padding: 1rem;
  font-size: smaller;
`;

const Italic = styled.div`
  font-style: italic;
  font-weight: lighter;
  font-size: larger;
`;

const Team = styled.div`
  border: 1px solid #a4a4a4;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

const Neighbourhood = ({ data = {} }: { data: Object }) => {
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

  return (
    <Div>
      <h3>{name}</h3>
      <ul>
        { force && <li><a href={force} target="_blank" rel="noopener noreferrer">{force}</a></li> }
        { email && <li>{email}</li> }
        { facebook && <li>{facebook}</li> }
        { twitter && <li>{twitter}</li> }
      </ul>
      <div>{description && Parser(description)}</div>
      <hr />
      <h4>You may want to know...</h4>
      <div>
        { links && links.map(({ title, url }, index) => (
          <div key={title}>
            <h4>{title}</h4>
            <div>{url}</div>
            <div>
              {`${locations[index].name}, ${locations[index].address}, ${locations[index].postcode}`}
            </div>
          </div>
        ))}
      </div>
      <hr />
      <h4>TEAM</h4>
      <div>
        {
          team && team.map(({ name: tname, bio }) => (
            <Team key={tname}>
              <Italic>{tname}</Italic>
              <div>{bio && Parser(bio)}</div>
            </Team>
          ))
        }
      </div>
      <hr />
      <h4>EVENTS</h4>
      <div>
        {
          events && events.map(({
            title, start_date: start, end_date: end, type, address, description: desc,
          }) => (
            <Table key={`${title}_${start}_${end}`}>
              <Tr>
                <Th>Title</Th>
                <Td>{title}</Td>
              </Tr>
              <Tr>
                <Th>Type</Th>
                <Td>{type}</Td>
              </Tr>
              <Tr>
                <Th>Date</Th>
                <Td>{`${format(start, 'Do MMM YYYY HH:mm')} ~ ${format(end, 'Do MMM YYYY HH:mm')}`}</Td>
              </Tr>
              <Tr>
                <Th>Address</Th>
                <Td>{address}</Td>
              </Tr>
              <Tr>
                <Th>Description</Th>
                <Td>{desc && Parser(desc)}</Td>
              </Tr>
            </Table>
          ))
        }
      </div>
      <hr />
      <h4>PRIORITIES</h4>
      <div>
        {
          priorities && priorities.map(({ issue, action, ...dates }) => (
            <Table key={`${issue}_${action}`}>
              <Tr>
                <Th>Issue</Th>
                <Td>{format(dates['issue-date'], 'Do MMM YYYY HH:mm')}</Td>
              </Tr>
              <Tr>
                <Th />
                <Td>{issue && Parser(issue)}</Td>
              </Tr>
              { action && (
              <Tr>
                <Th>action</Th>
                <Td>{format(dates['action-date'], 'Do MMM YYYY HH:mm')}</Td>
              </Tr>
              )}
              { action && (
              <Tr>
                <Th />
                <Td>{action && Parser(action)}</Td>
              </Tr>
              )}
            </Table>
          ))
        }
      </div>
    </Div>
  );
};

export default Neighbourhood;
