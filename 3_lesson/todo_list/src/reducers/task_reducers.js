
const INITIAL_STATE = {task_list: null};

export default function(state = INITIAL_STATE, action){

  const createTask = text => {
    let id = Math.max.apply(Math, state.task_list.map(t => t.id)) + 1;
    return {id: id, text: text, completed: false};
  };

  const completeTask = (id, task_list) => {
    let list =  task_list.map(t => {
      if(t.id == id) t.completed = true;
      return t;
    })
    return list;
  };

  switch(action.type){
    case 'FETCH_TASKS':
      return {
        ...state,
        task_list: action.payload
      }

    case 'ADD_TASK':
      return {
        ...state,
        task_list: state.task_list.concat(createTask(action.payload))
      }

    case 'COMPLETE_TASK':
      return {
        ...state,
        task_list: completeTask(action.payload, state.task_list)
      }
  }
  return state;
}
