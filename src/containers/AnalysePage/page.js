// @flow

import React from 'react';
import { connect } from 'react-redux';

import {
  AnalysePageProps as Props,
  AnalysePageState as State,
} from '../../utils/types';

import {
  Modal,
  Tabs,
} from '../../components';

import News from './news';
import Graphs from './graphs';
import Neighbourhood from './neighbourbood';

class AnalysePage extends React.PureComponent<Props, State> {
  constructor() {
    super();

    this.state = {
      show: false,
      select: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.show && !this.state.show) {
      const {
        graph,
        news,
      } = this.props;

      this.setState({
        show: (!!graph) || (!!news),
      });
    }
  }

  toggleShow = () => this.setState({ show: !this.state.show })

  select = (select) => () => this.setState({ select });

  render(){
    const {
      graph,
      news,
      street,
      neighbourhood,
    } = this.props;
    
    const {
      show,
      select,
    } = this.state;

    return (<Modal
      title={street.name}
      show={show}
      onClose={this.toggleShow}
      fixedBottom
    >
      <Tabs
        select={select}
      >
        <Tabs.Title
          data={['Graphs', 'News', 'Neighbourhood']}
        />
        <Tabs.Body>
          <Graphs
            graph={graph}
          />
          <News
            news={news}
          />
          <div>
            <Neighbourhood
              data={neighbourhood}
            />
          </div>
        </Tabs.Body>
      </Tabs>
    </Modal>);
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.analyse,
  }
}

export default connect(mapStateToProps)(AnalysePage);