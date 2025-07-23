import "./styles/style.scss";
import './assets/logo.png';
import './assets/favicon.ico';
import './assets/favicon-16x16.png';
import './assets/favicon-32x32.png';
import './assets/me.png';

import { components } from "./scripts/components";
import { header, scroll } from "./scripts/siteNavigation";
import { langDetect } from "./scripts/langDetect";

document.addEventListener("DOMContentLoaded", () => {
	langDetect();
	components();
	header();
	scroll();
});
