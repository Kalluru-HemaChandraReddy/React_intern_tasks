import React from 'react';

const TodoItem = ({ task, onToggle, onDelete }) => {
    const priorityClass = `priority-${task.priority}`;

    return (
        <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="todo-checkbox"
                />
                <span className={`todo-text ${priorityClass}`}>{task.text}</span>
                <span className={`priority-badge ${priorityClass}`}>{task.priority}</span>
            </div>
            <button 
                onClick={() => onDelete(task.id)}
                className="delete-btn"
            >
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
