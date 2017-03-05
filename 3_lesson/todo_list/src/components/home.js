import React, { Component } from 'react';
import { connect }  from 'react-redux';

import { fetchTasks } from '../actions/index';
import TaskForm from './task_form';
import TaskList from './task_list';


class Home extends Component {

  componentWillMount(){
    if(!this.props.tasks){
      this.props.fetchTasks();
    }
  }

  render(){
    return (
      <div>
        <TaskForm />
        <TaskList tasks={this.props.tasks} />
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    tasks: state.task.task_list
  }
}

export default connect(mapStateToProps, { fetchTasks })(Home);
