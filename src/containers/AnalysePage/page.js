// @flow

import React from 'react';
import { connect } from 'react-redux';

import News from './news';
import Graphs from './graphs';

import {
  AnalysePageProps as Props
} from '../../utils/types';

class AnalysePage extends React.PureComponent<Props> {
  render(){
    const {
      dateGraph,
      categoryGraph,
      outcomeGraph,
      news,
    } = this.props;

    return (<div>
      { dateGraph &&
        <section>
          <h3>Graphs</h3>
          <Graphs
            date={dateGraph}
            category={categoryGraph}
            outcome={outcomeGraph}
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
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.analyse,
  }
}

export default connect(mapStateToProps)(AnalysePage);