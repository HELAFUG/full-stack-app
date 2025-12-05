import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import { createTodo } from './api';

const App = () => {
    const [message, setMessage] = useState('');

    const handleAdd = async (newTodo) => {
        try {
            await createTodo(newTodo);
            setMessage('To-Do item added successfully!');
        } catch (error) {
            console.error('Error creating todo:', error);
            setMessage('Failed to add To-Do item.');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Create To-Do Item</h1>
            <TodoForm onAdd={handleAdd} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default App;