// @flow
import React from 'react';
import styled from 'styled-components';

import {
  categoryColors,
} from '../../utils/constants';

import {
  Button,
  Select,
  Text,
} from '../../components';

import type {
  SearchFormProps as Props,
  SearchFormState as State,
} from '../../utils/types';

import GridItem from './gridItem';

const CheckedButton = styled.button`
  height: 1.5rem;
  border-radius: 0.4rem;
  border: ${props => (props.backgroundColor ? '0px' : '1px solid black')};
  font-weight: bolder;
  background-color: ${props => props.backgroundColor};
  opacity: ${props => (props.checked ? 1 : 0.5)};
`;

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

  checked = (key: string, checked: boolean) => (evt: Object) => {
    evt.preventDefault();

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
    const { dates, categories, address: { postcode: postalCode, street, detail } = {} } = this.props;
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
            value={postcode || postalCode}
          />
        </GridItem>
        <GridItem>
          <Text>
            <div>{ street }</div>
            <div>{ detail }</div>
          </Text>
        </GridItem>
        <GridItem className="crimes">
          {
            categories && categories.map(({ url, name, checked }) => (
              <div className="each-crime" key={url}>
                <CheckedButton
                  backgroundColor={categoryColors[url]}
                  onClick={this.checked(url, !checked)}
                  checked={checked}
                >
                  {name}
                </CheckedButton>
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
