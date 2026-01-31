import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterControls from './FilterControls';
import './TodoApp.css';

const TodoApp = () => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    });
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text, priority) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
            priority
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'active') return !task.completed;
        return true;
    });

    return (
        <div className="todo-app">
            <TodoForm onAddTask={addTask} />
            <FilterControls filter={filter} setFilter={setFilter} taskCount={filteredTasks.length} />
            <TodoList 
                tasks={filteredTasks} 
                onToggle={toggleTask} 
                onDelete={deleteTask}
            />
        </div>
    );
};

export default TodoApp;
