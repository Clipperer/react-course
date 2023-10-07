const BG_COLORS = {
    POSITIVE: "#bfe6a5",
    NEUTRAL: "#ecf5e6",
    NEGATIVE: "#f25e5e"
}
document.addEventListener("changed value", (ev) => {
    console.log("changed the value of an input")
    console.log(ev.detail)
})
const changeModifier = (ev) => {
    const { srcElement } = ev
    const { value: newScore } = srcElement
    const tableRow = srcElement.parentElement.parentElement
    const modifierEl = tableRow.getElementsByClassName("attr-modifier")[0]
    const modifierValue = calculateModifier(newScore)
    modifierEl.innerText = modifierValue
    modifierEl.style = styleSwitch(modifierValue)
    const event = new CustomEvent("changed value", { detail: {modifierValue, parentEl: tableRow} });
    document.dispatchEvent(event)
}
const createAttributeObject = (attribute) => {
    const { name, value: score = 9 } = attribute
    const attributeEl = document.createElement('div');
    let modifier = calculateModifier(score);
    let style = styleSwitch(modifier);

    attributeEl.classList.add('attributes');
    attributeEl.classList.add('table-row');
    attributeEl.addEventListener("change", changeModifier)
    attributeEl.innerHTML = `
		<div class="table-column">${name}</div>
		<div class="table-column"><input type="number" value=${score} /></div>
		<div class="table-column attr-modifier" style="${style}">${modifier}</div>
	`;
    return attributeEl;
}


const injectAttributes = () => {
    const attributeBlock = document.getElementById('attributeBlock');
    const attributes = [{
        name: "Strength",
        value: 11
    }, {
        name: "Dexterity",
        value: 13
    }, {
        name: "Constitution",
        value: 17
    }, {
        name: "Intelligence",
        value: 7
    }, {
        name: "Wisdom",
        value: 16
    }, {
        name: "Charisma",
        value: 13
    }];

    attributes.forEach((attributeName) => {
        const attribute = createAttributeObject(attributeName);
        attributeBlock.appendChild(attribute);
    });
}

const calculateModifier = (score) => {
    let result = 0;
    if (score > 10) {
        result = Math.floor((score - 10) / 2);
    } else if (score < 10) {
        result = -Math.ceil((10 - score) / 2);
    }
    return result;
}

const styleSwitch = (modifier) => {
    let result = BG_COLORS.NEUTRAL
    if (modifier > 0) {
        result = BG_COLORS.POSITIVE
    } else if (modifier < 0) {
        result = BG_COLORS.NEGATIVE
    }
    return `background-color: ${result}`;
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        injectAttributes();
    }
}