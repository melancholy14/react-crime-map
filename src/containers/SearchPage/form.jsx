// @flow
import React from 'react';
import { Form, reduxForm } from 'redux-form';
import styled from 'styled-components';

import {
  categoryColors,
  allCrime,
} from '../../utils/constants';

import {
  Button,
} from '../../components';

import Field from './field';
import GridItem from './gridItem';

const StyledForm = styled(Form)`
  display: grid;
  grid-template-rows: 2rem 2rem auto 2rem;
  grid-template-columns: 4.5rem auto;
`;

const SearchForm = ({
  dates,
  category,
  onCheckCategory,
  handleSubmit,
}: {
  dates: Array<Object>,
  category: Array<{ url: string, name: string, checked: boolean }>,
  onCheckCategory: Function,
  handleSubmit: Function,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <GridItem>
      <label htmlFor="select_date">date</label>
    </GridItem>
    <GridItem className="select" id="select_date">
      <Field.Select
        name="minDate"
        options={dates}
      />
      <span> ~ </span>
      <Field.Select
        name="maxDate"
        options={dates}
      />
    </GridItem>
    <GridItem>
      <label htmlFor="postcode">postcode</label>
    </GridItem>
    <GridItem className="select">
      <Field.Text
        name="postcode"
        id="postcode"
      />
    </GridItem>
    <GridItem className="whole-row">
      {
        category && category.map(({ url, checked, name }) => (
          <div className="each-crime" key={url}>
            <Field.Checkbox
              name={url}
              id={`checkbox_${url}`}
              onChange={onCheckCategory}
              checked={checked}
            />
            <label htmlFor={`checkbox_${url}`}>{name}</label>
            { url !== allCrime.url && <span className="color" style={{ backgroundColor: categoryColors[url] }} /> }
          </div>))
      }
    </GridItem>
    <GridItem className="whole-row">
      <Button type="submit">SEARCH</Button>
    </GridItem>
  </StyledForm>
);

export default reduxForm({
  form: 'search',
})(SearchForm);
