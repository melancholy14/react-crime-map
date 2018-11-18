// @flow

import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import {
  AnalysePageProps as Props,
  AnalysePageState as State,
} from '../../utils/types';

import {
  Modal,
} from '../../components';

import News from './news';
import Graphs from './graphs';

const StyledTabs = styled.div`
  position: relative;
  height: 100%;

  .tabs {
    overflow: hidden;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    height: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    button {
      background-color: inherit;
      // float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 1rem;
      transition: 0.3s;
      font-size: medium;

      &:hover {
        background-color: #ddd;
      }

      &.active {
        background-color: #ccc;
      }
    }
  }

  .tab {
    display: none;
    // padding: 6px 12px;
    width: 100%;
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

    &.active {
      display: block;
    }
  }
`;

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
    } = this.props;

    const {
      show,
      select,
    } = this.state;

    return (<Modal
      show={show}
      onClose={this.toggleShow}
      fixedBottom
    >
      <StyledTabs>
        <div className="tabs">
          <button className={`${select === 0 ? 'active' : ''}`} onClick={this.select(0)}>Graphs</button>
          <button className={`${select === 1 ? 'active' : ''}`} onClick={this.select(1)}>News</button>
        </div>
        <div className={`tab ${select === 0 ? 'active' : ''}`}>
          <Graphs
            graph={graph}
          />
        </div>
        <div className={`tab ${select === 1 ? 'active' : ''}`}>
          <News
            news={news}
          />
        </div>
      </StyledTabs>
    </Modal>);
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.analyse,
  }
}

export default connect(mapStateToProps)(AnalysePage);