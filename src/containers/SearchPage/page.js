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
  allCrime,
} from '../../utils/constants';

import {
  SearchPageProps as Props,
  SearchPageState as State,
} from '../../utils/types';

import {
  Loading,
  Message,
} from '../../components';

import SearchForm from './form';

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
      // minmax: [],
      crimeCheckboxes: [],
      // selectedCategory: '',
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

        console.log('date', date);

      this.setState({
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

      console.log('crimeCheckboxes', crimeCheckboxes);

      this.setState({
        crimeCheckboxes,
      });
    }
  }

  // changeCategory = (evt) => {
  //   let crimeCheckboxes = [];
  //   if (evt.target.value === allCrime.url) {
  //     crimeCheckboxes = this.props.category.map((ele) => {
  //       return {
  //         ...ele,
  //         checked: true,
  //       }
  //     });
  //   }

  //   this.setState({
  //     crimeCheckboxes,
  //     selectedCategory: evt.target.value,
  //   });
  // }

  checkCategory = (url) => (evt, value, prevValue, name) => {
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

  search = (value) => {
    console.log(value);
    console.log(this.state);

    const {
      minDate: min_date,
      maxDate: max_date,
      selectCategory,
    } = value;

    const {
      date,
    } = this.state;

    const defaultDateValue = date.dates[0].value;
    const minDate = min_date || defaultDateValue;
    const maxDate = max_date || defaultDateValue;

    const dates = date.dates.reduce((acc, ele) => {
      if (minDate <= ele.value && ele.value <= maxDate) {
        return [...acc, ele.value];
      }
      return acc;
    }, []).sort((a, b) => a.localeCompare(b));

    const params = {
      url: selectCategory || allCrime.url,
      dates,
    };

    console.log(params);

    this.props.onSearch(params);
  }

  render() {
    const {
      date: {
        min,
        max,
        dates,
      },
      crimeCheckboxes,
    } = this.state;

    const {
      category = [allCrime],
      message,
      loading,
    } = this.props;

    return (
      <SearchStyle>
        <SearchForm
          dates={dates}
          // onChangeDate={this.changeDate}
          category={category}
          crimeCheckboxes={crimeCheckboxes}
          // onChangeCategory={this.changeCategory}
          onCheckCategory={this.checkCategory}
          // onSearch={this.search}
          onSubmit={this.search}
          initialValues={{
            minDate: min,
            maxDate: max,
            selectCategory: allCrime.url,
          }}
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
