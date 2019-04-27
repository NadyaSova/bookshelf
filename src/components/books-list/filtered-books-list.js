import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBookToShelf } from '../../actions';
import BooksList from './books-list';
import LoadingSpinner from '../loading-spinner';
import ErrorIndicator from '../error-indicator';

class FilteredBooksListContainer extends Component {
    render() {
        const { books, loading, addBookToShelf, error } = this.props;

        if (loading)
            return <LoadingSpinner />;

        if (error)
            return <ErrorIndicator />

        return <BooksList books={books} onBookSelected={addBookToShelf} />
    }
}

const mapStateToProps = ({bookFilter: { books, loading, error }}) => {
    return { books, loading, error };
}

const mapDispatchToProps = {
    addBookToShelf
};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredBooksListContainer);