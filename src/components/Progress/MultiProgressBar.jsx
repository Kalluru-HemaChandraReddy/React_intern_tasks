import React, { useState } from 'react';
import './MultiProgressBar.css';

const MultiProgressBar = () => {
    const [values, setValues] = useState([30, 50, 20, 70, 40]);

    const handleChange = (index, newValue) => {
        const updatedValues = [...values];
        updatedValues[index] = parseInt(newValue);
        setValues(updatedValues);
    };

    const calculateAverage = () => {
        return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
    };

    const getColorClass = (value) => {
        if (value < 40) return 'bg-red-500';
        if (value < 70) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const average = calculateAverage();

    return (
        <div className="progress-container">
            <div className="main-progress-section">
                <h3>Main Progress Bar (Average: {average}%)</h3>
                <div className="progress-bar-wrapper">
                    <div 
                        className={`progress-bar main-bar ${getColorClass(average)}`}
                        style={{ width: `${average}%` }}
                    >
                        {average}%
                    </div>
                </div>
            </div>

            <div className="sub-progress-section">
                <h3>Individual Progress Bars</h3>
                {values.map((value, index) => (
                    <div key={index} className="sub-progress-item">
                        <label>Progress {index + 1}</label>
                        <div className="input-bar-group">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={value}
                                onChange={(e) => handleChange(index, e.target.value)}
                                className="progress-slider"
                            />
                            <input
                                type="number"
                                min="0"
                                max="100"
                                value={value}
                                onChange={(e) => handleChange(index, e.target.value)}
                                className="progress-input"
                            />
                        </div>
                        <div className="progress-bar-wrapper">
                            <div 
                                className={`progress-bar sub-bar ${getColorClass(value)}`}
                                style={{ width: `${value}%` }}
                            >
                                {value}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiProgressBar;
