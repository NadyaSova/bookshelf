const booksLoadingStart = () => {
    return { type: 'FETCH_BOOKS_REQUEST' };
}

const booksFiltered = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: books
    };
}

const booksLoadingError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
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
}

const addBookToLibrary = (book) => {
    return {
        type: 'ADD_BOOK_TO_LIBRARY',
        payload: book
    }
}

const removeBookFromLibrary = (book) => {
    return {
        type: 'REMOVE_BOOK_FROM_LIBRARY',
        payload: book
    }
}

const addSampleBooksToLibrary = () => {
    return {
        type: 'ADD_SAMPLE_TO_LIBRARY'
    }
}

const removeAllFromLibrary = () => {
    return {
        type: 'REMOVE_ALL_FROM_LIBRARY'
    }
}

export {
    fetchBooks,
    addSampleBooksToLibrary,
    addBookToLibrary,
    removeBookFromLibrary,
    removeAllFromLibrary
}