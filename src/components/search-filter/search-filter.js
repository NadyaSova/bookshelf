import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withBookService } from '../hoc';
import { booksFiltered, booksLoadingStart } from '../../actions';
import { compose } from '../../utils';

import './search-filter.css';

class SearchFilter extends Component {

    state = {
        term: 'abc'
    };

    onChange = (e) => {
        const term = e.target.value;
        this.setState({ term: term })
    }

    onSearch = () => {
        const { term } = this.state;
        const { bookService } = this.props;

        if (!term) {
            this.props.booksFiltered([]);
            return;
        }

        this.props.booksLoadingStart();
        bookService.getBooks(term).then((r) => {
            console.log(r);
            this.props.booksFiltered(r);
        });
    }

    render() {
        const { term } = this.state;

        return (
            <div className='search-filter input-group'>
                <input type='text' placeholder='book title' className='form-control'
                    value={term}
                    onChange={this.onChange}>
                </input>
                <div className='input-group-append'>
                    <button
                        type='button' className='btn btn-info'
                        onClick={this.onSearch}>
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = ({ isLoadingBooks }) => {
//     return {
//         isLoadingBooks: isLoadingBooks
//     };
// }

const mapDispatchToProps = {
    booksFiltered,
    booksLoadingStart    
};

export default compose(
    withBookService(),
    connect(null, mapDispatchToProps)
)(SearchFilter);