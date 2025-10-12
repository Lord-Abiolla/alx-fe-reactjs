import React from 'react';
import { useState } from 'react';

function AddTodoForm({ addText }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addText(text);
            setText('');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex justify-center items-center m-4'
        >
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
                className='p-3 bg-white rounded-2xl outline-0'
                data-testid="todo-input"
            />
            <button
                type="submit"
                className='p-3 bg-blue-950 m-2 text-white rounded-2xl cursor-pointer'
                data-testid="add-button"
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodoForm;