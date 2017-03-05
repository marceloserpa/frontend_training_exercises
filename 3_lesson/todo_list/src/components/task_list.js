import React, { Component } from 'react';

import TaskListItem from './task_list_item';

class TaskList extends Component {

  renderList(){
    return this.props.tasks.map(task => <TaskListItem task={task} key={task.id} />);
  }

  render(){
    return (
      <div>
        {this.props.tasks && this.renderList()}
      </div>
    );
  }

}

export default TaskList;
