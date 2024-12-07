import React, { useState } from 'react';
import axios from 'axios';

function AddTask({ fetchTasks }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addTask = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/', { title, description });
        fetchTasks();
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={addTask}>
            <input 
                type="text" 
                placeholder="Task title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Task description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
