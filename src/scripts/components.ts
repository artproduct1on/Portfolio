import { SvgListType, HtmlType, SvgMapType } from './types';

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



export function components() {
    svgAdd();
    clock();
};