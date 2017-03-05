import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCandidates } from '../actions/index';

import Candidate from './candidate';

class Home extends Component {

  componentWillMount() {
    if(!this.props.candidates) {
      this.props.fetchCandidates();
    }
  }

  render(){
    if(!this.props.current) {
      return (<div>terminou</div>);
    }
    return (
      <div>
        <Candidate candidate={this.props.current} showChooser={true} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    candidates: state.candidates.next_candidates,
    current: state.candidates.current_candidate
  }
}


export default connect(mapStateToProps, {fetchCandidates})(Home);
