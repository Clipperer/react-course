import { DEFAULT_ATTRIBUTE_SCORE } from "../../constants"
import { changeModifier } from "../change-modifier"
import { calculateModifier, styleSwitch } from "../../helpers"

export const createAttributeObject = ({
  name,
  score = DEFAULT_ATTRIBUTE_SCORE
}) => {
  const attributeEl = document.createElement("div")
  const modifier = calculateModifier(score)

  attributeEl.className = "attributes table-row"
  attributeEl.addEventListener("change", changeModifier)
  attributeEl.innerHTML = `
		<div class="table-column attr-name">${name}</div>
		<div class="table-column attr-score"><input type="number" value=${score} /></div>
		<div class="table-column attr-modifier ${styleSwitch(
      modifier
    )}">${modifier}</div>
	`
  return attributeEl
}
