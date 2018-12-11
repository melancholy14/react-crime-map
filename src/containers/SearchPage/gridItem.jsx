// @flow

import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 0.5rem;
  display: inline-block;
  min-width: 4.5rem;

  & > label {
    font-size: smaller;
    text-transform: capitalize;
    font-weight: bold;
  }

  &.select {
    padding: 0.25rem 0.5rem;

    @media screen and (min-width: 425px) {
      min-width: 15rem;
    }
  }

  &.crimes, &.buttons {
    // grid-column-start: 1;
    // grid-column-end: 3;
    width: calc(100% - 1rem);
  }

  &.crimes {
    height: 5.5rem
    overflow: auto;

    @media screen and (min-width: 768px) {
      height: initial;
    }

    .each-crime {
      display: inline-block;

      min-width: 50%;
      // @media screen and (max-width: 400px) {
      //   min-width: 75%;
      // }
      @media screen and (min-width: 768px) {
        min-width: calc(100%/3);
      }
      @media screen and (min-width: 1024px) {
        min-width: 25%;
      }

      font-size: small;
      line-height: 1rem;
      vertical-align: middle;

      label {
        font-size: smaller;
        font-weight: bolder;
      }

      .color {
        width: 0.75rem;
        height: 0.75rem;
        display: inline-block;
        border-radius: 0.5rem;
        margin: 0 0.3rem;
      }
    }
  }

  &.buttons {
    button {
      width: 100%;
    }
  }
`;

const GridItem = ({ id, className, children }: {
  id?: string | number | null,
  className?: string,
  children: any,
}) => (
  <Div id={id} className={className}>
    { children }
  </Div>
);

GridItem.defaultProps = {
  id: null,
  className: '',
};

export default GridItem;
