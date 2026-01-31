import React from 'react';
import TodoApp from '../Todo/TodoApp';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h2>Task 1: Enhanced Todo App</h2>
            <TodoApp />
        </div>
    );
};

export default Home;
