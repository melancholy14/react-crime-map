import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

import News from './news';
import Graphs from './graphs';

const AnalyseContainer = styled.div`
  .tr {
    line-height: 2rem;

    .th, .td {
      padding: 0 0.5rem;
      font-size: smaller;
    }
  }
`;

class AnalysePage extends React.PureComponent {
  static propTypes = {
    dateGraph: PropTypes.array,
    categoryGraph: PropTypes.array,
    outcomeGraph: PropTypes.array,
    crimeTable: PropTypes.array,
    news: PropTypes.array,
  };

  render(){
    const {
      dateGraph,
      categoryGraph,
      outcomeGraph,
      news,
    } = this.props;

    return (<AnalyseContainer>
      { dateGraph &&<h3>Graphs</h3> }
      <Graphs
        date={dateGraph}
        category={categoryGraph}
        outcome={outcomeGraph}
      />
      { news && <h3>News</h3> }
      { news &&
      <News
        news={news}
      /> }
    </AnalyseContainer>);
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.analyse,
  }
}

export default connect(mapStateToProps)(AnalysePage);