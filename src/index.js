import "./scss/style.scss"
import { injectAttributes } from "./js/attributes/inject-attributes"

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    injectAttributes()
  }
}
