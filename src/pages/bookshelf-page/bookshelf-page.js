import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BookLibraryDrawing from '../../components/drawing/book-library-drawing';

class BookshelfPage extends Component {
    render() {
        const { selectedBooks } = this.props;

        return (
            <Fragment>
                <h2>Bookshelf</h2>
                <Link to='/' className='btn btn-secondary'>Back to books select</Link>
                <BookLibraryDrawing books={selectedBooks} />
            </Fragment>
        );
    }
}

const mapStateToProps = ({ selectedBooks }) => {
    return {
        selectedBooks: selectedBooks
    };
}

export default connect(mapStateToProps)(BookshelfPage);

