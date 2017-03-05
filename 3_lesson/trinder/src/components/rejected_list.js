import React, { Component } from 'react';
import { connect } from 'react-redux';

import Candidate from './candidate';


class RejectedList extends Component {

  renderList(){
    return this.props.rejected_list.map(rejected => {
      return <Candidate candidate={rejected} key={rejected.id} showChooser={false} showChatButton={false} />
    });
  }

  render(){
    console.log(this.props)
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    rejected_list: state.candidates.rejected_list,
  }
}

export default connect(mapStateToProps)(RejectedList);
