import { DEFAULT_ATTRIBUTE_SCORE } from "../constants"

export const calculateModifier = (score) =>
  score > DEFAULT_ATTRIBUTE_SCORE
    ? Math.floor((score - DEFAULT_ATTRIBUTE_SCORE) / 2)
    : -Math.ceil((DEFAULT_ATTRIBUTE_SCORE - score) / 2)
