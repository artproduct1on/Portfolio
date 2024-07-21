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

    let distance: DistanceType[],
        documentHeight: number;   


    const distanceFunktion = (): void => {
        const array = Array.from(sections),
              viewportHeight: number =  window.innerHeight || document.documentElement.clientHeight;
    
        distance = array.map(i => {
            return {id: i.id, y: i.offsetTop - viewportHeight/2}
        });
        documentHeight = Math.max(
            document.body.scrollHeight, 
            document.documentElement.scrollHeight,
            document.body.offsetHeight, 
            document.documentElement.offsetHeight,
            document.body.clientHeight, 
            document.documentElement.clientHeight
        );
    };
    
    const sectionActiveFunktion = (id: string): void => {
        links.forEach((link, index) => {
            if (link.getAttribute("href") === "#" + id) {
                link.classList.add("header__nav-link--active");
                sections[index].classList.add("section--active");
            } else {
                link.classList.remove("header__nav-link--active");
                sections[index].classList.remove("section--active");
            }
        });
    };
    const windowScrollFunktion = (): void => {
        const scroll = window.scrollY;
        distance.forEach((i, index) => {
            const controlLastSection = distance.length > index+1 ? scroll < distance[index+1].y : scroll < documentHeight;
            if (i.y < scroll && controlLastSection) {
                sectionActiveFunktion(i.id)
            };
        });        
    };


    distanceFunktion();
    windowScrollFunktion();

    window.addEventListener("scroll", () => {
        windowScrollFunktion();
    });

    window.addEventListener("resize", () => {
        distanceFunktion();
        windowScrollFunktion();
    });
};

