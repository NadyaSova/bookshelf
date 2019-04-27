const updateLibrary = (state, action) => {
    if (state === undefined)
        return [];

    switch (action.type) {
        case 'ADD_BOOK_TO_SHELF':
            const bookToAdd = action.payload;

            if (state.selectedBooks.indexOf(bookToAdd) >= 0)
                return state.selectedBooks;

            return [bookToAdd, ...state.selectedBooks];
        case 'REMOVE_BOOK_FROM_SHELF':
            const bookToRemove = action.payload;
            const selectedBooks = state.selectedBooks;

            let idx = selectedBooks.indexOf(bookToRemove);
            if (idx < 0)
                return state.selectedBooks;

            const books = [
                ...selectedBooks.slice(0, idx),
                ...selectedBooks.slice(idx + 1)
            ];
            return books;
        default:
            return state.selectedBooks;
    }
}

export default updateLibrary;