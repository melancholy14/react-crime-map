// @flow

import React, { Suspense } from 'react';
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
    message: null,
    loading: false,
    onSelectCrimeCategory: () => {},
    onFilterCrimeCategory: () => {},
    onSearch: () => {},
  };

  checkCategory = debounce(() => {
    const {
      onFilterCrimeCategory,
      checkboxes,
    } = this.props;

    const selected = checkboxes.reduce((acc, ele) => {
      if (ele.checked) {
        acc.push(ele.url);
      }
      return acc;
    }, []);

    onFilterCrimeCategory(selected);
  }, 250);

  search = (value) => {
    const {
      date: {
        dates,
      } = {},
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
      date: {
        dates,
      } = {},
      checkboxes,
    } = this.props;

    return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    form: {
      search: {
        values: {
          minDate,
          maxDate,
          postcode,
          ...fields
        } = {},
        active,
      } = {},
    } = {},
    search: {
      category,
    },
  } = state;

  let checkboxes = [];

  // const value = fields[allCrime.url];

  // console.log(value);

  if (active) {
    if (active === allCrime.url) {
      checkboxes = category.map(cat => ({
        ...cat,
        checked: fields[active],
      }));
    } else {
      const t = Object.values(fields).every(v => v);
      checkboxes = category.map(cat => ({
        ...cat,
        checked: cat.url === allCrime.url ? t : (fields[cat.url] === undefined || !!fields[cat.url]),
      }));
    }
  } else {
    checkboxes = category.map(cat => ({
      ...cat,
      checked: (fields[cat.url] === undefined || !!fields[cat.url]),
    }));
  }

  // if (active === allCrime.url) {
  //   checkboxes = category.map(cat => ({
  //     ...cat,
  //     checked: fields[active],
  //   }));
  // } else if (!active && value !== undefined) {
  //   checkboxes = category.map(cat => ({
  //     ...cat,
  //     checked: value,
  //   }));
  // } else {
  //   const t = Object.values(fields).every(v => v);

  //   checkboxes = category.map(cat => ({
  //     ...cat,
  //     checked: cat.url === allCrime.url ? t : (fields[cat.url] === undefined || !!fields[cat.url]),
  //   }));
  // }

  return {
    ...state.search,
    checkboxes,
  };
};

const mapDispatchToProps = dispatch => ({
  onSearch: param => dispatch(searchRequest(param)),
  onFilterCrimeCategory: selected => dispatch(filterCrimeCircles(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
