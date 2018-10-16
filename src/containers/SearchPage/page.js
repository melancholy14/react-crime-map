import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';

import {
  loadCrimeCategoryRequest,
  searchRequest,
} from './actions';

import {
  filterCrimeCircles,
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
    category: PropTypes.array,
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
      checkboxReadOnly: false,
    }
  }

  componentDidUpdate(prevProps) {
    const {
      availability: prevAvailability,
      category: prevCategory,
      message: prevMessage,
    } = prevProps;

    const {
      availability,
      category,
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

      const minmax = [date.min, date.max];

      this.setState({
        minmax,
        date,
      });
    }

    if (prevCategory !== category) {
      const crimeCheckboxes = this.props.category.reduce((acc, ele) => {
        if (ele.url !== allCrime.url) {
          return [
            ...acc,
            {
              ...ele,
              checked: true,
              readOnly: true,
            }
          ];
        }
        return acc;
      }, []);

      this.setState({
        crimeCheckboxes,
      });
    }
    
    if (prevMessage !== message) {
      this.setState({
        showError: true,
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
    this.category = evt.target.value;

    const crimeCheckboxes = this.state.crimeCheckboxes.map((ele) => {
      const checked = (evt.target.value === allCrime.url) ? true : (ele.url === evt.target.value);
      return {
        ...ele,
        checked,
      }
    });

    this.setState({
      crimeCheckboxes,
      checkboxReadOnly: (evt.target.value !== allCrime.url),
    });
  }

  checkCategory = (url) => (evt) => {
    evt.preventDefault();

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

    this.props.onFilterCrimeCategory(this.props.crimes, list);
  }

  search = (evt) => {
    evt.preventDefault();

    const {
      minmax,
      date,
    } = this.state;

    const dates = date.dates.filter((ele) => minmax[0] <= ele && ele <= minmax[1]).sort((a, b) => a > b);
    const params = {
      url: this.category || allCrime.url,
      dates,
    };

    this.props.onSearch(params);

    this.setState({ checkboxReadOnly: params.url !== allCrime.url });
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
      showError,
    } = this.state;

    const {
      category = [allCrime],
      message,
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
            category && category.map(({ url, name }) =>
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
    onFilterCrimeCategory: (crimes, list) => dispatch(filterCrimeCircles(crimes, list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);