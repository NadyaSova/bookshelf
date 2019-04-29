import { getKanvasWidth } from './get-canvas-size';

function getEvenedPileMargin(piles) {
    const kanvasWidth = getKanvasWidth();
    const pilesWidth = piles.reduce((prev, cur) => prev + cur.width, 0);
    return (kanvasWidth - pilesWidth) / (piles.length + 1);
};

export default getEvenedPileMargin;