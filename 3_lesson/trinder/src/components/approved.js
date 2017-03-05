import React, { Component } from 'react';
import { connect } from 'react-redux';

import Candidate from './candidate';


class Approved extends Component {

  renderList(){
    return this.props.approved_list.map(approved => {
      return <Candidate candidate={approved} key={approved.id} showChooser={false} showChatButton={true} />
    });
  }

  render(){
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    approved_list: state.candidates.approved_list,
  }
}

export default connect(mapStateToProps)(Approved);
