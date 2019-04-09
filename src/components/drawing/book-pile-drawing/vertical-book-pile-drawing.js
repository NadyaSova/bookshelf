import React from 'react';
import BookDrawing from '../book-drawing';

const VerticalBookPileDrawing = ({ books, x, y }) => {
    var bookX = x;
    const bookDrawings = books.map((book, i) => {
        const res = (<BookDrawing
            key={book.id}
            title={book.title}
            x={bookX}
            y={y}
            width={book.width}
            height={book.height}
            vertical />);

        bookX += book.width;
        return res;
    });
    return (
        <React.Fragment>
            {bookDrawings}
        </React.Fragment>
    );
};
export default VerticalBookPileDrawing;