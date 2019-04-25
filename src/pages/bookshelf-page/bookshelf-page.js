import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BookLibraryDrawing from '../../components/drawing/book-library-drawing';

import './bookshelf-page.css';

class BookshelfPage extends Component {
    render() {
        const { selectedBooks } = this.props;

        return (
            <div className='container-fluid'>
                <Link to='/' className='btn btn-link'>
                    <i className="fas fa-angle-double-left mr-1"></i>
                    Back to books select
                </Link>
                <h2 className="ml-4">Bookshelf</h2>
                <BookLibraryDrawing books={selectedBooks} />
            </div>
        );
    }
}

const mapStateToProps = ({ selectedBooks }) => {
    return {
        selectedBooks: selectedBooks
    };
}

export default connect(mapStateToProps)(BookshelfPage);

