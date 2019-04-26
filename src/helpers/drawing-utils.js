import { shelfHeight, rackHeight, libraryVerticalPadding } from '../helpers/drawing-constants';

function getKanvasSize(shelvesCount) {
    return { width: getKanvasWidth(), height: getKanvasHeight(shelvesCount) };
}

function getKanvasWidth() {
    return window.innerWidth - 40;
}

function getKanvasHeight(shelvesCount) {
    return shelvesCount * shelfHeight + rackHeight + 2 * libraryVerticalPadding;
}

function getEvenedPileMargin(piles) {
    const kanvasWidth = getKanvasWidth();
    const pilesWidth = piles.reduce((prev, cur) => prev + cur.width, 0);
    return (kanvasWidth - pilesWidth) / (piles.length + 1);
}

export {
    getKanvasHeight,
    getKanvasWidth,
    getKanvasSize,
    getEvenedPileMargin
}