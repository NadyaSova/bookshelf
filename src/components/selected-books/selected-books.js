import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeBookFromLibrary, removeAllFromLibrary } from '../../actions';
import SelectedBooksList from '../selected-books-list'

import './selected-books.css'

class SelectedBooks extends React.Component {
    render() {
        const { selectedBooks, removeBookFromLibrary, removeAllFromLibrary } = this.props;
        if (!selectedBooks || selectedBooks.length === 0)
            return null;

        return (
            <div className='selected-books jumbotron'>
            
                <button type="button" className='btn btn-link remove-all'
                    title="Remove all books from the library"
                    onClick={removeAllFromLibrary}>×</button>

                <div className='generate-link'>
                    <Link to='/bookshelf' role='button' className='btn btn-link mb-1'>
                        Generate bookshelf
                        <i className="fas fa-angle-double-right ml-1"></i>
                    </Link>
                </div>

                <SelectedBooksList
                    books={selectedBooks}
                    onClick={removeBookFromLibrary} />

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
    removeBookFromLibrary,
    removeAllFromLibrary
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedBooks);