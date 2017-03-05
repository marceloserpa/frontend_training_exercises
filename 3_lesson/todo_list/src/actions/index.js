
export function fetchTasks(){
  return {
    type: 'FETCH_TASKS',
    payload: initialTasks
  }
};

export function addTask(taskName){
  return {
    type: 'ADD_TASK',
    payload: taskName
  }
};

export function completeTask(taskId){
  return {
    type: 'COMPLETE_TASK',
    payload: taskId
  }
};

const initialTasks = [
  {id: 1, text: 'Lorem ipsum', completed: true},
  {id: 2, text: '2 - Lorem ipsum', completed: false}
];
