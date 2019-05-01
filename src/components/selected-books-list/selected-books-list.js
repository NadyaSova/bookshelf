import React, { Component } from 'react';
import Book from '../book';
import ErrorBoundary from '../error-boundary';

import './selected-books-list.css'

export default class SelectedBooksList extends Component {
    render() {
        const { books, onClick } = this.props;
        if (!books || books.length === 0)
            return <span></span>;

        const booksList = books.map((book) => {
            return (
                <Book
                    book={book}
                    key={book.id}
                    onClick={onClick}
                    showClose={true}/>
            );
        });
        return (
            <ErrorBoundary>
                <div className='card-columns' id='books-list'>{booksList}</div>
            </ErrorBoundary>
        );
    }
}
