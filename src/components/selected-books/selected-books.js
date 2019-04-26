import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeBookFromShelf } from '../../actions';
import { SelectedBooksList } from '../books-list'

import './selected-books.css'

class SelectedBooks extends React.Component {
    render() {
        const { selectedBooks, removeBookFromShelf } = this.props;
        if (!selectedBooks || selectedBooks.length === 0)
            return null;

        return (
            <div className='selected-books jumbotron'>
                <h5 className='selected-books-header'>Selected books</h5>
                <SelectedBooksList
                    books={selectedBooks}
                    onRemove={removeBookFromShelf} />

                <div className='generate-link'>
                    <Link to='/bookshelf' role='button' className='btn btn-primary'>
                        Generate bookshelf
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ selectedBooks }) => {
    return {
        selectedBooks: selectedBooks
    };
}

const mapDispatchToProps = {
    removeBookFromShelf
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedBooks);