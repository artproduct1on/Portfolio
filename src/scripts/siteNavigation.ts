import { HtmlType, HtmlListType } from "./types";
const hamburger: HtmlType = document.querySelector(".header__hamburger"),
	nav: HtmlType = document.querySelector(".header__nav"),
	links: HtmlListType = document.querySelectorAll(".header__nav-link"),
	sections: HtmlListType = document.querySelectorAll("section");


export function header() {
	const menuToggle = () => {
		hamburger.classList.toggle("header__hamburger--active");
		nav.classList.toggle("header__nav--active");
	};
	hamburger && nav && hamburger.addEventListener("click", (): void => {
		menuToggle();
	});
};

export function scroll() {
	const options: IntersectionObserverInit = {
		root: null,
		rootMargin: '-50%'
	};

	const callback: IntersectionObserverCallback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				links.forEach((link, index) => {
					const sectionId = sections[index].id;

					if (link.getAttribute("href") === "#" + entry.target.id) {
						link.classList.add("header__nav-link--active");
						sections[index].classList.add(sectionId + "--active");
					} else {
						link.classList.remove("header__nav-link--active");
						sections[index].classList.remove(sectionId + "--active");
					};
				});
				observer.observe(entry.target);
			};
		});
	};
	const observer: IntersectionObserver = new IntersectionObserver(callback, options);
	sections.forEach(section => {
		observer.observe(section);
	});
};


