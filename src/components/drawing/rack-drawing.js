import React from 'react'
import { Rect } from 'react-konva';

import { pileMargin, rackHeight } from '../../utils/drawing/drawing-constants';
import { getKanvasWidth } from '../../utils/drawing';

const RackDrawing = ({y}) => {
    const kanvasWidth = getKanvasWidth();

    return (
        <Rect
            x={pileMargin / 2}
            y={y}
            width={kanvasWidth - pileMargin}
            height={rackHeight}
            fillLinearGradientStartPoint={{ x: kanvasWidth / 4, y: 0 }}
            fillLinearGradientEndPoint={{ x: kanvasWidth * 3 / 4, y: rackHeight }}
            fillLinearGradientColorStops={[0, 'sienna', 1, 'saddlebrown']}
            strokeEnabled={false}
        />);
}

export default RackDrawing;