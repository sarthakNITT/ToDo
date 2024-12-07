import React from 'react';
import axios from 'axios';

function Task({ task, fetchTasks }) {
    const deleteTask = async () => {
        await axios.delete(`http://localhost:3001/${task._id}`);
        fetchTasks();
    };

    const toggleCompletion = async () => {
        await axios.put(`http://localhost:3001/${task._id}`, { completed: !task.completed });
        fetchTasks();
    };

    return (
        <div>
            <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </h3>
            <p>{task.description}</p>
            <button onClick={toggleCompletion}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
}

export default Task;
