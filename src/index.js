import {injectAttributes} from "./js/attributes";

import "./css/style.css"

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        injectAttributes();
    }
}