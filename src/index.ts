import "./styles/style.scss";
import { components } from "./scripts/components";
import { header } from "./scripts/header";
import { scroll } from "./scripts/scroll";


document.addEventListener("DOMContentLoaded", () => {
    components();
    header();
    scroll();
});
