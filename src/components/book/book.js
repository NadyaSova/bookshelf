import React, { Component } from 'react';
import ErrorBoundary from '../error-boundary'

import './book.css';

export default class Book extends Component {
    render() {
        const { book, onClick, showClose } = this.props;
        const pages = book.pageCount ? `${book.pageCount} pages` : '';

        return (
            <ErrorBoundary>
                <div className='book card bg-light border-info mb-1'>
                    <div className='card-body' onClick={() => onClick(book)}>
                        <div className='book-image-container' >
                            <img src={book.img} alt="book cover" className='book-image'></img>
                        </div>

                        <div className='book-info-container' >
                            <div className='book-title mt-1 mb-1'>{book.title}</div>
                            <div className='book-authors mb-1'>{book.authors}</div>
                            <div className='book-info'>{pages}</div>
                        </div>
                        {
                            showClose &&
                            <div>
                                <button type="button" className='close'>×</button>
                            </div>
                        }
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}