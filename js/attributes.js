function createAttributeObject(attributeName){
	const attribute = document.createElement('div');
	let score = 9;
	let modifier = calculateModifier(score);
	let style = styleSwitch(modifier);
	attribute.classList.add('attributes');
	attribute.classList.add('table-row');
	attribute.innerHTML = `
		<div class="table-column">${attributeName}</div>
		<div class="table-column">${score}</div>
		<div class="table-column" style="${style}">${modifier}</div>
	`;
	return attribute;
}

function injectAttributes() {
	const attributeBlock = document.getElementById('attributeBlock');
	const attributes = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
	attributes.forEach((attributeName) => {
		const attribute = createAttributeObject(attributeName);
		attributeBlock.appendChild(attribute);
	});
}

function calculateModifier(score) {
let result = 0;
if (score > 10) {
	result = Math.floor((score - 10) / 2);
}
else if (score < 10){
	result = -Math.ceil((10 - score) / 2);
}
return result;
}

function styleSwitch(modifier){
	let result = 'background-color:#ecf5e6'
if (modifier > 0){
 result = 'background-color:#bfe6a5'
}
else if (modifier < 0) {
result = 'background-color:#f25e5e'
}
return result;
}

document.onreadystatechange = () => {
	if (document.readyState === "complete") {
		injectAttributes();
	}
}