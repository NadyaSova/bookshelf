import updateBookFilter from './book-filter';
import updateLibrary from './library'

const reducer = (state, action) => {
    return {
        bookFilter: updateBookFilter(state,action),
        selectedBooks: updateLibrary(state,action)
    };
}

export default reducer;