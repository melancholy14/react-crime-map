// @flow

import React from 'react';

import { connect } from 'react-redux';

import {
  searchRequest,
} from './actions';

import SearchStyle from './style';

import {
  filterCrimeCircles,
} from '../MapPage/actions';

import {
  categoryColors,
  allCrime,
} from '../../utils/constants';

import {
  SearchPageProps as Props,
  SearchPageState as State,
} from '../../utils/types';

import {
  Loading,
  Select,
  Button,
  Checkbox,
  Message,
} from '../../components';

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

  constructor(props) {
    super(props);

    this.state = {
      date: {
        min: '',
        max: '',
        dates: [],
      },
      minmax: [],
      crimeCheckboxes: [],
      selectedCategory: '',
    }
  }

  componentDidUpdate(prevProps) {
    const {
      availability: prevAvailability,
      category: prevCategory,
    } = prevProps;

    const {
      availability,
      category,
    } = this.props;

    if (JSON.stringify(prevAvailability) !== JSON.stringify(availability)){
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

    if (JSON.stringify(prevCategory) !== JSON.stringify(category)) {
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
    let crimeCheckboxes = [];
    if (evt.target.value === allCrime.url) {
      crimeCheckboxes = this.props.category.map((ele) => {
        return {
          ...ele,
          checked: true,
        }
      });
    }

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

  render() {
    const {
      date: {
        min,
        max,
        dates = [],
      } = {},
      crimeCheckboxes,
    } = this.state;

    const {
      category = [allCrime],
      message,
      loading,
    } = this.props;

    return (
      <SearchStyle>
        <form className="grid-container">
          <label htmlFor="select_date" className="grid-item">date</label>
          <div className="grid-item select">
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
          <div className="grid-item select">
            <Select
              id="select_category"
              onChange={this.changeCategory}
              options={category}
            />
          </div>
          { crimeCheckboxes &&
          <div className="grid-item whole-row">
            {
              crimeCheckboxes && crimeCheckboxes.map(({ url, checked, name }) => (<div className="each-crime" key={url}>
                <Checkbox
                  value={url}
                  id={`checkbox_${url}`}
                  onChange={this.checkCategory(url)}
                  checked={checked}
                />
                <label htmlFor={`checkbox_${url}`}>{name}</label>
                <span className="color" style={{backgroundColor: categoryColors[url]}}></span>
              </div>))
            }
          </div> }
          <Button onClick={this.search} className="grid-item whole-row">SEARCH</Button>
        </form>
        <Loading loading={loading} />
        <Message
          message={message}
        />
      </SearchStyle>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    search: {
      category = [],
    } = {},
  } = state;
  
  return {
    ...state.search,
    category: category.map((ele) => ({
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
