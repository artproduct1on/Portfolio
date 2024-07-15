import { htmlType } from "./types";

export function header() {
    const hamburger: htmlType = document.querySelector(".header__hamburger");
    const nav: htmlType = document.querySelector(".header__nav");
    
    hamburger && nav && hamburger.addEventListener("click", (): void => {
        hamburger.classList.toggle("header__hamburger--active");
        nav.classList.toggle("header__nav--active");
    });
    
    return;
};