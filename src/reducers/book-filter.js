import DummyBookService from '../services/dummy-book-service';
const service = new DummyBookService();

const initialBookFilterState = {
    books: [],  //service._books,
    loading: false,
    error: null
};

const updateBookFilter = (state, action) => {
    if (state === undefined)
        return initialBookFilterState;

    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_REQUEST':
            return {
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.bookFilter;
    }
}

export default updateBookFilter;