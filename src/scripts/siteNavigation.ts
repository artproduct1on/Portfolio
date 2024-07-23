import { HtmlType, HtmlListType, DistanceType } from "./types";
const hamburger: HtmlType = document.querySelector(".header__hamburger"),
      nav: HtmlType = document.querySelector(".header__nav"),
      list: HtmlType = document.querySelector(".header__nav-list"),
      links: HtmlListType = document.querySelectorAll(".header__nav-link"),
      sections: HtmlListType = document.querySelectorAll("section"),
      nextBtn: HtmlType = document.querySelector(".home__next");


export function header() {
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
            sections.forEach(section => {
                "#"+section.id === href && scrollFunction(section);
            });
            menuToggle();
        };
    });
    
    nextBtn && nextBtn.addEventListener("click",() => scrollFunction(sections[1]));

    return;
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


