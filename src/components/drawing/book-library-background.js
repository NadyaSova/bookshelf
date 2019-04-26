import React from 'react';
import { Rect } from 'react-konva';

const BookLibraryBackground = ({ width, height }) => {
    return (
        <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            strokeEnabled={false}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: width / 5 * 6, y: height }}
            fillLinearGradientColorStops={[0, 'Ivory', 1, 'AntiqueWhite']}
        />);
};

export default BookLibraryBackground;