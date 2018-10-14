import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';

import {
  loadCrimeCategoryRequest,
  searchRequest,
} from './actions';

import {
  selectCrimeCategory,
} from '../MapPage/actions';

import {
  categoryColors,
} from '../../utils/contants';

import {
  Modal,
} from '../../components';

const SearchContainer = styled.div`
    order: 1;
    margin: 0.5rem;
    padding: 0.5rem;

    .grid-container {
      display: grid;
      grid-template-rows: 2rem 2rem auto 2rem;
      grid-template-columns: 4.5rem auto;

      .grid-item {
        padding: 0.5rem;
        
        &.whole-row {
          grid-column-start: 1;
          grid-column-end: 3;

          .each-crime {
            display: inline-block;
            min-width: 50%;
            font-size: small;
            line-height: 1rem;
            vertical-align: middle;

            label {
              font-size: smaller;
            }

            .color {
              width: 0.75rem;
              height: 0.75rem;
              display: inline-block;
              border-radius: 0.5rem;
              margin: 0 0.3rem;
            }
          }
        }
      }

      & > label {
        font-size: smaller;
        text-transform: capitalize;
      }
    }

    button {
      background-color: black;
      color: white;
      padding: 0.3rem 1rem;
      font-weight: bolder;
    }
`;

const allCrime = {
  url: 'all-crime',
  name: 'All crime'
};

class Search extends React.PureComponent {
  static propTypes = {
    availability: PropTypes.array,
    crimeCategory: PropTypes.array,
    crimes: PropTypes.array,
    onLoadCrimeCategory: PropTypes.func,
    onSelectCrimeCategory: PropTypes.func,
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
        showError: true,
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

  checkCategory = (url) => (evt) => {
    const crimeCheckboxes = this.state.crimeCheckboxes.map((ele) => {
      if (ele.url === url) {
        return {
          ...ele,
          checked: evt.target.checked,
        }
      } 
      return ele;
    });

    this.setState({
      crimeCheckboxes,
    });

    const list = crimeCheckboxes.reduce((acc, ele) => {
      if(ele.checked) {
        return [...acc, ele.url];
      }
      return acc;
    }, []);

    this.props.onSelectCrimeCategory(list);
  }

  search = (evt) => {
    evt.preventDefault();

    const {
      minmax,
      date,
    } = this.state;

    const dates = date.dates.filter((ele) => minmax[0] <= ele && ele <= minmax[1]).sort((a, b) => a > b);
    const params = {
      url: this.crimeCategory || allCrime.url,
      dates,
    };

    this.props.onSearch(params);

    if (params.url === allCrime.url) {
      const crimeCheckboxes = this.props.crimeCategory.reduce((acc, ele) => {
        if (ele.url !== allCrime.url) {
          return [
            ...acc,
            {
              ...ele,
              checked: true,
            }
          ];
        }
        return acc;
      }, []);

      this.setState({ crimeCheckboxes });
    } else {
      this.setState({ crimeCheckboxes: null });
    }
  }

  toggleModal = () => this.setState({ showError: !this.state.showError })

  render() {
    const {
      date: {
        min,
        max,
        dates = [],
      } = {},
      crimeCheckboxes,
      message,
      showError,
    } = this.state;

    const {
      crimeCategory = [allCrime],
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
          { crimeCheckboxes &&
          <div className="grid-item whole-row">
            {
              crimeCheckboxes && crimeCheckboxes.map((ele) => (<div className="each-crime" key={ele.url}>
                <input
                  type="checkbox"
                  value={ele.url}
                  id={`checkbox_${ele.url}`}
                  onChange={this.checkCategory(ele.url)}
                  checked={ele.checked}
                />
                <label htmlFor={`checkbox_${ele.url}`}>{ele.name}</label>
                <span className="color" style={{backgroundColor: categoryColors[ele.url]}}></span>
              </div>))
            }
          </div> }
          <button onClick={this.search} className="grid-item whole-row">SEARCH</button>
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
    onSelectCrimeCategory: (list) => dispatch(selectCrimeCategory(list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);