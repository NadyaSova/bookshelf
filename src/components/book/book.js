import React, { Component } from 'react';
import './book.css';
import ErrorBoundary from '../error-boundary'

export default class Book extends Component {

    onSelected = () => {
        const { book, onBookSelected } = this.props;
        onBookSelected(book);
    }

    render() {
        const { book, onRemove } = this.props;
        const authors = !book.authors ? "" : book.authors.reduce((acc, cur) => acc + ", " + cur);
        const pageCount = book.pageCount ? book.pageCount : '';
        return (
            <ErrorBoundary>
                <div className='book card bg-light border-info mb-1'>
                    <div className='card-body'>
                        <div className='book-image-container'
                            onClick={this.onSelected}>

                            <img src={book.img} alt="book cover" className='book-image'></img>
                        </div>

                        <div className='book-info-container'
                            onClick={this.onSelected}>

                            <h6>{book.title} </h6>

                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    <span className='term'>Authors:</span>
                                    <span>{authors}</span>
                                </li>
                                <li className='list-group-item'>
                                    <span className='term'>Published:</span>
                                    <span>{book.publishedDate}</span>
                                </li>
                                <li className='list-group-item'>
                                    <span className='term'>Page count:</span>
                                    <span>{pageCount}</span>
                                </li>
                            </ul>
                        </div>
                        {
                            onRemove &&
                            (<div>
                                <button type="button" className='close'
                                    onClick={onRemove}>×</button>
                            </div>)
                        }
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}