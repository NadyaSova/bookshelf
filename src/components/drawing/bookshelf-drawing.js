import React, { Fragment } from 'react';

import { BookPileDrawing, RackDrawing } from '.';
import { getEvenedPileMargin } from '../../utils/drawing';

const BookshelfDrawing = ({ shelf, y }) => {
    const evenedPileMargin = getEvenedPileMargin(shelf)    
    var x = evenedPileMargin;

    return (
        <Fragment>
            {shelf.map(pile => {
                const pileDrawing = (
                    <BookPileDrawing
                        key={pile.books[0].id}
                        books={pile.books}
                        vertical={pile.vertical}
                        x={x}
                        y={y} />
                );
                x += (pile.width + evenedPileMargin)
                return pileDrawing;
            })}
            <RackDrawing y={y} />
        </Fragment>
    );
}

export default BookshelfDrawing;