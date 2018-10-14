import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

// import CrimeTable from './crimeTable';
import Graphs from './graphs';

const AnalyseContainer = styled.div`
  .tr {
    line-height: 2rem;

    .th {
      font-size: smaller;
    }

    .td {
      padding: 0 0.5rem;
    }
  }
`;

class AnalysePage extends React.PureComponent {
  static propTypes = {
    streetId: PropTypes.number,
    dateGraph: PropTypes.array,
    categoryGraph: PropTypes.array,
    outcomeGraph: PropTypes.array,
    crimeTable: PropTypes.array,
  };

  render(){
    const {
      dateGraph,
      categoryGraph,
      outcomeGraph,
    } = this.props;

    return (<AnalyseContainer>
      <button>Guardian News</button>
      <Graphs
        date={dateGraph}
        category={categoryGraph}
        outcome={outcomeGraph}
      />
      {/*
      <CrimeTable
        crimes={crimeTable}
      />
      */}
    </AnalyseContainer>);
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.analyse,
  }
}

export default connect(mapStateToProps)(AnalysePage);