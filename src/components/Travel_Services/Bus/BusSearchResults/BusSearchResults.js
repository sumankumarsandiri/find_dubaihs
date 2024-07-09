// src/components/SearchResults.js
import React, { useState, useEffect } from 'react';
import busData from '../Busdata';
import './BusSearchResults.css';
import { Link } from 'react-router-dom';

function BusSearchResults() {
    const [results, setResults] = useState([]);

    useEffect(() => {

        setResults(busData);
    }, []);

    return (
        <div className="search-results">
            <header className="results-header">
                {/* <h1>Search Results</h1> */}
            </header>
            <div className="bus-list">
                {results.length > 0 ? (
                    results.map((bus) => (
                        <div className="bus-item" key={bus.id}>
                            <p><strong>From:</strong> {bus.from}</p>
                            <p><strong>To:</strong> {bus.to}</p>
                            <p><strong>Departure:</strong> {bus.departure}</p>
                            <p><strong>Arrival:</strong> {bus.arrival}</p>
                            <p><strong>Price:</strong> {bus.price}</p>
                            <Link to='/busbooking'>
                                <button>Book Now</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No buses found</p>
                )}
            </div>
        </div>
    );
}

export default BusSearchResults;
