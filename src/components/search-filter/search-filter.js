import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withBookService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';

import './search-filter.css';

class SearchFilter extends Component {

    state = {
        term: ''
    };

    onChange = (e) => {
        const term = e.target.value;
        this.setState({ term: term })
    };

    onSearch = (e) => {        
        e.preventDefault();
        const { term } = this.state;
        const { fetchBooks } = this.props;
        fetchBooks(term);
    };

    render() {
        const { term } = this.state;

        return (
            <form onSubmit={this.onSearch}>
                <div className='row mb-3'>
                    <div className='search-filter input-group col-xs-12 col-sm-8 col-md-6 col-lg-5'>
                        <input type='text' placeholder='book title' className='form-control'
                            value={term}
                            onChange={this.onChange}>
                        </input>
                        <div className='input-group-append'>
                            <button
                                type='submit' className='btn btn-primary'
                                onClick={this.onSearch}>Search</button>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-4 col-md-6 col-lg-7 align-self-center'><em>
                        Search for books, click on the book to add it to your library</em>
                    </div>
                </div>
            </form>
        );
    }
};

const mapDispatchToProps = (dispatch, { bookService }) => {
    return {
        fetchBooks: fetchBooks(bookService, dispatch)
    }
};

export default compose(
    withBookService(),
    connect(null, mapDispatchToProps)
)(SearchFilter);