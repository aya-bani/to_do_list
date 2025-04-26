import React, { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');

  // Add a new task
  const handleAddTask = () => {
    if (taskText.trim() !== '' && taskDueDate !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        dueDate: new Date(taskDueDate),
      };
      setTasks([...tasks, newTask]);
      setTaskText('');
      setTaskDueDate('');
    }
  };

  // Toggle task completion
  const handleToggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter overdue and approaching tasks
  const overdueTasks = tasks.filter(task => {
    const now = new Date();
    return !task.completed && task.dueDate < now;
  });

  const approachingTasks = tasks.filter(task => {
    const now = new Date();
    const timeDiff = task.dueDate - now;
    const oneDay = 24 * 60 * 60 * 1000;
    return !task.completed && timeDiff > 0 && timeDiff <= oneDay;
  });

  return (
    <div  style={{
      padding: '40px',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      border: '2px solid #ccc', // Light gray border
      borderRadius: '10px', // Rounded corners
      backgroundColor: '#f9f9f9', // Light background color
    }}>
<h1 style={{ textAlign: 'center', color: '#4A90E2', marginBottom: '30px' }}>
        Todo List with Due Date Reminder
      </h1>
      {/* Progress bar */}
      <ProgressBar items={tasks} />

      {/* Add new task */}
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task list */}
      <ul style={{ marginTop: '20px' }}>
        {tasks.map(task => (
          <li key={task.id} style={{
            backgroundColor: '#f9f9f9',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              style={{ marginRight: '10px' }}
            />
            {task.text} (Due: {task.dueDate.toLocaleDateString()})
            <button
              onClick={() => handleDeleteTask(task.id)}
              style={{
                padding: '5px 10px',
                borderRadius: '5px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Due date reminders */}
      <div style={{ marginTop: '20px' }}>
        {overdueTasks.length > 0 && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            <h3>Overdue Tasks:</h3>
            <ul>
              {overdueTasks.map(task => (
                <li key={task.id}>{task.text} (Due: {task.dueDate.toLocaleDateString()})</li>
              ))}
            </ul>
          </div>
        )}

        {approachingTasks.length > 0 && (
          <div style={{ color: 'orange' }}>
            <h3>Tasks Approaching Deadline:</h3>
            <ul>
              {approachingTasks.map(task => (
                <li key={task.id}>{task.text} (Due: {task.dueDate.toLocaleDateString()})</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
