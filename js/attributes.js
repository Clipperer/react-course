import { BG_COLORS, defaultAttributeScore } from './constants.js';
import { getTopmostParent, calculateModifier, styleSwitch } from './helpers.js';

document.addEventListener("changed value", (ev) => {
    console.log("changed the value of an input", ev.detail)
});

const changeModifier = (ev) => {
    const { srcElement } = ev;
    const { value: newScore } = srcElement;
    const tableRow = getTopmostParent(srcElement);
    const modifierEl = tableRow.querySelector(".attr-modifier");
    const modifierValue = calculateModifier(newScore);
    
    modifierEl.innerText = modifierValue;
    modifierEl.className = `table-column attr-modifier ${styleSwitch(modifierValue)}`;

    const event = new CustomEvent("changed value", { detail: {modifierValue, parentEl: tableRow} });
    document.dispatchEvent(event);
}

const createAttributeObject = ({ name, score = defaultAttributeScore }) => {
    const attributeEl = document.createElement('div');
    const modifier = calculateModifier(score);

    attributeEl.className = 'attributes table-row';
    attributeEl.addEventListener("change", changeModifier);
    attributeEl.innerHTML = `
		<div class="table-column attr-name">${name}</div>
		<div class="table-column attr-score"><input type="number" value=${score} /></div>
		<div class="table-column attr-modifier ${styleSwitch(modifier)}">${modifier}</div>
	`;
    return attributeEl;
}

const injectAttributes = () => {
    const attributeBlock = document.getElementById('attributeBlock');
    const attributes = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

    attributes.forEach(attributeName => {
        const attribute = createAttributeObject({name: attributeName});
        attributeBlock.appendChild(attribute);
    });
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        injectAttributes();
    }
}