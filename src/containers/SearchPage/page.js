// @flow

import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import {
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
  Loading,
  Select,
  Button,
  Checkbox,
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
              font-weight: bolder;
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
        font-weight: bold;
      }
    }

    button {     
      padding: 0.3rem 1rem;
    }
`;

const allCrime = {
  url: 'all-crime',
  name: 'All crime'
};

type Props = {
  availability: Array<{ date: string }>,
  category: Array<{ url: string, name: string }>,
  crimes: Array<mixed>,
  message: string,
  loading: boolean,
  onSelectCrimeCategory: Function,
  onFilterCrimeCategory: Function,
  onSearch: Function,
}

type State = {
  date: {
    min: string,
    max: string,
    dates: Array<{ value: string }>,
  },
  minmax: string[],
  showError: boolean,
  crimeCheckboxes: Array<{ url: string, name: string, checked: boolean }>,
  selectedCategory: string,
}

class Search extends React.PureComponent<Props, State> {
  static defaultProps = {
    availability: [],
    category: [],
    crimes: [],
    message: null,
    loading: false,
    onSelectCrimeCategory: () => {},
    onFilterCrimeCategory: () => {},
    onSearch: () => {},
  };

  constructor() {
    super();

    this.state = {
      date: {
        min: '',
        max: '',
        dates: [],
      },
      minmax: [],
      crimeCheckboxes: [],
      selectedCategory: '',
      showError: false,
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
      const date = availability.reduce((acc, ele) => ({
          min: (acc.min && acc.min < ele.date) ? acc.min : ele.date,
          max: (acc.max && acc.max > ele.date) ? acc.max : ele.date,
          dates: acc.dates ? [...acc.dates, { value: ele.date }] : [{ value: ele.date }],
        }), {
          ...this.state.date,
        });

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
      // minmax.sort((a, b) => a > b);
      minmax.sort((a, b) => a.localeCompare(b));

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
    const crimeCheckboxes = this.state.crimeCheckboxes.map((ele) => {
      const checked = (evt.target.value === allCrime.url) ? true : (ele.url === evt.target.value);
      return {
        ...ele,
        checked,
      }
    });

    this.setState({
      crimeCheckboxes,
      selectedCategory: evt.target.value,
    });
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

    console.log(url, evt.target.checked);
    console.log(crimeCheckboxes);

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
      selectedCategory,
    } = this.state;

    const dates = date.dates.reduce((acc, ele) => {
      if (minmax[0] <= ele.value && ele.value <= minmax[1]) {
        return [...acc, ele.value];
      }
      return acc;
    }, []).sort((a, b) => a.localeCompare(b));

    const params = {
      url: selectedCategory || allCrime.url,
      dates,
    };

    this.props.onSearch(params);
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
      loading,
    } = this.props;

    return (
      <SearchContainer>
        <form className="grid-container">
          <label htmlFor="select_date" className="grid-item">date</label>
          <div className="grid-item">
            <Select
              onChange={this.changeDate('min')}
              value={min}
              options={dates}
            />
            <span> ~ </span>
            <Select
              onChange={this.changeDate('max')}
              value={max}
              options={dates}
            />
          </div>
          <label htmlFor="select_category" className="grid-item">category</label>
          <div className="grid-item">
            <Select
              id="select_category"
              onChange={this.changeCategory}
              options={category}
            />
          </div>
          { crimeCheckboxes &&
          <div className="grid-item whole-row">
            {
              crimeCheckboxes && crimeCheckboxes.map((ele) => (<div className="each-crime" key={ele.url}>
                <Checkbox
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
          <Button onClick={this.search} className="grid-item whole-row">SEARCH</Button>
        </form>
        <Loading loading={loading} />
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
    category: state.search.category.map((ele) => ({
      ...ele,
      value: ele.url,
      text: ele.name,
    })),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (param) => dispatch(searchRequest(param)),
    onFilterCrimeCategory: (crimes, list) => dispatch(filterCrimeCircles(crimes, list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);