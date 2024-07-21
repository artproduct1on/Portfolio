import "./styles/style.scss";
import { components } from "./scripts/components";
import { header, scroll } from "./scripts/siteNavigation";


document.addEventListener("DOMContentLoaded", () => {
    components();
    header();
    scroll();
});
