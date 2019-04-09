import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBookToShelf } from '../../actions';
import BooksList from './books-list';
import LoadingSpinner from '../loading-spinner';

class FilteredBooksList extends Component {

    render() {
        const { filteredBooks, isLoadingBooks, addBookToShelf } = this.props;

        if (isLoadingBooks)
            return <LoadingSpinner />;

        return <BooksList
            books={filteredBooks}
            onBookSelected={addBookToShelf}
        />
    }
}

const mapStateToProps = ({ filteredBooks, isLoadingBooks }) => {
    return {
        filteredBooks: filteredBooks,
        isLoadingBooks: isLoadingBooks
    }
}

const mapDispatchToProps = {
    addBookToShelf
};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredBooksList);