import React from 'react';
import { Stage, Layer } from 'react-konva';

import BookShelfDrawing from '../book-shelf-drawing';
import { shelfHeight } from '../../../helpers/drawing-constants'; //todo:move to drawing
import { bookSizesGenerator, pilesGenerator } from '../../../helpers';

const BookLibraryDrawing = ({ books, y }) => {
    if (!books || books.length === 0) {
        return null;
    }

    const booksWithSizes = bookSizesGenerator(books);
    console.log('Drawing books', booksWithSizes);


    const maxWidth = 700;//window.innerWidth - pileMargin;
    const shelves = pilesGenerator(booksWithSizes, maxWidth);
    console.log('Shelves', shelves);

    var shelfY = y;
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {
                    shelves.map(shelf => {
                        const shelfDrawing = <BookShelfDrawing shelf={shelf} y={shelfY} />;
                        shelfY += shelfHeight;
                        return shelfDrawing;
                    })
                }
            </Layer>
        </Stage>
    );
}

export default BookLibraryDrawing;