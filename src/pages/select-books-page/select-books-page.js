import React, { Component } from 'react';

import ErrorBoundary from '../../components/error-boundary';
import SearchFilter from '../../components/search-filter';
import { FilteredBooksList } from '../../components/books-list';
import SelectedBooks from '../../components/selected-books/selected-books';

import './select-books-page.css'


export default class SelectBooksPage extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div className="row book-search-row">
                    <div className='col-sm-6 col-lg-4'>
                        <SearchFilter />
                        <FilteredBooksList />
                    </div>
                    <div className='col-sm-6 col-lg-4'>
                        <SelectedBooks />
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}