import React from 'react';
import ErrorBoundary from '../error-boundary';
import SelectedBook from '../selected-book';

import './books-list.css'

const BooksList = ({ books, onClick }) => {
    if (!books || books.length === 0)
        return <span></span>;

    const booksList = books.map((book) => {
        return (
            <SelectedBook
                key={book.id}
                book={book}
                onClick={onClick} />
        );
    });
    return (
        <ErrorBoundary>
            {booksList}
        </ErrorBoundary>
    );
};

export default BooksList;
