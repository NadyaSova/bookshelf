const minWidth = 30;
const maxWidth = 60;
const widthToPageCountRatio = 0.08;
const maxPageCountForMinWith = 80;

const minHeight = 150;
const maxHeight = 200;


const bookSizesGenerator = (arrBooks) => {
    if (!arrBooks)
        return undefined;

    return arrBooks.map((book) => {
        return {
            id: book.id,
            title: book.title,
            width: widthForPageCount(book.pageCount),
            height: randomHeight()
        };
    })
};

function widthForPageCount(pageCount) {
    var width = minWidth;

    if (pageCount > maxPageCountForMinWith) {
        width += (pageCount - maxPageCountForMinWith) * widthToPageCountRatio;
        if (width >= maxWidth)
            width = maxWidth;
        else
            width = Math.floor(width);
    }
    return width;
}

function randomHeight() {
    return minHeight + Math.floor(Math.random() * (maxHeight - minHeight));
}

export default bookSizesGenerator;