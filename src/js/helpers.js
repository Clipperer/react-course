import { BG_COLORS } from './constants.js';

export function getTopmostParent(element) {
    while (element.parentElement && element.parentElement !== document.body) {
        element = element.parentElement;
    }
    return element;
}

export const calculateModifier = (score) => {
    return score > 10 ? Math.floor((score - 10) / 2) : -Math.ceil((10 - score) / 2);
}

export const styleSwitch = (modifier) => {
    return modifier > 0 ? BG_COLORS.POSITIVE : (modifier < 0 ? BG_COLORS.NEGATIVE : BG_COLORS.NEUTRAL);
}