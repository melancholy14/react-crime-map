// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { debounce } from 'lodash';

import {
  searchRequest,
} from './actions';

import {
  filterCrimeCircles,
} from '../MapPage/actions';

import type {
  SearchPageProps as Props,
  SearchPageState as State,
} from '../../utils/types';

import {
  allCrime,
} from '../../utils/constants';

import {
  Loading,
  Message,
} from '../../components';

import SearchForm from './form';

const SearchStyle = styled.aside`
  order: 1;
  margin: 0.5rem;
  padding: 0.5rem;
`;

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

  checkCategory = debounce((evt, value, prevValue, name) => {
    const {
      checkboxes,
    } = this.state;

    const {
      onFilterCrimeCategory,
    } = this.props;

    let newCheckboxes = [];
    if (name === allCrime.url) {
      newCheckboxes = checkboxes.map(ele => ({
        ...ele,
        checked: value,
      }));
    } else {
      newCheckboxes = checkboxes.map((ele) => {
        if (ele.url === name) {
          return {
            ...ele,
            checked: value,
          };
        }
        return ele;
      });
    }

    const selected = newCheckboxes.reduce((acc, ele) => {
      if (ele.checked) {
        return [...acc, ele.url];
      }
      return acc;
    }, []);

    onFilterCrimeCategory(selected);

    this.setState({
      checkboxes: newCheckboxes,
    });
  }, 250);

  constructor(props) {
    super(props);

    this.state = {
      date: {
        min: '',
        max: '',
        dates: [],
      },
      checkboxes: [],
    };
  }

  componentDidUpdate(prevProps) {
    const {
      availability: prevAvailability,
      category: prevCategory,
      crimes: prevCrimes,
    } = prevProps;

    const {
      availability,
      category,
      crimes,
    } = this.props;

    if (JSON.stringify(prevAvailability) !== JSON.stringify(availability)) {
      const {
        date: sDate,
      } = this.state;

      const date = availability.reduce((acc, ele) => ({
        min: (acc.min && acc.min < ele.date) ? acc.min : ele.date,
        max: (acc.max && acc.max > ele.date) ? acc.max : ele.date,
        dates: acc.dates ? [...acc.dates, { value: ele.date }] : [{ value: ele.date }],
      }), {
        ...sDate,
      });

      this.setState({
        date,
      });
    }

    if (JSON.stringify(prevCategory) !== JSON.stringify(category)) {
      const checkboxes = category.reduce((acc, ele) => [
        ...acc,
        {
          ...ele,
          checked: true,
        }], []);

      this.setState({
        checkboxes,
      });
    }

    if (JSON.stringify(prevCrimes) !== JSON.stringify(crimes)) {
      const newCategory = [allCrime.url, ...crimes.map(ele => ele.category)];

      const checkboxes = category.reduce((acc, ele) => [
        ...acc,
        {
          ...ele,
          checked: newCategory.includes(ele.url),
        }], []);

      this.setState({
        checkboxes,
      });
    }
  }

  search = (value) => {
    const {
      date: {
        dates,
      } = {},
    } = this.state;

    const {
      onSearch,
    } = this.props;

    const params = {
      ...value,
      dates,
    };

    onSearch(params);
  }

  render() {
    const {
      message,
      loading,
    } = this.props;

    const {
      date: {
        dates,
      },
      checkboxes,
    } = this.state;

    return (
      <SearchStyle>
        <SearchForm
          dates={dates}
          category={checkboxes}
          onCheckCategory={this.checkCategory}
          onSubmit={this.search}
        />
        <Loading loading={loading} />
        <Message
          message={message}
        />
      </SearchStyle>
    )
  }
}

const mapStateToProps = state => ({
  ...state.search,
});

const mapDispatchToProps = dispatch => ({
  onSearch: param => dispatch(searchRequest(param)),
  onFilterCrimeCategory: selected => dispatch(filterCrimeCircles(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
