const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if (task.id === action.payload) {
              return {
                ...task,
                isDone: !task.isDone,
              };
            }
            return task;
          }),
        };
  
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if (task.id === action.payload.taskId) {
              return {
                ...task,
                description: action.payload.updatedDescription,
              };
            }
            return task;
          }),
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  