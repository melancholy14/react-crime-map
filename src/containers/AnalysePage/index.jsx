// @flow

import React from 'react';
import { connect } from 'react-redux';

import type {
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
    const {
      show,
    } = this.state;

    if (!prevState.show && !show) {
      const {
        graph,
        news,
      } = this.props;

      this.setState({
        show: (!!graph) || (!!news),
      });
    }
  }

  toggleShow = () => {
    const {
      show,
    } = this.state;

    this.setState({ show: !show });
  }

  select = select => () => this.setState({ select });

  render() {
    const {
      graph,
      news,
      street: {
        name,
      } = {},
      neighbourhood,
    } = this.props;

    const {
      show,
      select,
    } = this.state;

    return (
      <Modal
        title={name}
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
            <Neighbourhood
              data={neighbourhood}
            />
          </Tabs.Body>
        </Tabs>
      </Modal>);
  }
}

const mapStateToProps = state => ({
  ...state.analyse,
});

export default connect(mapStateToProps)(AnalysePage);
