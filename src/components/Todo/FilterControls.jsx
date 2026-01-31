import React from 'react';

const FilterControls = ({ filter, setFilter, taskCount }) => {
    return (
        <div className="filter-controls">
            <button 
                className={filter === 'all' ? 'active' : ''} 
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button 
                className={filter === 'active' ? 'active' : ''} 
                onClick={() => setFilter('active')}
            >
                Active
            </button>
            <button 
                className={filter === 'completed' ? 'active' : ''} 
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
            <span className="task-count">Total: {taskCount}</span>
        </div>
    );
};

export default FilterControls;
