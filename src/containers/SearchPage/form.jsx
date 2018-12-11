// @flow
import React from 'react';
import { Form, reduxForm } from 'redux-form';

import {
  categoryColors,
  allCrime,
} from '../../utils/constants';

import {
  Button,
} from '../../components';

import Field from './field';
import GridItem from './gridItem';

// const StyledForm = styled(Form)`
//   display: grid;
//   grid-template-rows: 2rem 2rem auto 2rem;
//   grid-template-columns: 4.5rem auto;
// `;

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
  <Form onSubmit={handleSubmit}>
    <GridItem>
      date
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
      postcode
    </GridItem>
    <GridItem className="select">
      <Field.Text
        name="postcode"
        id="postcode"
      />
    </GridItem>
    <GridItem className="crimes">
      {
        category && category.map(({ url, checked, name }) => (
          <div className="each-crime" key={url}>
            <label htmlFor={`checkbox_${url}`}>
              <Field.Checkbox
                name={url}
                id={`checkbox_${url}`}
                onChange={onCheckCategory}
                checked={checked}
              />
              {name}
              { url !== allCrime.url && <span className="color" style={{ backgroundColor: categoryColors[url] }} /> }
            </label>
          </div>))
      }
    </GridItem>
    <GridItem className="buttons">
      <Button type="submit">SEARCH</Button>
    </GridItem>
  </Form>
);

export default reduxForm({
  form: 'search',
})(SearchForm);
