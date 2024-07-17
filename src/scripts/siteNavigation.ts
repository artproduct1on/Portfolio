import { HtmlType, HtmlListType } from "./types";


export function header() {
    const hamburger: HtmlType = document.querySelector(".header__hamburger"),
          nav: HtmlType = document.querySelector(".header__nav"),
          list: HtmlType = document.querySelector(".header__nav-list"),
          sections: HtmlListType = document.querySelectorAll("section"),
          nextBtn: HtmlType = document.querySelector(".home__next");


    const scrollFunction = (item: HtmlType):void => {
        item.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const menuToggle = (): void => {
        hamburger.classList.toggle("header__hamburger--active");
        nav.classList.toggle("header__nav--active");
    };
    
    hamburger && nav && hamburger.addEventListener("click", (): void => {
        menuToggle();
    });

    list && list.addEventListener("click", (event) => {
        const target = event.target as HtmlType;

        if (target.tagName === "A" && sections) { 
            event.preventDefault()
            const href = target.getAttribute("href");
            sections.forEach(element => {
                "#"+element.id === href && scrollFunction(element);
            });
            menuToggle();
        }
    });
    
    nextBtn && nextBtn.addEventListener("click",() => scrollFunction(sections[1]));

    return;
};