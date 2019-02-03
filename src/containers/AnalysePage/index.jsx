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

import getAnalyseState from './selectors';
import {
  toggleShow,
} from './actions';

import News from './news';
import Graphs from './graphs';
import Neighbourhood from './neighbourhood';

class AnalysePage extends React.PureComponent<Props, State> {
  constructor() {
    super();

    this.state = {
      select: 0,
    };
  }

  toggleShow = () => {
    const {
      show,
      onToggleShow,
    } = this.props;

    onToggleShow(!show);
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
      show,
    } = this.props;

    const {
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
  ...getAnalyseState(state),
});

const mapDispatchToProps = dispatch => ({
  onToggleShow: show => dispatch(toggleShow(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalysePage);
