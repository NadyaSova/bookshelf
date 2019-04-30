import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBookToShelf } from '../../actions';
import BooksList from '../books-list/books-list';
import LoadingSpinner from '../loading-spinner';
import ErrorIndicator from '../error-indicator';

import './filtered-books-list.css'

class FilteredBooksList extends Component {
    render() {
        const { books, addBookToShelf, loading, error } = this.props;

        if (loading)
            return <LoadingSpinner />;

        if (error)
            return <ErrorIndicator />

        return <BooksList books={books} onClick={addBookToShelf} />
    }
}

const mapStateToProps = ({bookFilter: { books, loading, error }}) => {
    return { books, loading, error };
}

const mapDispatchToProps = {
    addBookToShelf
};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredBooksList);