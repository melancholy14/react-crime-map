// @flow
import React from 'react';
import { Form, reduxForm } from 'redux-form';

import {
  categoryColors,
} from '../../utils/constants';

import {
  Select,
  Button,
  Checkbox,
} from '../../components';

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
  <Form className="grid-container" onSubmit={handleSubmit}>
    <label htmlFor="select_date" className="grid-item">date</label>
    <div className="grid-item select" id="select_date">
      <Select
        name="minDate"
        options={dates}
      />
      <span> ~ </span>
      <Select
        name="maxDate"
        options={dates}
      />
    </div>
    <label htmlFor="select_category" className="grid-item">category</label>
    <div className="grid-item select">
      <Select
        name="selectCategory"
        id="selectCategory"
        options={category}
      />
    </div>
    { crimeCheckboxes &&
    <div className="grid-item whole-row">
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
    </div> }
    <Button type="submit" className="grid-item whole-row">SEARCH</Button>
  </Form>
);

export default reduxForm({
  form: 'search',
})(SearchForm);