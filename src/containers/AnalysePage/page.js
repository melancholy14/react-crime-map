import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

import CrimeTableModal from './crimeTableModal';

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
    crimes: PropTypes.array,
  };

  constructor(){
    super();

    this.state = {
      showModal: false,
    }
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal })

  render(){
    const { crimeTable } = this.props;

    return (<AnalyseContainer>
      { crimeTable && crimeTable.length > 0 &&
      <button onClick={this.toggleModal}>Crime List</button> }
      <button>Guardian News</button>
      <CrimeTableModal
        show={this.state.showModal}
        onClose={this.toggleModal}
        title="The list of crimes"
        crimes={crimeTable}
      />
    </AnalyseContainer>);
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.analyse,
  }
}

export default connect(mapStateToProps)(AnalysePage);