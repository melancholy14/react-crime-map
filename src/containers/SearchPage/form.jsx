// @flow
import React from 'react';

import {
  categoryColors,
  allCrime,
} from '../../utils/constants';

import {
  Button,
} from '../../components';

// import Field from './field';
import GridItem from './gridItem';

const Select = (
  {
    name, options, onChange,
  }: {
    name: string, options: Array<Object>, onChange: Function
  },
) => (
  <select onChange={onChange}>
    { options && options.map(({ value }) => (<option key={`${name}_${value}`} value={value}>{value}</option>)) }
  </select>
);

type Props = {
  dates: Array<Object>,
  categories: Array<{ url: string, name: string, checked: boolean }>,
  // onCheckCategory: Function,
  onSearch: Function,
};

type State = {
  minDate: string,
  maxDate: string,
  postcode: string,
};

export default class SearchForm extends React.PureComponent<Props, State> {
  constructor() {
    super();

    this.state = {
      minDate: '',
      maxDate: '',
      postcode: '',
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

  search = () => {
    const {
      onSearch,
    } = this.props;

    onSearch(this.state);
  }

  render() {
    const { dates, categories } = this.props;
    const { postcode } = this.state;

    return (
      <div>
        <GridItem>
          date
        </GridItem>
        <GridItem className="select" id="select_date">
          <Select
            name="minDate"
            options={dates}
            onChange={this.change('minDate')}
          />
          <span> ~ </span>
          <Select
            name="maxDate"
            options={dates}
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
            categories && categories.map(({ url, name }) => (
              <div className="each-crime" key={url}>
                <label htmlFor={`checkbox_${url}`}>
                  {/* <Field.Checkbox
                    name={url}
                    id={`checkbox_${url}`}
                    onChange={onCheckCategory}
                    checked={checked}
                  /> */}
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
