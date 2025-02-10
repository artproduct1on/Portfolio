import "./styles/style.scss";
import { components } from "./scripts/components";
import { header, scroll } from "./scripts/siteNavigation";
import { langDetect } from "./scripts/langDetect";

document.addEventListener("DOMContentLoaded", () => {
	langDetect();
	components();
	header();
	scroll();
});
