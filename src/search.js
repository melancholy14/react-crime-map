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

    display: grid;
    grid-template-rows: 2rem 2rem;

    .col {
      display: inline-block;
      padding: 0.5rem 1rem;

      label {
        padding: 0 0.5rem;
        text-transform: uppercase;
      }

      button {
        background-color: black;
        color: white;
        padding: 0.3rem 1rem;
        font-weight: bolder;
      }
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
      date: '0000-00-00',
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

  search = () => {
    this.props.onSearch({
      url: this.crimeCategory,
      date: this.state.date,
    });
  }

  render() {
    const {
      availability = [],
      crimeCategory = [],
      crimes = [],
    } = this.props;

    const date = availability.reduce((acc, ele) => {
      return {
        min: (acc.min && acc.min < ele.date) ? acc.min : ele.date,
        max: (acc.max && acc.max > ele.date) ? acc.max : ele.date,
      }
    }, {});

    const stopAndSearch = (availability.find(({ date }) => date === this.state.date) || {})['stop-and-search'];

    console.log(crimes);

    return (
      <SearchContainer>
        <form className="row">
          <div className="col">
            <label htmlFor="input_date">date</label>
            <input
              type="date"
              id="input_date"
              min={`${date.min}-01`}
              max={`${date.max}-31`}
              onChange={this.changeDate}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="select_category">category</label>
            <select id="select_category" onChange={this.changeCategory}>
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
          </div>
          <div className="col">
            <label htmlFor="select_force">force</label>
            <select id="select_force">
              {
                stopAndSearch && stopAndSearch.map((str) =>
                  <option
                    key={str}
                    value={str}
                  >
                    {str}
                  </option>)
              }
            </select>
          </div>
        </form>
        <div className="row">
          <div className="col">
            <button onClick={this.search}>SEARCH</button>
          </div>
        </div>
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