import { minBookHeight, maxBookHeight, minBookWidth, maxBookWidth } from './drawing-constants';

const ratioWidthToPageCount = 0.05;
const maxPageCountForMinWith = 80;


function populateBookSizes(arrBooks) {
    if (!arrBooks)
        return undefined;

    return arrBooks.map((book) => {
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
        minBookWidth + Math.floor((pageCount - maxPageCountForMinWith) * ratioWidthToPageCount)
    );
};

function getHeight() {
    return minBookHeight + Math.floor(Math.random() * (maxBookHeight - minBookHeight));
};

export default populateBookSizes;