import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeBookFromShelf } from '../../actions';
import SelectedBooksList from '../selected-books-list'

import './selected-books.css'

class SelectedBooks extends React.Component {
    render() {
        const { selectedBooks, removeBookFromShelf } = this.props;
        if (!selectedBooks || selectedBooks.length === 0)
            return null;

        return (
            <div className='selected-books jumbotron'>
                <div className='generate-link'>
                    <Link to='/bookshelf' role='button' className='btn btn-link mb-1'>
                        <i className="fas fa-stream mr-1"></i>
                        Generate bookshelf
                        <i className="fas fa-angle-double-right ml-1"></i>
                    </Link>
                </div>

                <SelectedBooksList
                    books={selectedBooks}
                    onClick={removeBookFromShelf} />

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