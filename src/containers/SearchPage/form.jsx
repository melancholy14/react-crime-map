// @flow
import React from 'react';

import {
  categoryColors,
  allCrime,
} from '../../utils/constants';

import {
  Button,
  Select,
  Checkbox,
} from '../../components';

import GridItem from './gridItem';

type Props = {
  dates: Array<Object>,
  categories: Array<{ url: string, name: string, checked: boolean }>,
  onCheckCategory: Function,
  onSearch: Function,
};

type State = {
  minDate: string,
  maxDate: string,
  postcode: string,
  selCategories: Array<Object>,
};

export default class SearchForm extends React.PureComponent<Props, State> {
  constructor() {
    super();

    this.state = {
      minDate: '',
      maxDate: '',
      postcode: '',
      selCategories: [],
    };
  }

  change = (key: string) => (evt: Object) => {
    const {
      target: {
        value = {},
      } = {},
    } = evt || {};

    this.setState({
      [key]: value,
    });
  }

  checked = (key: string) => (evt: Object) => {
    const {
      target: {
        checked,
      } = {},
    } = evt;

    const {
      categories,
      onCheckCategory,
    } = this.props;

    const [selected] = (categories.filter(({ url }) => url === key) || []);

    onCheckCategory({ ...selected, checked });
  }

  search = () => {
    const {
      onSearch,
    } = this.props;

    onSearch(this.state);
  }

  render() {
    const { dates, categories } = this.props;
    const { postcode, minDate, maxDate } = this.state;

    return (
      <div>
        <GridItem>
          date
        </GridItem>
        <GridItem className="select" id="select_date">
          <Select
            id="select_minDate"
            name="minDate"
            options={dates}
            value={minDate}
            onChange={this.change('minDate')}
          />
          <span> ~ </span>
          <Select
            id="select_maxDate"
            name="maxDate"
            options={dates}
            value={maxDate}
            onChange={this.change('maxDate')}
          />
        </GridItem>
        <GridItem>
          postcode
        </GridItem>
        <GridItem className="select">
          <input
            onChange={this.change('postcode')}
            value={postcode}
          />
        </GridItem>
        <GridItem className="crimes">
          {
            categories && categories.map(({ url, name, checked }) => (
              <div className="each-crime" key={url}>
                <label htmlFor={`checkbox_${url}`}>
                  <Checkbox
                    name={url}
                    id={`checkbox_${url}`}
                    onChange={this.checked(url)}
                    checked={checked}
                  />
                  {name}
                  { url !== allCrime.url && <span className="color" style={{ backgroundColor: categoryColors[url] }} /> }
                </label>
              </div>))
          }
        </GridItem>
        <GridItem className="buttons">
          <Button onClick={this.search}>SEARCH</Button>
        </GridItem>
      </div>
    );
  }
}
