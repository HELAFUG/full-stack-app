import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
    const [title, setTitle] = useState(''); // State for the title input
    const [description, setDescription] = useState(''); // State for the description input

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (title && description) { // Ensure both fields are filled
            onAdd({ title, description }); // Call the parent function to add the new To-Do
            setTitle(''); // Clear the title input
            setDescription(''); // Clear the description input
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Update title state
                placeholder="Title"
                required // Make the input required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Update description state
                placeholder="Description"
                required // Make the input required
            />
            <button type="submit">Add</button> {/* Submit button */}
        </form>
    );
};

export default TodoForm;