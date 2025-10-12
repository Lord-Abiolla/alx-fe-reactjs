import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

jest.mock('../components/AddTodoForm', () => ({ addText }) => (
    <button data-testid="mock-add-button" onClick={() => addText('New Todo')}>
        Add Todo
    </button>
));

describe('TodoList component', () => {
    test('render intial todo items', () => {
        render(<TodoList />);

        expect(screen.getByText('Item One')).toBeInTheDocument();
        expect(screen.getByText('Item Two')).toBeInTheDocument();
        expect(screen.getByText('Item Three')).toBeInTheDocument();
    });

    test('toggle todo completion on click', () => {
        render(<TodoList />);

        const todoItem = screen.getByTestId('todo-item-1');

        expect(todoItem).not.toHaveClass('line-through');
        fireEvent.click(todoItem);
        expect(todoItem.closest('li')).toHaveClass('line-through');
    });
})