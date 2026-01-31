import React, { useState } from 'react';
import UserForm from '../Forms/UserForm';
import MultiProgressBar from '../Progress/MultiProgressBar';
import CountdownTimer from '../Timer/CountdownTimer';
import SearchList from '../Search/SearchList';
import './Dashboard.css';

const Dashboard = () => {
    const [activeTask, setActiveTask] = useState(2);

    return (
        <div className="dashboard">
            <div className="task-tabs">
                <button 
                    className={activeTask === 2 ? 'active' : ''} 
                    onClick={() => setActiveTask(2)}
                >
                    Task 2: Form Validation
                </button>
                <button 
                    className={activeTask === 3 ? 'active' : ''} 
                    onClick={() => setActiveTask(3)}
                >
                    Task 3: Progress Bar
                </button>
                <button 
                    className={activeTask === 4 ? 'active' : ''} 
                    onClick={() => setActiveTask(4)}
                >
                    Task 4: Timer
                </button>
                <button 
                    className={activeTask === 5 ? 'active' : ''} 
                    onClick={() => setActiveTask(5)}
                >
                    Task 5: Search
                </button>
            </div>

            <div className="task-content">
                {activeTask === 2 && (
                    <div>
                        <h2>Task 2: Form Handling & Validation</h2>
                        <UserForm />
                    </div>
                )}
                {activeTask === 3 && (
                    <div>
                        <h2>Task 3: Dynamic Multi-Input Progress Bar</h2>
                        <MultiProgressBar />
                    </div>
                )}
                {activeTask === 4 && (
                    <div>
                        <h2>Task 4: Advanced Countdown Timer</h2>
                        <CountdownTimer />
                    </div>
                )}
                {activeTask === 5 && (
                    <div>
                        <h2>Task 5: Live Search with Highlighting</h2>
                        <SearchList />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
