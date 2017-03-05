import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeTask } from '../actions/index';


class TaskListItem extends Component{

  completeTask(){
    this.props.completeTask(this.props.task.id);
    this.forceUpdate();
  }

  renderCheckbox(completed){
    if(completed){
      return (
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" value={this.props.task.id} defaultChecked />
          <span className="task-completed">{ this.props.task.text }</span>
        </label>
      )
    } else {
      return (
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" value={this.props.task.id} onClick={this.completeTask.bind(this)} />
          <span>{ this.props.task.text }</span>
        </label>
      )
    }
  };

  render(){
    return (
      <div className="form-check">
        { this.renderCheckbox(this.props.task.completed) }
      </div>
    )
  }

}

export default connect(null, { completeTask })(TaskListItem);
