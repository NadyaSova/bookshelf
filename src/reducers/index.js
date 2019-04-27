import DummyBookService from '../services/dummy-book-service';

const service = new DummyBookService();

const initialState = {
    filteredBooks: [],
    selectedBooks: [], //service._books,
    isLoadingBooks: false,
    loadingBooksError: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                filteredBooks: action.payload,
                isLoadingBooks: false,
                loadingBooksError: null
            }
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                isLoadingBooks: true,
                loadingBooksError: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                filteredBooks: [],
                isLoadingBooks: false,
                loadingBooksError: action.payload
            }
        case 'ADD_BOOK_TO_SHELF':
            const bookToAdd = action.payload;

            if (state.selectedBooks.indexOf(bookToAdd) >= 0)
                return state;

            return {
                ...state,
                selectedBooks: [bookToAdd, ...state.selectedBooks]
            };
        case 'REMOVE_BOOK_FROM_SHELF':
            const bookToRemove = action.payload;
            const selectedBooks = state.selectedBooks;

            const idx = selectedBooks.indexOf(bookToRemove);
            if (idx = 0)
                return state;

            const books = [
                ...selectedBooks.slice(0, idx),
                ...selectedBooks.slice(idx, 1)
            ];
            return {
                ...state,
                selectedBooks: books
            };
        default:
            return state;
    }

}

export default reducer;