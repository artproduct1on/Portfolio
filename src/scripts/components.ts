import { InputType, SvgListType, HtmlType, SvgMapType, TextAreaType } from './types';
import Mailer from './Mailer';
import skillsInfo from './skillsInfo';

declare const require: {
  context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => {
    keys: () => string[];
    (id: string): { default: string };
  };
};

const svgAdd = () => {
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

const clock = () => {
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

const skillsAdd = () => {
  const frontContainer: HtmlType = document.querySelector(".work__skills-front");
  const backContainer: HtmlType = document.querySelector(".work__skills-back");
  const toolContainer: HtmlType = document.querySelector(".work__skills-tool");
  const filling: { [key: string]: string } = { front: "", back: "", tool: "" };

  if (!frontContainer || !backContainer || !toolContainer) {
    return console.log("Missing contsiner!");
  };

  skillsInfo && skillsInfo.forEach(i => {
    filling[i.title] += `
      <a class="work__skills-link" href="${i.link}" target="_blank" title="${i.name}">                    
          <img class="work__skills-img" src="${i.img}" loading="lazy" alt="${i.img}" >
          ${i.name}
      </a>
    `
  });

  frontContainer.innerHTML += filling.front;
  backContainer.innerHTML += filling.back;
  toolContainer.innerHTML += filling.tool;
};

const messageSend = () => {
  const form: HtmlType = document.querySelector(".contact__form"),
    subjectInput: InputType = document.querySelector(".contact__form-subject"),
    messageTA: TextAreaType = document.querySelector(".contact__form-message")

  if (!form || !subjectInput || !messageTA) {
    console.error("One or more form elements are missing.");
    return;
  };
  const { submitFunction } = new Mailer();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("spinner");
    const tamplateInfo = {
      subject: subjectInput.value.trim(),
      message: messageTA.value.trim()
    };
    submitFunction(tamplateInfo);
    subjectInput.value = "";
    messageTA.value = "";
  });
};

export function components() {
  svgAdd();
  clock();
  skillsAdd();
  messageSend();
};