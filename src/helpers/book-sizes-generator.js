import { minBookHeight, maxBookHeight, minBookWidth, maxBookWidth } from './drawing-constants';

const widthToPageCountRatio = 0.08;
const maxPageCountForMinWith = 80;


const bookSizesGenerator = (arrBooks) => {
    if (!arrBooks)
        return undefined;

    return arrBooks.map((book) => {
        return {
            id: book.id,
            title: book.title,
            authors: getBookAuthors(book),
            width: widthForPageCount(book.pageCount),
            height: randomHeight()
        };
    })
};

function widthForPageCount(pageCount) {
    var width = minBookWidth;

    if (pageCount > maxPageCountForMinWith) {
        width += (pageCount - maxPageCountForMinWith) * widthToPageCountRatio;
        if (width >= maxBookWidth)
            width = maxBookWidth;
        else
            width = Math.floor(width);
    }
    return width;
}

function randomHeight() {
    return minBookHeight + Math.floor(Math.random() * (maxBookHeight - minBookHeight));
}

function getBookAuthors(book) {
    if (!book.authors)
        return '';
    return book.authors.reduce((prev, cur) => { return prev + ', ' + cur })
}

export default bookSizesGenerator;