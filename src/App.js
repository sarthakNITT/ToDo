import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await axios.get('http://localhost:3001/');
        setTasks(res.data);
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <AddTask fetchTasks={fetchTasks} />
            <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </div>
    );
}

export default App;
