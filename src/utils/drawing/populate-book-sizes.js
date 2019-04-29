import {
    minBookHeight,
    maxBookHeight,
    minBookWidth,
    maxBookWidth,
    ratioBookWidthToPageCount,
    maxPageCountForMinWith
} from './drawing-constants';


function populateBookSizes(books) {
    if (!books)
        return undefined;

    return books.map((book) => {
        return {
            ...book,
            width: getWidth(book.pageCount),
            height: getHeight()
        };
    })
};

function getWidth(pageCount) {
    if (!pageCount || pageCount <= maxPageCountForMinWith)
        return minBookWidth;

    return Math.min(
        maxBookWidth,
        minBookWidth + Math.floor((pageCount - maxPageCountForMinWith) * ratioBookWidthToPageCount)
    );
};

function getHeight() {
    return minBookHeight + Math.floor(Math.random() * (maxBookHeight - minBookHeight));
};

export default populateBookSizes;