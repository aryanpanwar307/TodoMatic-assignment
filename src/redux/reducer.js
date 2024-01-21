
const initialState = {
    tasks: [],
    taskText: '',
    editedTaskText: '',
    editingIndex: null,
    filter: 'all',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { text: action.payload.text, completed: false }],
          taskText: '',
        };
  
      case 'TOGGLE_TASK':
        const updatedTasks = [...state.tasks];
        updatedTasks[action.payload.index].completed = !updatedTasks[action.payload.index].completed;
        return {
          ...state,
          tasks: updatedTasks,
        };
  
      case 'DELETE_TASK':
        const tasksAfterDelete = [...state.tasks];
        tasksAfterDelete.splice(action.payload.index, 1);
        return {
          ...state,
          tasks: tasksAfterDelete,
        };
  
      case 'EDIT_TASK':
        const tasksAfterEdit = [...state.tasks];
        tasksAfterEdit[action.payload.index].text = action.payload.newText;
        return {
          ...state,
          tasks: tasksAfterEdit,
          editingIndex: null,
        };
  
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload.filter,
        };
  
      case 'SET_TASK_TEXT':
        return {
          ...state,
          taskText: action.payload.text,
        };
  
      case 'SET_EDITED_TASK_TEXT':
        return {
          ...state,
          editedTaskText: action.payload.text,
        };

      case 'SET_EDITING_INDEX':
        return {
          ...state,
          editingIndex: action.payload.index,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  