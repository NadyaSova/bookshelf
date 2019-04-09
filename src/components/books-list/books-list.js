import React, { Component } from 'react';
import Book from '../book';
import ErrorBoundary from '../error-boundary';

export default class BooksList extends Component {
    render() {
        const { books, onBookSelected, onRemove } = this.props;
        if (!books || books.length === 0)
            return <span></span>;

        const booksList = books.map((book) => {
            return (
                <Book
                    book={book}
                    key={book.id}
                    onBookSelected={onBookSelected}
                    onRemove={onRemove ? () => onRemove(book) : undefined} />
            );
        });
        return (
            <ErrorBoundary>
                {booksList}
            </ErrorBoundary>
        );
    }
}
