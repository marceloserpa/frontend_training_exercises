import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { approveCandidate } from '../actions/index';


class Candidate extends Component {

  approve(){
    this.props.approveCandidate(this.props.candidate);
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="thumbnail text-center" >
            <img src={this.props.candidate.imageUrl} alt={this.props.candidate.name} style={{width: 250, height: 250}} />
            <div className="caption">
              <br />
              <h3>{this.props.candidate.name}</h3>
              {this.props.showChooser &&
                <p>
                  <a href="#" className="btn btn-primary" role="button" onClick={this.approve.bind(this)}>Approve</a>
                  <a href="#" className="btn btn-default" role="button">Reject</a>
                </p>
              }
              {this.props.showChatButton &&
                <Link to={"chat/"+this.props.candidate.id}>
                  Start Chat
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(null, { approveCandidate })(Candidate);
