import React from 'react';
import Task from './Task';

function TaskList({ tasks, fetchTasks }) {
    return (
        <div>
            {tasks.map(task => (
                <Task key={task._id} task={task} fetchTasks={fetchTasks} />
            ))}
        </div>
    );
}

export default TaskList;
