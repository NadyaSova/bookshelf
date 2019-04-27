import React, { Component } from 'react';

import ErrorBoundary from '../../components/error-boundary';
import SearchFilter from '../../components/search-filter';
import { FilteredBooksListContainer } from '../../components/books-list';
import SelectedBooks from '../../components/selected-books/selected-books';

import './select-books-page.css'


export default class SelectBooksPage extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div className='ml-4 mr-4 mt-2 mb-2'>
                    <h2 className='mb-3'>Library</h2>
                    <SearchFilter />
                    <div className='row'>
                        <div className='col-sm-6 col-md-3'>
                            <FilteredBooksListContainer />
                        </div>
                        <div className='col-sm-6 col-md-9'>
                            <SelectedBooks />
                        </div>
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}