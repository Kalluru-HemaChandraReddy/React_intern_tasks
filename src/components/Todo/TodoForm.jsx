import React, { useState } from 'react';

const TodoForm = ({ onAddTask }) => {
    const [input, setInput] = useState('');
    const [priority, setPriority] = useState('medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onAddTask(input, priority);
            setInput('');
            setPriority('medium');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task..."
                className="todo-input"
            />
            <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
                className="priority-select"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit" className="submit-btn">Add Task</button>
        </form>
    );
};

export default TodoForm;
