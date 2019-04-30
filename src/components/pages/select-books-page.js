import React from 'react';

import ErrorBoundary from '../../components/error-boundary';
import SearchFilter from '../../components/search-filter';
import FilteredBooksList from '../../components/filtered-books-list';
import SelectedBooks from '../../components/selected-books/selected-books';

const SelectBooksPage = () => {
    return (
        <ErrorBoundary>
            <div className='ml-4 mr-4 mt-2 mb-2'>
                <h2 className='mb-3'>Library</h2>
                <SearchFilter />
                <div className='row'>
                    <div className='col-sm-6 col-md-3'>
                        <FilteredBooksList />
                    </div>
                    <div className='col-sm-6 col-md-9'>
                        <SelectedBooks />
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default SelectBooksPage;