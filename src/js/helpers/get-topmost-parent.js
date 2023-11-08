export const getTopmostParent = (element) => {
  while (element.parentElement && element.parentElement !== document.body) {
    element = element.parentElement
  }
  return element
}
