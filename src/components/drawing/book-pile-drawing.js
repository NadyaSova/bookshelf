import React from 'react';

import { VerticalBookPileDrawing, HorizontalBookPileDrawing } from '.';

const BookPileDrawing = (props) => {
    const { books, vertical } = props;
    
    if (!books || books.length === 0)
        return null;

    if (vertical)
        return <VerticalBookPileDrawing {...props} />;
    else
        return <HorizontalBookPileDrawing {...props} />;
}

export default BookPileDrawing;