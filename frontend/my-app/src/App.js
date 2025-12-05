import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import { fetchTodos, createTodo, fetchTodoById } from './api';
import './App.css'; // or './index.css' if using Tailwind

const App = () => {
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState('');
    const [fetchedTodo, setFetchedTodo] = useState(null);
    const [todoId, setTodoId] = useState('');

    // Load all todos when the component mounts
    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        try {
            const response = await fetchTodos();
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleAdd = async (newTodo) => {
        try {
            await createTodo(newTodo);
            setMessage('To-Do item added successfully!');
            loadTodos(); // Refresh the list
        } catch (error) {
            console.error('Error creating todo:', error);
            setMessage('Failed to add To-Do item.');
        }
    };

    const handleFetchTodoById = async () => {
        try {
            if(todoId) {
                const response = await fetchTodoById(Number(todoId));
                setFetchedTodo(response.data);
                setMessage('');
            } else {
                setMessage('Please enter a valid ID.');
            }
        } catch (error) {
            console.error('Error fetching todo by ID:', error);
            setMessage('To-Do item not found.');
            setFetchedTodo(null);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Create To-Do Item</h1>
            <TodoForm onAdd={handleAdd} />
            {message && <p>{message}</p>}
            <div>
                <h2>Fetch To-Do by ID</h2>
                <input
                    type="number"
                    value={todoId}
                    onChange={(e) => setTodoId(e.target.value)}
                    placeholder="Enter To-Do ID"
                />
                <button onClick={handleFetchTodoById}>Get To-Do</button>
                {fetchedTodo && (
                    <div>
                        <h3>Fetched To-Do:</h3>
                        <p>Title: {fetchedTodo.title}</p>
                        <p>Description: {fetchedTodo.description}</p>
                        <p>Status: {fetchedTodo.done ? 'Completed' : 'Pending'}</p>
                    </div>
                )}
            </div>
            <h2>All To-Dos</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.title}</strong>: {todo.description} ({todo.done ? 'Completed' : 'Pending'})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;