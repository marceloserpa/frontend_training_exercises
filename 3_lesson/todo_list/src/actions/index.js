
export function fetchTasks(){
  return {
    type: 'FETCH_TASKS',
    payload: initialTasks
  }
};

const initialTasks = [
  {id: 1, text: 'Lorem ipsum', completed: true},
  {id: 2, text: '2 - Lorem ipsum', completed: false}
];
