import React from 'react';
import { connect } from 'react-redux';
import {
  addTask,
  toggleTask,
  deleteTask,
  editTask,
  setFilter,
  setTaskText,
  setEditedTaskText,
  setEditingIndex,
} from './redux/actions';
import './App.css';

function App({
  tasks,
  taskText,
  editedTaskText,
  editingIndex,
  filter,
  addTask,
  toggleTask,
  deleteTask,
  editTask,
  setFilter,
  setTaskText,
  setEditedTaskText,
  setEditingIndex,
}) {
  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
    }
  };

  const handleToggleTask = (index) => {
    toggleTask(index);
  };

  const handleDeleteTask = (index) => {
    deleteTask(index);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setTaskText(tasks[index].text);
    setEditedTaskText(tasks[index].text);
  };

  const handleSaveEditedTask = () => {
    if (editedTaskText.trim() !== '') {
      editTask(editingIndex, editedTaskText);
      setTaskText('');
      setEditingIndex(null);
      setEditedTaskText('');
    }
  };

  const handleFilterTasks = (type) => {
    setFilter(type);
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="App">
      <h1>TodoMatic</h1>
      <div>
        <h3>What needs to be done ?</h3>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task"
        />
        <button className="add-button" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => handleFilterTasks('all')}>Show All Tasks</button>
        <button onClick={() => handleFilterTasks('active')}>Show Active Tasks</button>
        <button onClick={() => handleFilterTasks('completed')}>
          Show Completed Tasks
        </button>
      </div>
      <div className="remaining-tasks">
        {`${tasks.filter((task) => !task.completed).length} tasks remaining`}
      </div>
      <ul className="task-list">
        {getFilteredTasks().map((task, index) => (
          <li key={index} className={`task-item ${editingIndex === index ? 'editing' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            {editingIndex === index ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                  placeholder="Edit task"
                />
                <button className="save-button" onClick={handleSaveEditedTask}>
                  Save
                </button>
              </div>
            ) : (
              <span className={task.completed ? 'completed-task' : ''}>
                {task.text}
              </span>
            )}
            <button className="edit-button" onClick={() => handleEditTask(index)}>
              {editingIndex === index ? 'Cancel' : 'Edit Task'}
            </button>
            <button className="delete-button" onClick={() => handleDeleteTask(index)}>
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  taskText: state.taskText,
  editedTaskText: state.editedTaskText,
  editingIndex: state.editingIndex,
  filter: state.filter,
});

const mapDispatchToProps = {
  addTask,
  toggleTask,
  deleteTask,
  editTask,
  setFilter,
  setTaskText,
  setEditedTaskText,
  setEditingIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
