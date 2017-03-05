import React, { Component } from 'react';

class TaskListItem extends Component{

  renderCheckbox(completed){
    if(completed){
      return <input className="form-check-input" type="checkbox" value="" defaultChecked />
    } else {
      return <input className="form-check-input" type="checkbox" value="" />
    }
  }

  render(){
    return (
      <div className="form-check">
        <label className="form-check-label">
          { this.renderCheckbox(this.props.task.completed)}
          <span className="strikethrough">{ this.props.task.text }</span>
        </label>
      </div>
    )
  }

}

export default TaskListItem;
