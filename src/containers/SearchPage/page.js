// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  searchRequest,
} from './actions';

import {
  filterCrimeCircles,
} from '../MapPage/actions';

import {
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

  constructor(props) {
    super(props);

    this.state = {
      date: {
        min: '',
        max: '',
        dates: [],
      },
      checkboxes: [],
    }
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

    if (JSON.stringify(prevAvailability) !== JSON.stringify(availability)){
      const date = availability.reduce((acc, ele) => ({
          min: (acc.min && acc.min < ele.date) ? acc.min : ele.date,
          max: (acc.max && acc.max > ele.date) ? acc.max : ele.date,
          dates: acc.dates ? [...acc.dates, { value: ele.date }] : [{ value: ele.date }],
        }), {
          ...this.state.date,
        });

      this.setState({
        date,
      });
    }

    if (JSON.stringify(prevCategory) !== JSON.stringify(category)) {
      const checkboxes = this.props.category.reduce((acc, ele) => {
          return [
            ...acc,
            {
              ...ele,
              checked: true,
            }
          ];
      }, []);

      this.setState({
        checkboxes,
      });
    }

    if (JSON.stringify(prevCrimes) !== JSON.stringify(crimes)) {
      const category = [allCrime.url, ...crimes.map((ele) => ele.category)];

      const checkboxes = this.props.category.reduce((acc, ele) => {
        return [
          ...acc,
          {
            ...ele,
            checked: category.includes(ele.url),
          }
        ];
      }, []);

      this.setState({
        checkboxes,
      });
    }
  }

  checkCategory = (evt, value, prevValue, name) => {
    let checkboxes = [];
    if (name === allCrime.url) {
      checkboxes = this.state.checkboxes.map((ele) => ({
        ...ele,
        checked: value,
      }));

    } else {
      checkboxes = this.state.checkboxes.map((ele) => {
        if (ele.url === name) {
          return {
            ...ele,
            checked: value,
          }
        } 
        return ele;
      });
    }

    const selected = checkboxes.reduce((acc, ele) => {
      if(ele.checked) {
        return [...acc, ele.url];
      }
      return acc;
    }, []);

    this.props.onFilterCrimeCategory(selected);

    this.setState({
      checkboxes,
    });
  }

  search = (value) => {
    const {
      date: {
        dates,
      } = {},
    } = this.state;

    const params = {
      ...value,
      dates,
    };

    this.props.onSearch(params);
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

const mapStateToProps = (state) => {
  return {
    ...state.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (param) => dispatch(searchRequest(param)),
    onFilterCrimeCategory: (crimes, list) => dispatch(filterCrimeCircles(crimes, list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
