import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const DefaultSelect = styled.select`
  border: 0;
  height: 1rem;
  min-width: 5rem;
  background-color: white;
`;

const Select = ({ id, value, options, onChange, className }) => 
(<DefaultSelect id={id} onChange={onChange} value={value} className={className}>
  {
    options && options.map(({value: val, text = val}) => <option key={val} value={val}>{text}</option>)
  }
</DefaultSelect>);

Select.propTypes = {
  id: PropTypes.any,
  value: PropTypes.any,
  className: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
}

export default Select;