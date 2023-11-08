import { calculateModifier, getTopmostParent, styleSwitch } from "../../helpers"
export const changeModifier = (ev) => {
  const { srcElement } = ev
  const { value: newScore } = srcElement
  const tableRow = getTopmostParent(srcElement)
  const modifierEl = tableRow.querySelector(".attr-modifier")
  const modifierValue = calculateModifier(newScore)

  modifierEl.innerText = modifierValue
  modifierEl.className = `table-column attr-modifier ${styleSwitch(
    modifierValue
  )}`
}
