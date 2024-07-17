import { SvgUseListType, HtmlType } from './types';


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

const svgAdd = async (): Promise<void> => {

  const svgUseList: SvgUseListType = document.querySelectorAll('use');

  svgUseList.forEach(async (i) => {
    const hrefId: string = i.getAttribute('href')?.replace("#", "") || "";
    if (hrefId) {
        try {
            const icon = await import(`../assets/icons/${hrefId}.svg`);
            icon && i.setAttribute('href', icon.default);
        } catch (error) {
            console.error(`Error importing ${hrefId}:`, error);
        };
    };
  });
};

export function components() {
    clock();
    svgAdd();
  
    return;
};