import { createAttributeObject } from "../create-attribute-object"

export const injectAttributes = () => {
  const attributeBlock = document.getElementById("attributeBlock")
  const attributes = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma"
  ]

  attributes.forEach((attributeName) => {
    const attribute = createAttributeObject({ name: attributeName })
    attributeBlock.appendChild(attribute)
  })
}
