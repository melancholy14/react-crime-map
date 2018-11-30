import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

import { enterLink, updateLink } from './utils';

export default class Link extends React.Component {
  componentDidMount(){
    const {
      data,
    } = this.props;

    this.d3Link = d3.select(ReactDOM.findDOMNode(this)).datum(data).call(enterLink);
  }

  componentDidUpdate() {
    const {
      data,
    } = this.props;

    this.d3Link.datum(data).call(updateLink);
  }

  render() {
    return (<link className="link"></link>);
  }
}
