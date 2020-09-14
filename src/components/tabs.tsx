// @flow

import React from 'react';
import styled from 'styled-components';

const StyledTabs = styled.div`
  position: relative;
  height: 100%;
`;

const StyledTabsTitle = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledTabsTitleButton = styled.button`
  background-color: ${props => (props.active ? '#ccc' : 'inherit')};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: medium;

  &:hover {
    background-color: #ddd;
  }
`;

const StyledTab = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
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
`;

const TabsTitle = ({
  data,
  activeKey,
  onSelect,
}: {
  data: Array<string>,
  activeKey?: number,
  onSelect?: Function,
}) => (
  <StyledTabsTitle>
    { data && data.map((text, index) => (
      <StyledTabsTitleButton
        key={text}
        active={activeKey === index}
        onClick={onSelect && onSelect(index)}
      >
        {text}
      </StyledTabsTitleButton>
    ))}
  </StyledTabsTitle>);

TabsTitle.defaultProps = {
  activeKey: -1,
  onSelect: () => {},
};

const TabsBody = ({
  activeKey,
  titles,
  children,
}: {
  activeKey?: number,
  titles?: Array<string>,
  children: any,
}) => (children && children.map((child, index) => (
  <StyledTab
    key={titles && titles[index]}
    id={index}
    active={activeKey === index}
  >
    { child }
  </StyledTab>))
);

TabsBody.defaultProps = {
  activeKey: -1,
  titles: [],
};

class Tabs extends React.Component<{
  onSelect?: Function,
  children?: any,
}, {
  id: number,
}> {
  static Title = TabsTitle;

  static Body = TabsBody;

  titles = [];

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

      return React.Children.map(children, (child) => {
        if (child) {
          if (child.type === TabsBody) {
            return React.cloneElement(child, {
              activeKey: id,
              titles: this.titles,
            });
          }
          if (child.type === TabsTitle) {
            this.titles = child.props.data;

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
