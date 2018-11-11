// @flow
import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';

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
      <Field
        name="minDate"
        component="select"
      >
      {
        dates && dates.map(({value: val, text = val}) => <option key={val} value={val}>{text}</option>)
      }
      </Field>
      <span> ~ </span>
      <Field
        name="maxDate"
        component="select"
      >
      {
        dates && dates.map(({value: val, text = val}) => <option key={val} value={val}>{text}</option>)
      }
      </Field>
    </div>
    <label htmlFor="select_category" className="grid-item">category</label>
    <div className="grid-item select">
      <Field
        name="selectCategory"
        id="selectCategory"
        component="select"
        // onChange={onChangeCategory}
      >
      {
        category && category.map(({value: val, text = val}) => <option key={val} value={val}>{text}</option>)
      }
      </Field>
    </div>
    { crimeCheckboxes &&
    <div className="grid-item whole-row">
      {
        crimeCheckboxes && crimeCheckboxes.map(({ url, checked, name }) => (<div className="each-crime" key={url}>
          <Field
            component="input"
            type="checkbox"
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
//   <form className="grid-container">
//   <label htmlFor="select_date" className="grid-item">date</label>
//   <div className="grid-item select">
//     <Select
//       onChange={onChangeDate('min')}
//       value={min}
//       options={dates}
//     />
//     <span> ~ </span>
//     <Select
//       onChange={onChangeDate('max')}
//       value={max}
//       options={dates}
//     />
//   </div>
//   <label htmlFor="select_category" className="grid-item">category</label>
//   <div className="grid-item select">
//     <Select
//       id="select_category"
//       onChange={onChangeCategory}
//       options={category}
//     />
//   </div>
//   { crimeCheckboxes &&
//   <div className="grid-item whole-row">
//     {
//       crimeCheckboxes && crimeCheckboxes.map(({ url, checked, name }) => (<div className="each-crime" key={url}>
//         <Checkbox
//           value={url}
//           id={`checkbox_${url}`}
//           onChange={onCheckCategory(url)}
//           checked={checked}
//         />
//         <label htmlFor={`checkbox_${url}`}>{name}</label>
//         <span className="color" style={{backgroundColor: categoryColors[url]}}></span>
//       </div>))
//     }
//   </div> }
//   <Button onClick={onSearch} className="grid-item whole-row">SEARCH</Button>
// </form>
);

export default reduxForm({
  form: 'search',
})(SearchForm);