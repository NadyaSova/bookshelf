import DummyBookService from '../services/dummy-book-service';
const dummyService = new DummyBookService();

const updateLibrary = (state, action) => {
    if (state === undefined)
        return [];

    switch (action.type) {
        case 'ADD_BOOK_TO_LIBRARY':
            const bookToAdd = action.payload;

            if (state.selectedBooks.find(book => book.id === bookToAdd.id) !== undefined)
                return state.selectedBooks;

            return [bookToAdd, ...state.selectedBooks];
        case 'REMOVE_BOOK_FROM_LIBRARY':
            const bookToRemove = action.payload;
            const selectedBooks = state.selectedBooks;

            let idx = selectedBooks.indexOf(bookToRemove);
            if (idx < 0)
                return state.selectedBooks;

            return [
                ...selectedBooks.slice(0, idx),
                ...selectedBooks.slice(idx + 1)
            ];
        case 'ADD_SAMPLE_TO_LIBRARY':
            const newBooks = dummyService._books.filter(b =>
                state.selectedBooks.find(book => book.id === b.id) === undefined);
            return [
                ...newBooks,
                ...state.selectedBooks
            ];
        case 'REMOVE_ALL_FROM_LIBRARY':
            return [];
        default:
            return state.selectedBooks;
    }
}

export default updateLibrary;