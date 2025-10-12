import React from 'react';
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { TrashIcon } from '@heroicons/react/24/solid';


function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Item One', completed: false },
        { id: 2, text: 'Item Two', completed: false },
        { id: 3, text: 'Item Three', completed: false },
    ]);

    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div
            className='p-7 bg-blue-100 m-4 rounded-2xl'
        >
            <h1
                className='flex items-center justify-center text-4xl font-bold underline p-4'
            >
                Todo List
            </h1>

            <AddTodoForm addText={addTodo} />

            {todos.length === 0 ? (
                <p>List is empty!</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`flex px-4 py-2 m-3 rounded-2xl transition-all duration-200
                            ${todo.completed ? 'bg-green-200 line-through text-gray-500' : 'bg-blue-300'}
                            `}
                        >
                            <span
                                onClick={() => toggleTodo(todo.id)}
                                className='flex-grow cursor-pointer select-none'
                                data-testid={`todo-item-${todo.id}`}
                            >
                                {todo.text}
                            </span>

                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className='px-3 py-1 text-red-800 cursor-pointer'
                                data-testid={`delete-button-${todo.id}`}
                            >
                                <TrashIcon className="h-6 w-6" />
                            </button>
                        </li>
                    ))}
                </ul>

            )}
        </div>
    );
}

export default TodoList;