
const INITIAL_STATE = {task_list: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'FETCH_TASKS':
      return {
        ...state,
        task_list: action.payload
      }
  }
  return state;
}
