import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBookToShelf } from '../../actions';
import BooksList from './books-list';
import LoadingSpinner from '../loading-spinner';
import ErrorIndicator from '../error-indicator';

class FilteredBooksListContainer extends Component {
    render() {
        const { filteredBooks, isLoadingBooks, addBookToShelf, loadingBooksError } = this.props;

        if (isLoadingBooks)
            return <LoadingSpinner />;

        if (loadingBooksError)
            return <ErrorIndicator />

        return <BooksList books={filteredBooks} onBookSelected={addBookToShelf} />
    }
}

const mapStateToProps = ({ filteredBooks, isLoadingBooks, loadingBooksError }) => {
    return { filteredBooks, isLoadingBooks, loadingBooksError };
}

const mapDispatchToProps = {
    addBookToShelf
};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredBooksListContainer);