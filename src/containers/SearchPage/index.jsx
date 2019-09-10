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
  getSearchState,
  getMetaState,
  getCategoriesState,
} from './selectors';

import {
  Loading,
  Message,
} from '../../components';

import SearchForm from './form';

const SearchStyle = styled.aside`
  order: 1;
  margin: 0.25rem;

  @media screen and (min-width: 768px) {
    margin: 0.5rem;
    padding: 0.5rem;
    width: 25%;
  }

  @media screen and (min-width: 1024px) {
    width: 20%;
  }
`;

class Search extends React.PureComponent<Props, State> {
  static defaultProps = {
    search: {
      availability: [],
      category: [],
    },
    meta: {
      message: null,
      loading: false,
    },
    onSelectCrimeCategory: () => {},
    onFilterCrimeCategory: () => {},
    onSearch: () => {},
  };

  checkCategory = debounce(() => {
    const {
      categories,
      onFilterCrimeCategory,
    } = this.props;

    const selected = categories.reduce((acc, ele) => {
      if (ele.checked) {
        acc.push(ele.url);
      }
      return acc;
    }, []);

    onFilterCrimeCategory(selected);
  }, 250);

  search = (value) => {
    const {
      search: {
        date: {
          dates,
        } = {},
      },
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
      meta: {
        message,
        loading,
      },
      search: {
        date: {
          dates,
        } = {},
      },
      categories,
    } = this.props;

    return (
      <SearchStyle>
        <>
          <SearchForm
            dates={dates}
            categories={categories}
            onCheckCategory={this.checkCategory}
            onSearch={this.search}
          />
          { loading && <Loading loading={loading} /> }
          <Message
            message={message}
          />
        </>
      </SearchStyle>
    );
  }
}

const mapStateToProps = state => ({
  search: getSearchState(state),
  meta: getMetaState(state),
  categories: getCategoriesState(state),
});

const mapDispatchToProps = dispatch => ({
  onSearch: param => dispatch(searchRequest(param)),
  onFilterCrimeCategory: selected => dispatch(filterCrimeCircles(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
