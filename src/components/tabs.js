import React from 'react';
import styled from 'styled-components';

const StyledTabs = styled.div`
  .tabs {
    overflow: hidden;
    background-color: #f1f1f1;
    border: 1px solid #ccc;

    button {
      background-color: inherit;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      transition: 0.3s;

      &:hover {
        background-color: #ddd;
      }

      .active {
        background-color: #ccc;
      }
    }
  }

  .tab {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;

    &.active {
      display: block;
    }
  }
`;

export default class Tabs extends React.Component {
  constructor() {
    super();

    this.state = {
      id: -1,
    };
  }

  select = (id) => () => {
    this.setState({ id });
  }

  render() {
    const { id } = this.state;

    return (
      <StyledTabs>
        <div className="tabs">
          <button className={`${id === 'london' && 'active'}`} onClick={this.select('london')}>London</button>
          <button className={`${id === 'seoul' && 'active'}`} onClick={this.select('seoul')}>Seoul</button>
          <button className={`${id === 'amsterdam' && 'active'}`} onClick={this.select('amsterdam')}>Amsterdam</button>
        </div>
        <div id="london" className={`tab ${id === 'london' && 'active'}`}>
          <h3>London</h3>
        </div>
        <div id="seoul" className={`tab ${id === 'seoul' && 'active'}`}>
          <h3>Seoul</h3>
        </div>
        <div id="amsterdam" className={`tab ${id === 'amsterdam' && 'active'}`}>
          <h3>Amsterdam</h3>
        </div>
      </StyledTabs>
    );
  }
}