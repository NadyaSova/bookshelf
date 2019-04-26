import React from 'react';
import { BookDrawing } from '.';

const HorizontalBookPileDrawing = ({ books, x, y }) => {
    const maxHeight = Math.max(...books.map(book => book.height));
    var bookY = y;

    const bookDrawings = books.map((book) => {
        const bookX = Math.floor(x + (maxHeight - book.height) / 2);
        bookY -= book.width;
        return (<BookDrawing
            key={book.id}
            title={book.title}
            authors={book.authors}
            x={bookX}
            y={bookY}
            width={book.width}
            height={book.height}
        />);
    });
    return (
        <React.Fragment>
            {bookDrawings}
        </React.Fragment>
    );
};

export default HorizontalBookPileDrawing;