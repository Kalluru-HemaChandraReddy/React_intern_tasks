import React, { useState } from 'react';
import './SearchList.css';

const SearchList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const names = [
        'Alice Anderson',
        'Bob Brown',
        'Charlie Chen',
        'Diana Davis',
        'Emily Evans',
        'Frank Foster',
        'Grace Green',
        'Henry Harris',
        'Iris Ingram',
        'James Johnson',
        'Karen King',
        'Liam Lee',
        'Maria Martinez',
        'Nathan Nelson',
        'Olivia Owen'
    ];

    const getHighlightedText = (text, highlight) => {
        if (!highlight.trim()) return text;

        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) => (
                    part.toLowerCase() === highlight.toLowerCase()
                        ? <b key={i} className="highlight">{part}</b>
                        : part
                ))}
            </span>
        );
    };

    const filteredNames = names.filter(name =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="search-container">
            <div className="search-input-group">
                <input
                    type="text"
                    placeholder="Search names..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <span className="result-count">Results: {filteredNames.length}</span>
            </div>

            <div className="search-results">
                {filteredNames.length > 0 ? (
                    <ul>
                        {filteredNames.map((name, index) => (
                            <li key={index} className="result-item">
                                {getHighlightedText(name, searchQuery)}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-results">
                        {searchQuery ? 'No results found' : 'Start typing to search'}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SearchList;
