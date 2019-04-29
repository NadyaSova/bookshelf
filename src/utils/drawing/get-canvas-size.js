import { shelfHeight, libraryVerticalPadding } from './drawing-constants';

function getKanvasSize(shelvesCount) {
    return { width: getKanvasWidth(), height: getKanvasHeight(shelvesCount) };
};

function getKanvasWidth() {
    return window.innerWidth - 40;
};

function getKanvasHeight(shelvesCount) {
    return shelvesCount * shelfHeight + 2 * libraryVerticalPadding;
};

export {
    getKanvasHeight,
    getKanvasWidth,
    getKanvasSize    
};