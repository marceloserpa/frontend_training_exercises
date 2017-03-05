import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask } from '../actions/index';

class TaskForm extends Component {

  state = {
    taskName: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    this.props.addTask(this.state.taskName);
  }

  render(){
    return (
      <div>
        <form className="form-inline" onSubmit={this.onSubmit.bind(this)}>
          <input type="text"className="form-control"
            name="taskName"
            value={this.state.taskName}
            onChange={this.handleChange} />
          <button className="btn btn-primary" >Add</button>
        </form>
      </div>
    );
  }

}

export default connect(null, { addTask })(TaskForm);
