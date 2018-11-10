import styled from 'styled-components';

const SearchStyle = styled.aside`
  order: 1;
  margin: 0.5rem;
  padding: 0.5rem;

  .grid-container {
    display: grid;
    grid-template-rows: 2rem 2rem auto 2rem;
    grid-template-columns: 4.5rem auto;

    .grid-item {
      padding: 0.5rem;

      &.select {
        padding: 0.25rem 0.5rem;
      }

      &.whole-row {
        grid-column-start: 1;
        grid-column-end: 3;

        .each-crime {
          display: inline-block;

          min-width: 50%;
          @media screen and (max-width: 400px) {
            min-width: 75%;
          }
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
    }

    & > label {
      font-size: smaller;
      text-transform: capitalize;
      font-weight: bold;
    }
  }

  button {     
    padding: 0.3rem 1rem;
  }
`;

export default SearchStyle;