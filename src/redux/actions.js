
export const addTask = (text) => ({
  type: 'ADD_TASK',
  payload: {
    text,
  },
});

export const toggleTask = (index) => ({
  type: 'TOGGLE_TASK',
  payload: {
    index,
  },
});

export const deleteTask = (index) => ({
  type: 'DELETE_TASK',
  payload: {
    index,
  },
});

export const editTask = (index, newText) => ({
  type: 'EDIT_TASK',
  payload: {
    index,
    newText,
  },
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: {
    filter,
  },
});

export const setTaskText = (text) => ({
  type: 'SET_TASK_TEXT',
  payload: {
    text,
  },
});

export const setEditedTaskText = (text) => ({
  type: 'SET_EDITED_TASK_TEXT',
  payload: {
    text,
  },
});

export const setEditingIndex = (index) => ({
  type: 'SET_EDITING_INDEX',
  payload: {
    index,
  },
});
