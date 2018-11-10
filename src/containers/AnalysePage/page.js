// @flow

import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import News from './news';
import Graphs from './graphs';

import {
  AnalysePageProps as Props
} from '../../utils/types';

const AnalyseStyle = styled.main`
  order: 3;
  padding: 1rem;
`;

class AnalysePage extends React.PureComponent<Props> {
  render(){
    const {
      graph,
      news,
    } = this.props;

    return (<AnalyseStyle>
      { graph &&
        <section>
          <h3>Graphs</h3>
          <Graphs
            graph={graph}
          />
        </section>
      }
      { news &&
        <section>
          <h3>News</h3>
          <News
            news={news}
          />
        </section>
      }
    </AnalyseStyle>);
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.analyse,
  }
}

export default connect(mapStateToProps)(AnalysePage);