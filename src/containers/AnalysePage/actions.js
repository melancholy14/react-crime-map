// @flow

export const LOAD_GRAPHS_REQUEST = 'containers/AnalysePage/LOAD_GRAPHS_REQUEST';
export const LOAD_GRAPHS_SUCCESS = 'containers/AnalysePage/LOAD_GRAPHS_SUCCESS';
export const LOAD_GRAPHS_FAILURE = 'containers/AnalysePage/LOAD_GRAPHS_FAILURE';

export const LOAD_NEWS_REQUEST = 'containers/AnalysePage/LOAD_NEWS_REQUEST';
export const LOAD_NEWS_SUCCESS = 'containers/AnalysePage/LOAD_NEWS_SUCCESS';
export const LOAD_NEWS_FAILURE = 'containers/AnalysePage/LOAD_NEWS_FAILURE';

export const LOAD_NEIGHBOURHOOD_REQUEST = 'containers/AnalysePage/LOAD_NEIGHBOURHOOD_REQUEST';
export const LOAD_NEIGHBOURHOOD_SUCCESS = 'containers/AnalysePage/LOAD_NEIGHBOURHOOD_SUCCESS';
export const LOAD_NEIGHBOURHOOD_FAILURE = 'containers/AnalysePage/LOAD_NEIGHBOURHOOD_FAILURE';

export const SAVE_STREET_DATA = 'containers/AnalysePage/SAVE_STREET_DATA';

export const TOGGLE_SHOW = 'containers/AnalysePage/TOGGLE_SHOW';

export function loadGraphsRequest(street: { id: number, name: string }) {
  return {
    type: LOAD_GRAPHS_REQUEST,
    street,
  };
}

export function loadGraphsSuccess(
  data: {
    date: Array<Object>,
    category: Array<Object>,
    outcome: Array<Object>,
  },
) {
  return {
    type: LOAD_GRAPHS_SUCCESS,
    data,
  };
}

export function loadGraphsFailure(message: string) {
  return {
    type: LOAD_GRAPHS_FAILURE,
    message,
  };
}

export function loadNewsRequest(latlng: { lat: number, lng: number }) {
  return {
    type: LOAD_NEWS_REQUEST,
    latlng,
  };
}

export function loadNewsSuccess(news: Array<Object>) {
  return {
    type: LOAD_NEWS_SUCCESS,
    data: news,
  };
}

export function loadNewsFailure(message: string) {
  return {
    type: LOAD_NEWS_FAILURE,
    message,
  };
}

export function loadNeighbourhoodRequest(latlng: { lat: number, lng: number }) {
  return {
    type: LOAD_NEIGHBOURHOOD_REQUEST,
    latlng,
  };
}

export function loadNeighbourhoodSuccess(
  data: Object,
  people: Object,
  event: Object,
  priority: Object,
) {
  const neighbour = {
    init: {},
    team: {},
    events: {},
    priorities: {},
  };

  if (data) {
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

    const init = {
      nodes: [{
        id: 'name',
        label: name,
      }, {
        id: 'centre',
        label: `${latitude}, ${longitude}`,
      }, {
        id: 'twitter',
        label: twitter,
      }, {
        id: 'website',
        label: website,
      }, {
        id: 'url_force',
        label: urlForce,
      }],
      links: [{
        source: 'name',
        target: 'centre',
      }, {
        source: 'name',
        target: 'twitter',
      }, {
        source: 'name',
        target: 'website',
      }, {
        source: 'name',
        target: 'url_force',
      }],
    };

    neighbour.init = init;
  }

  if (people && people.length > 0) {
    const team = people.reduce((acc, p) => {
      const {
        name: _name,
        rank,
        contact_details: {
          email,
          telephone,
          mobile,
          twitter,
        } = {},
      } = p;

      const name = _name.replace(' ', '_');

      return {
        nodes: [...acc.nodes, {
          id: `${name}_name`,
          label: _name,
        }, {
          id: `${name}_rank`,
          label: rank,
        }, {
          id: `${name}_twitter`,
          label: twitter,
        }, {
          id: `${name}_email`,
          label: email,
        }, {
          id: `${name}_telephone`,
          label: telephone,
        }, {
          id: `${name}_mobile`,
          label: mobile,
        }],
        links: [...acc.links, {
          source: `${name}_name`,
          target: `${name}_rank`,
        }, {
          source: `${name}_name`,
          target: `${name}_twitter`,
        }, {
          source: `${name}_name`,
          target: `${name}_email`,
        }, {
          source: `${name}_name`,
          target: `${name}_telephone`,
        }, {
          source: `${name}_name`,
          target: `${name}_mobile`,
        }, {
          source: 'team',
          target: `${name}_name`,
        }],
      };
    }, {
      nodes: [{
        id: 'team',
        label: 'TEAM',
      }],
      links: [{
        source: 'name',
        target: 'team',
      }],
    });

    neighbour.team = team;
  }

  if (event && event.length > 0) {
    const events = event.reduce((acc, e) => {
      const {
        contact_details: {
          email,
          web,
          twitter,
        } = {},
        description,
        title,
        address,
        type,
        start_date: startDate,
        end_date: endDate,
      } = e;

      return {
        nodes: [...acc.nodes, {
          id: `${title}_name`,
          label: title,
        }, {
          id: `${title}_description`,
          label: description,
        }, {
          id: `${title}_twitter`,
          label: twitter,
        }, {
          id: `${title}_email`,
          label: email,
        }, {
          id: `${title}_web`,
          label: web,
        }, {
          id: `${title}_address`,
          label: address,
        }, {
          id: `${title}_type`,
          label: type,
        }, {
          id: `${title}_date`,
          label: `${startDate} ~ ${endDate}`,
        }],
        links: [...acc.links, {
          source: `${title}_name`,
          target: `${title}_description`,
        }, {
          source: `${title}_name`,
          target: `${title}_twitter`,
        }, {
          source: `${title}_name`,
          target: `${title}_email`,
        }, {
          source: `${title}_name`,
          target: `${title}_web`,
        }, {
          source: `${title}_name`,
          target: `${title}_address`,
        }, {
          source: `${title}_name`,
          target: `${title}_type`,
        }, {
          source: `${title}_name`,
          target: `${title}_date`,
        }],
      };
    }, {
      nodes: [],
      links: [],
    });

    neighbour.events = events;
  }

  if (priority && priority.length > 0) {
    const priorities = priority.reduce((acc, pr) => {
      const {
        issue,
        issue_date: issueDate,
        action,
        action_date: actionDate,
      } = pr;

      return {
        nodes: [...acc.nodes, {
          id: `${issue}_name`,
          label: issue,
        }, {
          id: `${issue}_issue_date`,
          label: issueDate,
        }, {
          id: `${issue}_action`,
          label: action,
        }, {
          id: `${issue}_action_date`,
          label: actionDate,
        }],
        links: [...acc.links, {
          source: `${issue}_name`,
          target: `${issue}_issue_date`,
        }, {
          source: `${issue}_name`,
          target: `${issue}_action`,
        }, {
          source: `${issue}_name`,
          target: `${issue}_action_date`,
        }],
      };
    }, {
      nodes: [],
      links: [],
    });

    neighbour.priorities = priorities;
  }

  return {
    type: LOAD_NEIGHBOURHOOD_SUCCESS,
    data: neighbour,
  };
}

// export function loadNeighbourhoodSuccess(
//   init: Object,
//   team: Object,
//   events: Object,
//   priorities: Object,
// ) {
//   return {
//     type: LOAD_NEIGHBOURHOOD_SUCCESS,
//     data: {
//       init,
//       team,
//       events,
//       priorities,
//     },
//   };
// }

export function loadNeighbourhoodFailure(message: string) {
  return {
    type: LOAD_NEIGHBOURHOOD_FAILURE,
    message,
  };
}

export function saveStreetData(street: Object) {
  return {
    type: SAVE_STREET_DATA,
    data: street,
  };
}

export function toggleShow(show: boolean) {
  return {
    type: TOGGLE_SHOW,
    data: show,
  };
}
