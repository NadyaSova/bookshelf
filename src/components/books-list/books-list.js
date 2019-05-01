import React from 'react';
import ErrorBoundary from '../error-boundary';
import Book from '../book';

import './books-list.css'

const BooksList = ({ books, onClick }) => {
    if (!books || books.length === 0)
        return <span></span>;

    const booksList = books.map((book) => {
        return (
            <Book
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
