import React, { Component } from 'react';
import { connect } from 'react-redux';

import { approveCandidate } from '../actions/index';


class Candidate extends Component {

  approve(){
    this.props.approveCandidate(this.props.candidate);
  }

  render(){
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail text-center" >
            <img src={this.props.candidate.imageUrl} alt={this.props.candidate.name} style={{width: 250, height: 250}} />
            <div className="caption">
              <br />
              <h3>{this.props.candidate.name}</h3>
              <p>
                <a href="#" className="btn btn-primary" role="button" onClick={this.approve.bind(this)}>Approve</a>
                <a href="#" className="btn btn-default" role="button">Reject</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(null, { approveCandidate })(Candidate);
