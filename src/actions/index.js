const booksFiltered = (filteredBooks) => {
    return {
        type: 'BOOKS_FILTERED',
        payload: filteredBooks
    };
}

const booksLoadingStart = () => {
    return { type: 'BOOKS_LOADING_START' };
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


export {
    booksFiltered,
    booksLoadingStart,
    addBookToShelf,
    removeBookFromShelf
};