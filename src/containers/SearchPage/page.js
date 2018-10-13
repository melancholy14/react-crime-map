import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';

import {
  loadCrimeCategoryRequest,
  searchRequest,
} from './actions';

const SearchContainer = styled.div`
    order: 1;
    margin: 0.5rem;
    padding: 0.5rem;

    .grid-container {
      display: grid;
      grid-template-rows: 2rem 2rem 2rem 2rem;
      grid-template-columns: 7.5rem auto;

      .grid-item {
        padding: 0.5rem 1rem;
        
        &.submit {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }
    }

    label {
      font-size: smaller;
      text-transform: uppercase;
    }

    button {
      background-color: black;
      color: white;
      padding: 0.3rem 1rem;
      font-weight: bolder;
    }
`;

class Search extends React.PureComponent {
  static propTypes = {
    availability: PropTypes.array,
    crimeCategory: PropTypes.array,
    crimes: PropTypes.array,
    onLoadCrimeCategory: PropTypes.func,
  };

  constructor() {
    super();

    this.state = {
      date: null,
      minmax: {},
      forces: [],
    }
  }

  componentDidUpdate(prevProps) {
    const {
      availability: prevAvailability,
    } = prevProps;

    const {
      availability,
    } = this.props;

    if (prevAvailability !== availability) {
      const minmax = availability.reduce((acc, ele) => {
        return {
          min: (acc.min && acc.min < ele.date) ? acc.min : ele.date,
          max: (acc.max && acc.max > ele.date) ? acc.max : ele.date,
        }
      }, {});

      const forces = (availability.find(({ date }) => (this.state.date || minmax.max || '').indexOf(date) > -1) || {})['stop-and-search'];

      this.setState({
        minmax,
        forces,
      })
    }
  }

  changeDate = (evt) => {
    const dates = evt.target.value && evt.target.value.split('-');

    if(dates) {
      const date = `${dates[0]}-${dates[1]}`;
      this.setState({
        date,
      });

      this.props.onLoadCrimeCategory(date);
    }
  }

  changeCategory = (evt) => {
    this.crimeCategory = evt.target.value;
  }

  search = (evt) => {
    evt.preventDefault();

    this.props.onSearch({
      url: this.crimeCategory || 'all-crimes',
      date: this.state.date || this.state.minmax.max,
    });
  }

  toggleModal = () => this.setState({ showError: !this.state.showError })

  render() {
    const {
      date,
      minmax,
      forces,
    } = this.state;

    const {
      crimeCategory = [{
        url: 'all-crimes',
        name: 'all crimes'
      }],
    } = this.props;

    return (
      <SearchContainer>
        <form className="grid-container">
          <label htmlFor="input_date" className="grid-item">date</label>
          <input
            type="date"
            id="input_date"
            min={`${minmax.min}-01`}
            max={`${minmax.max}-31`}
            value={(date || `${minmax.max}-31`)}
            onChange={this.changeDate}
            required
            className="grid-item"
          />
          <label htmlFor="select_category" className="grid-item">category</label>
          <select id="select_category" onChange={this.changeCategory} className="grid-item">
          {
            crimeCategory && crimeCategory.map(({ url, name }) =>
              <option
                key={url}
                value={url}
              >
                {name}
              </option>
            )
          }
          </select>
          <label htmlFor="select_force" className="grid-item">force</label>
          <select id="select_force" className="grid-item">
            {
              forces && forces.map((str) =>
                <option
                  key={str}
                  value={str}
                >
                  {str}
                </option>)
            }
          </select>
          <button onClick={this.search} className="grid-item submit">SEARCH</button>
        </form>
      </SearchContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadCrimeCategory: () => dispatch(loadCrimeCategoryRequest()),
    onSearch: (param) => dispatch(searchRequest(param)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);