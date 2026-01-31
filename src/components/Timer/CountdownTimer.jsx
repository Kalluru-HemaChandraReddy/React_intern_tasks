import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
    const [timeRemaining, setTimeRemaining] = useState(() => {
        const saved = localStorage.getItem('timer_state');
        if (saved) {
            const { remaining, lastUpdated, status } = JSON.parse(saved);
            if (status === 'running') {
                const elapsed = Date.now() - lastUpdated;
                return Math.max(0, remaining - elapsed);
            }
            return remaining;
        }
        return 300000; // 5 minutes default
    });

    const [isActive, setIsActive] = useState(() => {
        const saved = localStorage.getItem('timer_state');
        return saved ? JSON.parse(saved).status === 'running' : false;
    });

    const [isPaused, setIsPaused] = useState(() => {
        const saved = localStorage.getItem('timer_state');
        return saved ? JSON.parse(saved).status === 'paused' : false;
    });

    const [inputTime, setInputTime] = useState(5);

    useEffect(() => {
        let interval = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTimeRemaining(prev => {
                    const newTime = Math.max(0, prev - 10);
                    if (newTime === 0) {
                        setIsActive(false);
                    }
                    return newTime;
                });
            }, 10);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, isPaused]);

    useEffect(() => {
        const status = isActive ? (isPaused ? 'paused' : 'running') : 'stopped';
        localStorage.setItem('timer_state', JSON.stringify({
            remaining: timeRemaining,
            status: status,
            lastUpdated: Date.now()
        }));
    }, [timeRemaining, isActive, isPaused]);

    const handleStart = () => {
        if (!isActive) {
            setTimeRemaining(inputTime * 60 * 1000);
            setIsActive(true);
            setIsPaused(false);
        }
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    const handleStop = () => {
        setIsActive(false);
        setIsPaused(false);
        setTimeRemaining(inputTime * 60 * 1000);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setTimeRemaining(inputTime * 60 * 1000);
    };

    const minutes = Math.floor(timeRemaining / 60000);
    const seconds = Math.floor((timeRemaining % 60000) / 1000);
    const milliseconds = Math.floor((timeRemaining % 1000) / 10);

    const progress = (timeRemaining / (inputTime * 60 * 1000)) * 100;

    return (
        <div className="timer-container">
            <div className="timer-display">
                <div className="time">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}.{String(milliseconds).padStart(2, '0')}
                </div>
                <div className="progress-ring-container">
                    <svg className="progress-ring" width="150" height="150">
                        <circle
                            cx="75"
                            cy="75"
                            r="70"
                            style={{
                                strokeDasharray: `${progress * 4.4} 440`,
                                strokeDashoffset: 0
                            }}
                        />
                    </svg>
                </div>
            </div>

            <div className="timer-controls">
                <div className="input-group">
                    <label>Set Time (minutes):</label>
                    <input
                        type="number"
                        value={inputTime}
                        onChange={(e) => setInputTime(Math.max(1, parseInt(e.target.value) || 1))}
                        disabled={isActive}
                        min="1"
                        max="60"
                    />
                </div>

                <div className="button-group">
                    <button 
                        onClick={handleStart} 
                        disabled={isActive}
                        className="btn-start"
                    >
                        Start
                    </button>
                    <button 
                        onClick={handlePause} 
                        disabled={!isActive}
                        className={`btn-pause ${isPaused ? 'paused' : ''}`}
                    >
                        {isPaused ? 'Resume' : 'Pause'}
                    </button>
                    <button 
                        onClick={handleStop}
                        className="btn-stop"
                    >
                        Stop
                    </button>
                    <button 
                        onClick={handleReset}
                        className="btn-reset"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {timeRemaining === 0 && (
                <div className="timer-complete">⏰ Time's up!</div>
            )}
        </div>
    );
};

export default CountdownTimer;
