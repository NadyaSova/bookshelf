const booksLoadingStart = () => {
    return { type: 'FETCH_BOOKS_REQUEST' };
}

const booksFiltered = (filteredBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: filteredBooks
    };
}

const booksLoadingError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const addBookToShelf = (book) => {
    return {
        type: 'ADD_BOOK_TO_SHELF',
        payload: book
    }
}

const removeBookFromShelf = (book) => {
    return {
        type: 'REMOVE_BOOK_FROM_SHELF',
        payload: book
    }
}

const fetchBooks = (bookService, dispatch) => (term) => {
    if (!term) {
        dispatch(booksFiltered([]));
        return;
    }

    dispatch(booksLoadingStart());
    bookService.getBooks(term)
        .then((data) => dispatch(booksFiltered(data)))
        .catch((err) => dispatch(booksLoadingError(err)));

};

export {
    fetchBooks,
    addBookToShelf,
    removeBookFromShelf
};