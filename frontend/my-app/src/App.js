import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [healthStatus, setHealthStatus] = useState(null);
    const [error, setError] = useState(null);

    const checkHealth = () => {
        axios.get('http://127.0.0.1:8080/api/healthchecker')
            .then(response => {
                setHealthStatus(response.data.json);
                setError(null);
            })
            .catch(err => {
                setError("Failed to reach the server");
                setHealthStatus(null);
            });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Health Check</h1>
            <button onClick={checkHealth}>Check Health</button>
            {healthStatus && <p>Status: {healthStatus}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default App;