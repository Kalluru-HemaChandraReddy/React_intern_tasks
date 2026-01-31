import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onToggle, onDelete }) => {
    if (tasks.length === 0) {
        return <p className="no-tasks">No tasks found. Add one to get started!</p>;
    }

    return (
        <ul className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TodoList;
