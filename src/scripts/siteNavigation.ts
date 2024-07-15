import { htmlType, htmlListType } from "./types";


export function header() {
    const hamburger: htmlType = document.querySelector(".header__hamburger");
    const nav: htmlType = document.querySelector(".header__nav");
    const list: htmlType = document.querySelector(".header__nav-list");
    const sections: htmlListType = document.querySelectorAll("section");

    const menuToggle = (): void => {
        hamburger.classList.toggle("header__hamburger--active");
        nav.classList.toggle("header__nav--active");
    };
    
    hamburger && nav && hamburger.addEventListener("click", (): void => {
        menuToggle();
    });

    list && list.addEventListener("click", (event) => {
        const target = event.target as htmlType;

        if (target.tagName === "A" && sections) { 
            event.preventDefault()
            const href = target.getAttribute("href");
            sections.forEach(element => {
                "#"+element.id === href &&
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            menuToggle();
        }
    });
    
    return;
};