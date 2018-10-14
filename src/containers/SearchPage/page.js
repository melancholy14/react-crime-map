import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';

import {
  loadCrimeCategoryRequest,
  searchRequest,
} from './actions';

import {
  Modal,
} from '../../components';

const SearchContainer = styled.div`
    order: 1;
    margin: 0.5rem;
    padding: 0.5rem;

    .grid-container {
      display: grid;
      grid-template-rows: 2rem 2rem 2rem;
      grid-template-columns: 4.5rem auto;

      .grid-item {
        padding: 0.5rem;
        
        &.submit {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }
    }

    label {
      font-size: smaller;
      text-transform: capitalize;
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
      date: {},
      minmax: [],
      message: null,
    }
  }

  componentDidUpdate(prevProps) {
    const {
      availability: prevAvailability,
      message: prevMessage,
    } = prevProps;

    const {
      availability,
      message,
    } = this.props;

    if (prevAvailability !== availability) {
      const date = availability.reduce((acc, ele) => {
        return {
          min: (acc.min && acc.min < ele.date) ? acc.min : ele.date,
          max: (acc.max && acc.max > ele.date) ? acc.max : ele.date,
          dates: acc.dates ? [...acc.dates, ele.date] : [ele.date],
        }
      }, {});

      this.setState({
        minmax: [date.min, date.max],
        date,
      });
    } else if (prevMessage !== message) {
      this.setState({
        message,
      });
    }
  }

  changeDate = (type) => (evt) => {
    const { value } = evt.target;

    if(value) {
      const minmax = [...this.state.minmax];
      minmax[type === 'min' ? 0 : 1] = value;
      minmax.sort((a, b) => a > b);

      const date = {
        ...this.state.date,
        [type]: value,
      };

      this.setState({
        minmax,
        date,
      });
    }
  }

  changeCategory = (evt) => {
    this.crimeCategory = evt.target.value;
  }

  search = (evt) => {
    evt.preventDefault();

    const {
      minmax,
      date,
    } = this.state;

    const dates = date.dates.filter((ele) => minmax[0] <= ele && ele <= minmax[1]).sort((a, b) => a > b);

    this.props.onSearch({
      url: this.crimeCategory || 'all-crimes',
      dates,
    });
  }

  toggleModal = () => this.setState({ showError: !this.state.showError })

  render() {
    const {
      date: {
        min,
        max,
        dates = [],
      } = {},
      message,
      showError,
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
          <label htmlFor="select_date" className="grid-item">date</label>
          <div className="grid-item">
            <select id="select_date" onChange={this.changeDate('min')} value={min}>
            {
              dates.map((ele) => <option value={ele} key={ele}>{ele}</option>)
            }
            </select>
            <span> ~ </span>
            <select onChange={this.changeDate('max')} value={max}>
            {
              dates.map((ele) => <option value={ele} key={ele}>{ele}</option>)
            }
            </select>
          </div>
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
          <button onClick={this.search} className="grid-item submit">SEARCH</button>
        </form>
        <Modal
          show={showError}
          onClose={this.toggleModal}
        >
          {message}
        </Modal>
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