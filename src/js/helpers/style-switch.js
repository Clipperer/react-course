import { BG_COLORS } from "../constants"

export const styleSwitch = (modifier) => {
  return modifier > 0
    ? BG_COLORS.POSITIVE
    : modifier < 0
    ? BG_COLORS.NEGATIVE
    : BG_COLORS.NEUTRAL
}
