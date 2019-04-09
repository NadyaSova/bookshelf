import DummyBookService from '../services/dummy-book-service';

const service = new DummyBookService();

const initialState = {
    filteredBooks: [],
    selectedBooks: service._books,
    isLoadingBooks: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_FILTERED':
            return {
                ...state,
                filteredBooks: action.payload,
                isLoadingBooks: false
            }
        case 'BOOKS_LOADING_START':
            return {
                ...state,
                isLoadingBooks: true
            };
        case 'ADD_BOOK_TO_SHELF':
            const bookToAdd = action.payload;

            if (state.selectedBooks.indexOf(bookToAdd) >= 0)
                return state;

            return {
                ...state,
                selectedBooks: [...state.selectedBooks, bookToAdd]
            };
        case 'REMOVE_BOOK_FROM_SHELF':
            const bookToRemove = action.payload;
            const selectedBooks = state.selectedBooks;

            const idxBookToRemove = selectedBooks.indexOf(bookToRemove);
            if (idxBookToRemove < 0)
                return state;

            const books = [
                ...selectedBooks.slice(0, idxBookToRemove),
                ...selectedBooks.slice(idxBookToRemove + 1)
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