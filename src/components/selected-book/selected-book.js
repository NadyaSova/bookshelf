import React, { Component } from 'react';
import './selected-book.css';
import ErrorBoundary from '../error-boundary'

export default class SelectedBook extends Component {

    onSelected = () => {
        const { book, onBookSelected } = this.props;
        if (onBookSelected)
            onBookSelected(book);
    }

    getPublishingInfo = () => {
        const { book } = this.props;
        const publishingInfo = book.pageCount ? book.pageCount + ' pages' : '';
        return  publishingInfo ;
    }

    render() {
        const { book, onRemove, onBookSelected } = this.props;
        const onCardClick = onRemove ? onRemove : onBookSelected ? this.onSelected : null;
        const publishingInfo = this.getPublishingInfo();

        return (
            <ErrorBoundary>
                <div className='book card bg-light border-info mb-1'>
                    <div className='card-body' onClick={onCardClick}>
                        <div className='book-image-container' >
                            <img src={book.img} alt="book cover" className='book-image'></img>
                        </div>

                        <div className='book-info-container' >
                            <div className='book-title mt-1 mb-1'>{book.title}</div>
                            <div className='book-authors mb-1'>{book.authors}</div>
                            <div className='book-info'>{publishingInfo}</div>
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