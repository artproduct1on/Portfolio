import { SvgListType, HtmlType, SvgMapType, SkillsType } from './types';

declare const require: {
    context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => {
        keys: () => string[];
        (id: string): { default: string };
    };
};

const svgAdd = (): void => {
    const svgContext = require.context('../assets/icons', false, /\.svg$/),
          svgMap: SvgMapType = {},
          svgList: SvgListType = document.querySelectorAll('.svg');
    
    svgContext.keys().forEach((key: string) => {
        const fileName = key.match(/\.\/(.+)\.svg$/)[1];
        svgMap[fileName] = svgContext(key).default;
    });

    svgList.forEach(i => {
        const hrefId: string = i.getAttribute("data-id") || '';
        if (svgMap[hrefId]) {
            i.innerHTML = `<use xlink:href="${svgMap[hrefId]}"></use>`;
        }
    });
};

const clock = ():void => {
    const yearsElement: HtmlType = document.getElementById("years"),
          daysElement: HtmlType = document.getElementById("days"),
          hoursElement: HtmlType = document.getElementById("hours");

    const startDate = new Date("April 1, 2020"),
          currentDate = new Date(),
          timeDifference = currentDate.getTime() - startDate.getTime();
    
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365)),
          days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)),
          hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (yearsElement && daysElement && hoursElement) {
        yearsElement.textContent = years.toString();
        daysElement.textContent = days.toString();
        hoursElement.textContent = hours.toString();
    };
};

const skillsAdd = ():void => {
    const skills: SkillsType[] = [
        {
            name: "Html",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png",
            link: "https://en.wikipedia.org/wiki/HTML"
        },
        {
            name: "Css",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png",
            link: "https://en.wikipedia.org/wiki/CSS"
        },
        {
            name: "JavaScript",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/70px-Unofficial_JavaScript_logo_2.svg.png",
            link: "https://en.wikipedia.org/wiki/JavaScript"
        },
        {
            name: "TypeScript",
            img: "https://www.typescriptlang.org/favicon.ico",
            link: "https://www.typescriptlang.org/"
        },
        {
            name: "React.js",
            img: "https://react.dev/favicon.ico",
            link: "https://react.dev/"
        },
        {
            name: "Redux",
            img: "https://redux.js.org/img/favicon/favicon.ico",
            link: "https://redux.js.org/"
        },
        {
            name: "Webpack",
            img: "https://webpack.js.org/icon_180x180.png",
            link: "https://webpack.js.org/"
        },
        {
            name: "Sass",
            img: "https://sass-lang.com/favicon.ico",
            link: "https://sass-lang.com/"
        },
        {
            name: "MUI",
            img: "https://mui.com/favicon.ico",
            link: "https://mui.com/"
        },
        {
            name: "Three.js",
            img: "https://threejs.org/favicon.ico",
            link: "https://threejs.org/"
        },
        {
            name: "Next.js",
            img: "https://nextjs.org/favicon.ico",
            link: "https://nextjs.org/"
        },
        {
            name: "Node.js",
            img: "https://nodejs.org/favicon.ico",
            link: "https://nodejs.org/"
        },
        {
            name: "Express.js",
            img: "https://expressjs.com/images/favicon.png",
            link: "https://expressjs.com/"
        },
        {
            name: "MongoDB",
            img: "https://www.mongodb.com/favicon.ico",
            link: "https://www.mongodb.com/"
        },
        {
            name: "Socket",
            img: "https://socket.io/images/favicon.png",
            link: "https://socket.io/"
        },
        {
            name: "Jest",
            img: "https://jestjs.io/img/jest.png",
            link: "https://jestjs.io/"
        },
        {
            name: "Git",
            img: "https://git-scm.com/favicon.png",
            link: "https://git-scm.com/"
        },
        {
            name: "Figma",
            img: "https://static.figma.com/app/icon/1/favicon.svg",
            link: "https://www.figma.com/"
        },
    
    ];
    const skillsContainer: HtmlType = document.querySelector(".work__skills");

    skillsContainer && skills && skills.forEach(i => {
        skillsContainer.innerHTML += `
            <a class="work__skills-link" href="${i.link}" target="_blank" title="${i.name}">                    
                <img class="work__skills-img" src="${i.img}" loading="lazy" alt="${i.img}" >
                ${i.name}
            </a>
        `
    });

};

export function components() {
    svgAdd();
    clock();
    skillsAdd();
};