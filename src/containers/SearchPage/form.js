// @flow
import React from 'react';
import { Form, reduxForm } from 'redux-form';
import styled from 'styled-components';

import {
  categoryColors,
} from '../../utils/constants';

import {
  Select,
  Button,
  Checkbox,
} from '../../components';

import GridItem from './gridItem';

const StyledForm = styled(Form)`
  display: grid;
  grid-template-rows: 2rem 2rem auto 2rem;
  grid-template-columns: 4.5rem auto;
`;

const SearchForm = ({
  dates,
  category,
  crimeCheckboxes,
  // onChangeCategory,
  onCheckCategory,
  handleSubmit,
}: {
  dates: Array<Object>,
  category: Array<Object>,
  crimeCheckboxes: Array<{ url: string, name: string, checked: boolean }>,
  // onChangeCategory: Function,
  onCheckCategory: Function,
  handleSubmit: Function,
}) => (
  <StyledForm className="grid-container" onSubmit={handleSubmit}>
    <GridItem>
      <label htmlFor="select_date">date</label>
    </GridItem>
    <GridItem className="select" id="select_date">
      <Select
        name="minDate"
        options={dates}
      />
      <span> ~ </span>
      <Select
        name="maxDate"
        options={dates}
      />
    </GridItem>
    <GridItem>
      <label htmlFor="select_category">category</label>
    </GridItem>
    <GridItem className="select">
      <Select
        name="selectCategory"
        id="select_category"
        options={category}
      />
    </GridItem>
    { crimeCheckboxes &&
    <GridItem className="whole-row">
      {
        crimeCheckboxes && crimeCheckboxes.map(({ url, checked, name }) => (<div className="each-crime" key={url}>
          <Checkbox
            name={`checkbox_${url}`}
            id={`checkbox_${url}`}
            onChange={onCheckCategory(url)}
            checked={checked}
          />
          <label htmlFor={`checkbox_${url}`}>{name}</label>
          <span className="color" style={{ backgroundColor: categoryColors[url] }}></span>
        </div>))
      }
    </GridItem> }
    <GridItem className="whole-row">
      <Button type="submit">SEARCH</Button>
    </GridItem>
  </StyledForm>
);

export default reduxForm({
  form: 'search',
})(SearchForm);