import React, {Fragment} from 'react';
import BookPileDrawing from '../book-pile-drawing';
import { pileMargin } from '../../../helpers/drawing-constants';

const BookShelfDrawing = ({ shelf, y }) => {
    var width = pileMargin;
    return (
        <Fragment>
            {shelf.map(pile => {
                const pileDrawing = (
                    <BookPileDrawing
                        key={pile.books[0].id}
                        books={pile.books}
                        vertical={pile.vertical}
                        x={width}
                        y={y} />
                );
                width += (pile.width + pileMargin)
                return pileDrawing;
            })}
        </Fragment>
    );
}

export default BookShelfDrawing;