// @flow

import React from 'react';
import styled from 'styled-components';

const StyledTabs = styled.div`
  position: relative;
  height: 100%;

  .tabs {
    overflow: hidden;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    button {
      background-color: inherit;
      // float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      transition: 0.3s;
      font-size: medium;

      &:hover {
        background-color: #ddd;
      }

      &.active {
        background-color: #ccc;
      }
    }
  }

  .tab {
    display: none;
    // padding: 6px 12px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-top: none;

    position: absolute;
    top: 3rem;
    bottom: 0;
    overflow: auto;

    animation: fadeEffect 1s;
    @keyframes fadeEffect {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    &.active {
      display: block;
    }
  }
`;

const TabsTitle = React.memo(({
  data,
  activeKey,
  onSelect,
}: {
  data: Array<string>,
  activeKey: number,
  onSelect: Function,
}) => (
  <div className="tabs">
    { data && data.map((text, index) => (
      <button
        key={text}
        type="button"
        className={`${(activeKey === index) ? 'active' : ''}`}
        onClick={onSelect(index)}
      >
        {text}
      </button>
    ))}
  </div>));

const TabsBody = React.memo(({
  activeKey,
  children,
}: {
  activeKey: number,
  children: any,
}) => (children && children.map((child, index) => (
  <div
    key={child.type.name || child.type}
    id={index}
    className={`tab ${activeKey === index ? 'active' : ''}`}
  >
    { child }
  </div>))
));

class Tabs extends React.Component<{
  onSelect?: Function,
  children?: any,
}, {
  id: number,
}> {
  static Title = TabsTitle;

  static Body = TabsBody;

  constructor() {
    super();

    this.state = {
      id: 0,
    };
  }

  select = (id: number) => () => {
    this.setState({ id });
  }

  renderChildren = () => {
    try {
      const {
        onSelect = this.select,
        children,
      } = this.props;

      const {
        id,
      } = this.state;

      return React.Children.map(children, (child, idx) => {
        if (child) {
          if (child.type === TabsBody) {
            return React.cloneElement(child, {
              activeKey: id,
              index: idx - 1,
            });
          }
          if (child.type === TabsTitle) {
            return React.cloneElement(child, {
              activeKey: id,
              onSelect,
            });
          }
        }
        return <div />;
      });
    } catch (err) {
      console.error(err);
      return <div />;
    }
  }

  render() {
    return (
      <StyledTabs>
        { this.renderChildren() }
      </StyledTabs>
    );
  }
}

export default Tabs;
