/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/emailjs-com/es/api/sendPost.js":
/*!*****************************************************!*\
  !*** ./node_modules/emailjs-com/es/api/sendPost.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendPost: () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/emailjs-com/es/store/store.js");


const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target));
        });
        xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__.store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/emailjs-com/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init),
/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send),
/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm)
/* harmony export */ });
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/emailjs-com/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/emailjs-com/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/emailjs-com/es/methods/sendForm/sendForm.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm,
});


/***/ }),

/***/ "./node_modules/emailjs-com/es/methods/init/init.js":
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/init/init.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");

/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID = userID;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._origin = origin;
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/methods/sendForm/sendForm.js":
/*!******************************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/sendForm/sendForm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/emailjs-com/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/emailjs-com/es/api/sendPost.js");



const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.2.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/methods/send/send.js":
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/send/send.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   send: () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/emailjs-com/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/emailjs-com/es/api/sendPost.js");



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: '3.2.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js":
/*!*********************************************************************!*\
  !*** ./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}


/***/ }),

/***/ "./node_modules/emailjs-com/es/store/store.js":
/*!****************************************************!*\
  !*** ./node_modules/emailjs-com/es/store/store.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
const store = {
    _origin: 'https://api.emailjs.com',
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/utils/validateParams.js":
/*!*************************************************************!*\
  !*** ./node_modules/emailjs-com/es/utils/validateParams.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateParams: () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/facebook.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "facebook_8f397329f0a64667cb41bc62af87f73d-usage",
      viewBox: "0 0 512 512",
      url: __webpack_require__.p + "assets/sprite.svg#facebook_8f397329f0a64667cb41bc62af87f73d-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/icons/github.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/github.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "github_f65d9ada1deece96360db6af21cc5d5d-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "assets/sprite.svg#github_f65d9ada1deece96360db6af21cc5d5d-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "instagram_8bbfc7f0978ec72351fbc87f9c3fd0a3-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "assets/sprite.svg#instagram_8bbfc7f0978ec72351fbc87f9c3fd0a3-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/icons/linkedin.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/linkedin.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "linkedin_a62a590fdfb05719561e19409b797f54-usage",
      viewBox: "0 -0.5 25 25",
      url: __webpack_require__.p + "assets/sprite.svg#linkedin_a62a590fdfb05719561e19409b797f54-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/icons/mail.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/mail.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "mail_500d560038abca9ccf05704093d83b10-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "assets/sprite.svg#mail_500d560038abca9ccf05704093d83b10-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/icons/telegram.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/telegram.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "telegram_8959b7cd1bf45269d7a024acd2401cff-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "assets/sprite.svg#telegram_8959b7cd1bf45269d7a024acd2401cff-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/icons/whatsapp.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/whatsapp.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "whatsapp_9167ce48f86da3a46689650d8e7047f0-usage",
      viewBox: "0 0 24 24",
      url: __webpack_require__.p + "assets/sprite.svg#whatsapp_9167ce48f86da3a46689650d8e7047f0-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/icons/youtube.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/youtube.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "youtube_942041c870d8df623589656547117b6e-usage",
      viewBox: "0 -7 48 48",
      url: __webpack_require__.p + "assets/sprite.svg#youtube_942041c870d8df623589656547117b6e-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/scripts/Mailer.ts":
/*!*******************************!*\
  !*** ./src/scripts/Mailer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mailer)
/* harmony export */ });
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");

class Mailer {
    constructor() {
        this._userID = "uB5oOUhgFpCdMOZ6E";
        this._templateID = "template_h27r7yy";
        this._serviceID = "service_2vz63ll";
        this._day = "";
        this.submitFunction = ({ subject, message }) => {
            if (!subject || !message) {
                this.stopFunction("Please fill in all fields.");
                return;
            }
            ;
            if (!!this._day)
                this._day = new Date().getDate().toString();
            if (this._day === localStorage.getItem("date")) {
                this.stopFunction("You can only send one message per day.");
                return;
            }
            const templateParams = { subject, message };
            emailjs_com__WEBPACK_IMPORTED_MODULE_0__["default"].send(this._serviceID, this._templateID, templateParams)
                .then(() => {
                this.stopFunction("Your message has been sent successfully!");
                localStorage.setItem("date", this._day);
            })
                .catch((error) => {
                this.stopFunction("There was an error sending your message. Please try again.");
                console.error("EmailJS send error:", error);
            });
        };
        emailjs_com__WEBPACK_IMPORTED_MODULE_0__["default"].init(this._userID);
    }
    ;
    stopFunction(text) {
        alert(text);
        document.querySelector(".spinner").classList.remove("spinner");
    }
    ;
}
;


/***/ }),

/***/ "./src/scripts/components.ts":
/*!***********************************!*\
  !*** ./src/scripts/components.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _Mailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mailer */ "./src/scripts/Mailer.ts");
/* harmony import */ var _skillsInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skillsInfo */ "./src/scripts/skillsInfo.ts");


const svgAdd = () => {
    const svgContext = __webpack_require__("./src/assets/icons sync \\.svg$"), svgMap = {}, svgList = document.querySelectorAll('.svg');
    svgContext.keys().forEach((key) => {
        const fileName = key.match(/\.\/(.+)\.svg$/)[1];
        svgMap[fileName] = svgContext(key).default;
    });
    svgList.forEach(i => {
        const hrefId = i.getAttribute("data-id") || '';
        if (svgMap[hrefId]) {
            i.innerHTML = `<use xlink:href="${svgMap[hrefId]}"></use>`;
        }
    });
};
const clock = () => {
    const yearsElement = document.getElementById("years"), daysElement = document.getElementById("days"), hoursElement = document.getElementById("hours");
    const startDate = new Date("April 1, 2020"), currentDate = new Date(), timeDifference = currentDate.getTime() - startDate.getTime();
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365)), days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)), hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (yearsElement && daysElement && hoursElement) {
        yearsElement.textContent = years.toString();
        daysElement.textContent = days.toString();
        hoursElement.textContent = hours.toString();
    }
    ;
};
const skillsAdd = () => {
    const frontContainer = document.querySelector(".work__skills-front");
    const backContainer = document.querySelector(".work__skills-back");
    const toolContainer = document.querySelector(".work__skills-tool");
    const filling = { front: "", back: "", tool: "" };
    if (!frontContainer || !backContainer || !toolContainer) {
        return console.log("Missing contsiner!");
    }
    ;
    _skillsInfo__WEBPACK_IMPORTED_MODULE_1__["default"] && _skillsInfo__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(i => {
        filling[i.title] += `
      <a class="work__skills-link" href="${i.link}" target="_blank" title="${i.name}">                    
          <img class="work__skills-img" src="${i.img}" loading="lazy" alt="${i.img}" >
          ${i.name}
      </a>
    `;
    });
    frontContainer.innerHTML += filling.front;
    backContainer.innerHTML += filling.back;
    toolContainer.innerHTML += filling.tool;
};
const messageSend = () => {
    const form = document.querySelector(".contact__form"), subjectInput = document.querySelector(".contact__form-subject"), messageTA = document.querySelector(".contact__form-message");
    if (!form || !subjectInput || !messageTA) {
        console.error("One or more form elements are missing.");
        return;
    }
    ;
    const { submitFunction } = new _Mailer__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
function components() {
    svgAdd();
    clock();
    skillsAdd();
    messageSend();
}
;


/***/ }),

/***/ "./src/scripts/langDetect.ts":
/*!***********************************!*\
  !*** ./src/scripts/langDetect.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   langDetect: () => (/* binding */ langDetect)
/* harmony export */ });
function langHandler(userLang) {
    const languages = [
        { name: "English", pathname: "en", link: "/" },
        { name: "Deutsch", pathname: "de", link: "/de/" },
        { name: "Українська", pathname: "uk", link: "/uk/" },
    ];
    languages.forEach(i => {
        if (userLang.includes(i.pathname)) {
            const confirmLang = confirm(`Would you like switch to "${i.name}"`);
            if (confirmLang) {
                location.replace(i.link);
            }
            ;
        }
        ;
    });
}
;
function langDetect() {
    const storage = localStorage.getItem("lang");
    if (storage)
        return;
    const userLanguage = navigator.language.toLocaleLowerCase();
    const path = location.pathname.replace(/\//g, "") || "en";
    if (!userLanguage.includes(path))
        setTimeout(() => langHandler(userLanguage), 3000);
    localStorage.setItem("lang", path);
}
;


/***/ }),

/***/ "./src/scripts/siteNavigation.ts":
/*!***************************************!*\
  !*** ./src/scripts/siteNavigation.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
const hamburger = document.querySelector(".header__hamburger"), nav = document.querySelector(".header__nav"), links = document.querySelectorAll(".header__nav-link"), sections = document.querySelectorAll("section");
function header() {
    const menuToggle = () => {
        hamburger.classList.toggle("header__hamburger--active");
        nav.classList.toggle("header__nav--active");
    };
    hamburger && nav && hamburger.addEventListener("click", () => {
        menuToggle();
    });
}
;
function scroll() {
    const options = {
        root: null,
        rootMargin: '-50%'
    };
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach((link, index) => {
                    const sectionId = sections[index].id;
                    if (link.getAttribute("href") === "#" + entry.target.id) {
                        link.classList.add("header__nav-link--active");
                        sections[index].classList.add(sectionId + "--active");
                    }
                    else {
                        link.classList.remove("header__nav-link--active");
                        sections[index].classList.remove(sectionId + "--active");
                    }
                    ;
                });
                observer.observe(entry.target);
            }
            ;
        });
    };
    const observer = new IntersectionObserver(callback, options);
    sections.forEach(section => {
        observer.observe(section);
    });
}
;


/***/ }),

/***/ "./src/scripts/skillsInfo.ts":
/*!***********************************!*\
  !*** ./src/scripts/skillsInfo.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const skills = [
    {
        name: "Html",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png",
        title: "front", link: "https://en.wikipedia.org/wiki/HTML"
    },
    {
        name: "Css",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png",
        title: "front", link: "https://en.wikipedia.org/wiki/CSS"
    },
    {
        name: "JavaScript",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/70px-Unofficial_JavaScript_logo_2.svg.png",
        title: "front", link: "https://en.wikipedia.org/wiki/JavaScript"
    },
    {
        name: "TypeScript",
        img: "https://www.typescriptlang.org/favicon.ico",
        title: "front", link: "https://www.typescriptlang.org/"
    },
    {
        name: "React",
        img: "https://react.dev/favicon.ico",
        title: "front", link: "https://react.dev/"
    },
    {
        name: "Next",
        img: "https://nextjs.org/favicon.ico",
        title: "front", link: "https://nextjs.org/"
    },
    {
        name: "Expo",
        img: "https://static.expo.dev/static/brand/app-icon-512x512.png",
        title: "front", link: "https://expo.dev/"
    },
    {
        name: "Redux",
        img: "https://redux.js.org/img/favicon/favicon.ico",
        title: "front", link: "https://redux.js.org/"
    },
    {
        name: "Zustand",
        img: "https://github.com/pmndrs/zustand/raw/main/docs/favicon.ico",
        title: "front", link: "https://zustand.docs.pmnd.rs/"
    },
    {
        name: "Sass",
        img: "https://sass-lang.com/favicon.ico",
        title: "front", link: "https://sass-lang.com/"
    },
    {
        name: "MUI",
        img: "https://mui.com/favicon.ico",
        title: "front", link: "https://mui.com/"
    },
    {
        name: "Three.js",
        img: "https://threejs.org/favicon.ico",
        title: "front", link: "https://threejs.org/"
    },
    {
        name: "Socket",
        img: "https://socket.io/images/favicon.png",
        title: "back", link: "https://socket.io/"
    },
    {
        name: "Node.js",
        img: "https://nodejs.org/favicon.ico",
        title: "back", link: "https://nodejs.org/"
    },
    {
        name: "Express.js",
        img: "https://expressjs.com/images/favicon.png",
        title: "back", link: "https://expressjs.com/"
    },
    {
        name: "Ubuntu",
        img: "https://ubuntu.com/static/favicons/COF-favicon-48x48.png?v=fa3c63f",
        title: "back", link: "https://ubuntu.com/"
    },
    {
        name: "MongoDB",
        img: "https://www.mongodb.com/favicon.ico",
        title: "back", link: "https://www.mongodb.com/"
    },
    {
        name: "MySQL",
        img: "https://labs.mysql.com/common/themes/sakila/favicon.ico",
        title: "back", link: "https://www.mysql.com/"
    },
    {
        name: "PostgreSQL",
        img: "https://www.postgresql.org/favicon.ico",
        title: "back", link: "https://www.postgresql.org/"
    },
    {
        name: "Sequelize",
        img: "https://sequelize.org/img/logo.svg",
        title: "back", link: "https://sequelize.org/"
    },
    {
        name: "Jest",
        img: "https://jestjs.io/img/jest.png",
        title: "tool", link: "https://jestjs.io/"
    },
    {
        name: "Webpack",
        img: "https://webpack.js.org/icon_180x180.png",
        title: "tool", link: "https://webpack.js.org/"
    },
    {
        name: "Vite",
        img: "https://vite.dev/logo.svg",
        title: "tool", link: "https://vite.dev/"
    },
    {
        name: "Git",
        img: "https://git-scm.com/favicon.png",
        title: "tool", link: "https://git-scm.com/"
    },
    {
        name: "phpMyAdmin",
        img: "https://www.phpmyadmin.net/static/favicon.ico",
        title: "tool", link: "https://www.phpmyadmin.net/"
    },
    {
        name: "Figma",
        img: "https://static.figma.com/app/icon/1/favicon.svg",
        title: "tool", link: "https://www.figma.com/"
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (skills);


/***/ }),

/***/ "./src/assets/icons sync \\.svg$":
/*!****************************************************!*\
  !*** ./src/assets/icons/ sync nonrecursive \.svg$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./facebook.svg": "./src/assets/icons/facebook.svg",
	"./github.svg": "./src/assets/icons/github.svg",
	"./instagram.svg": "./src/assets/icons/instagram.svg",
	"./linkedin.svg": "./src/assets/icons/linkedin.svg",
	"./mail.svg": "./src/assets/icons/mail.svg",
	"./telegram.svg": "./src/assets/icons/telegram.svg",
	"./whatsapp.svg": "./src/assets/icons/whatsapp.svg",
	"./youtube.svg": "./src/assets/icons/youtube.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/icons sync \\.svg$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _scripts_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/components */ "./src/scripts/components.ts");
/* harmony import */ var _scripts_siteNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/siteNavigation */ "./src/scripts/siteNavigation.ts");
/* harmony import */ var _scripts_langDetect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/langDetect */ "./src/scripts/langDetect.ts");




document.addEventListener("DOMContentLoaded", () => {
    (0,_scripts_langDetect__WEBPACK_IMPORTED_MODULE_3__.langDetect)();
    (0,_scripts_components__WEBPACK_IMPORTED_MODULE_1__.components)();
    (0,_scripts_siteNavigation__WEBPACK_IMPORTED_MODULE_2__.header)();
    (0,_scripts_siteNavigation__WEBPACK_IMPORTED_MODULE_2__.scroll)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsT0FBTztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7O0FDcEl0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjZCO0FBQ3FCO0FBQ1E7QUFDUjtBQUNsRDtBQUNBLElBQUksK0RBQVU7QUFDZCxJQUFJLCtEQUFVO0FBQ2QsSUFBSSwrREFBTTtBQUNWLElBQUksK0RBQU07QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2VzL2FwaS9zZW5kUG9zdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2VzL21ldGhvZHMvaW5pdC9pbml0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9lbWFpbGpzLWNvbS9lcy9tZXRob2RzL3NlbmRGb3JtL3NlbmRGb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9lbWFpbGpzLWNvbS9lcy9tZXRob2RzL3NlbmQvc2VuZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvbW9kZWxzL0VtYWlsSlNSZXNwb25zZVN0YXR1cy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vZXMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2VzL3V0aWxzL3ZhbGlkYXRlUGFyYW1zLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9hNWI0Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvaWNvbnMvZmFjZWJvb2suc3ZnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hc3NldHMvaWNvbnMvZ2l0aHViLnN2ZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2ljb25zL2luc3RhZ3JhbS5zdmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9pY29ucy9saW5rZWRpbi5zdmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Fzc2V0cy9pY29ucy9tYWlsLnN2ZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2ljb25zL3RlbGVncmFtLnN2ZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2ljb25zL3doYXRzYXBwLnN2ZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2ljb25zL3lvdXR1YmUuc3ZnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3JpcHRzL01haWxlci50cyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzLnRzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zY3JpcHRzL2xhbmdEZXRlY3QudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvc2l0ZU5hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvc2tpbGxzSW5mby50cyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2ljb25zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5zdmckIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1haWxKU1Jlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL0VtYWlsSlNSZXNwb25zZVN0YXR1cyc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJztcbmV4cG9ydCBjb25zdCBzZW5kUG9zdCA9ICh1cmwsIGRhdGEsIGhlYWRlcnMgPSB7fSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVN0YXR1cyA9IG5ldyBFbWFpbEpTUmVzcG9uc2VTdGF0dXModGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVN0YXR1cy5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZVN0YXR1cy50ZXh0ID09PSAnT0snKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZVN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2VTdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRW1haWxKU1Jlc3BvbnNlU3RhdHVzKHRhcmdldCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCBzdG9yZS5fb3JpZ2luICsgdXJsLCB0cnVlKTtcbiAgICAgICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9tZXRob2RzL2luaXQvaW5pdCc7XG5pbXBvcnQgeyBzZW5kIH0gZnJvbSAnLi9tZXRob2RzL3NlbmQvc2VuZCc7XG5pbXBvcnQgeyBzZW5kRm9ybSB9IGZyb20gJy4vbWV0aG9kcy9zZW5kRm9ybS9zZW5kRm9ybSc7XG5leHBvcnQgeyBpbml0LCBzZW5kLCBzZW5kRm9ybSB9O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQsXG4gICAgc2VuZCxcbiAgICBzZW5kRm9ybSxcbn07XG4iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbi8qKlxuICogSW5pdGlhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJRCAtIHNldCB0aGUgRW1haWxKUyB1c2VyIElEXG4gKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luIC0gc2V0IHRoZSBFbWFpbEpTIG9yaWdpblxuICovXG5leHBvcnQgY29uc3QgaW5pdCA9ICh1c2VySUQsIG9yaWdpbiA9ICdodHRwczovL2FwaS5lbWFpbGpzLmNvbScpID0+IHtcbiAgICBzdG9yZS5fdXNlcklEID0gdXNlcklEO1xuICAgIHN0b3JlLl9vcmlnaW4gPSBvcmlnaW47XG59O1xuIiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyB2YWxpZGF0ZVBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRlUGFyYW1zJztcbmltcG9ydCB7IHNlbmRQb3N0IH0gZnJvbSAnLi4vLi4vYXBpL3NlbmRQb3N0JztcbmNvbnN0IGZpbmRIVE1MRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRGb3JtO1xuICAgIGlmICh0eXBlb2YgZm9ybSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY3VycmVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY3VycmVudEZvcm0gPSBmb3JtO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnRGb3JtIHx8IGN1cnJlbnRGb3JtLm5vZGVOYW1lICE9PSAnRk9STScpIHtcbiAgICAgICAgdGhyb3cgJ1RoZSAzcmQgcGFyYW1ldGVyIGlzIGV4cGVjdGVkIHRvIGJlIHRoZSBIVE1MIGZvcm0gZWxlbWVudCBvciB0aGUgc3R5bGUgc2VsZWN0b3Igb2YgZm9ybSc7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50Rm9ybTtcbn07XG4vKipcbiAqIFNlbmQgYSBmb3JtIHRoZSBzcGVjaWZpYyBFbWFpbEpTIHNlcnZpY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlSUQgLSB0aGUgRW1haWxKUyBzZXJ2aWNlIElEXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVJRCAtIHRoZSBFbWFpbEpTIHRlbXBsYXRlIElEXG4gKiBAcGFyYW0ge3N0cmluZyB8IEhUTUxGb3JtRWxlbWVudH0gZm9ybSAtIHRoZSBmb3JtIGVsZW1lbnQgb3Igc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySUQgLSB0aGUgRW1haWxKUyB1c2VyIElEXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxFbWFpbEpTUmVzcG9uc2VTdGF0dXM+fVxuICovXG5leHBvcnQgY29uc3Qgc2VuZEZvcm0gPSAoc2VydmljZUlELCB0ZW1wbGF0ZUlELCBmb3JtLCB1c2VySUQpID0+IHtcbiAgICBjb25zdCB1SUQgPSB1c2VySUQgfHwgc3RvcmUuX3VzZXJJRDtcbiAgICBjb25zdCBjdXJyZW50Rm9ybSA9IGZpbmRIVE1MRm9ybShmb3JtKTtcbiAgICB2YWxpZGF0ZVBhcmFtcyh1SUQsIHNlcnZpY2VJRCwgdGVtcGxhdGVJRCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoY3VycmVudEZvcm0pO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnbGliX3ZlcnNpb24nLCAnMy4yLjAnKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3NlcnZpY2VfaWQnLCBzZXJ2aWNlSUQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndGVtcGxhdGVfaWQnLCB0ZW1wbGF0ZUlEKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJfaWQnLCB1SUQpO1xuICAgIHJldHVybiBzZW5kUG9zdCgnL2FwaS92MS4wL2VtYWlsL3NlbmQtZm9ybScsIGZvcm1EYXRhKTtcbn07XG4iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcbmltcG9ydCB7IHZhbGlkYXRlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdGVQYXJhbXMnO1xuaW1wb3J0IHsgc2VuZFBvc3QgfSBmcm9tICcuLi8uLi9hcGkvc2VuZFBvc3QnO1xuLyoqXG4gKiBTZW5kIGEgdGVtcGxhdGUgdG8gdGhlIHNwZWNpZmljIEVtYWlsSlMgc2VydmljZVxuICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VJRCAtIHRoZSBFbWFpbEpTIHNlcnZpY2UgSURcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZUlEIC0gdGhlIEVtYWlsSlMgdGVtcGxhdGUgSURcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wbGF0ZVByYW1zIC0gdGhlIHRlbXBsYXRlIHBhcmFtcywgd2hhdCB3aWxsIGJlIHNldCB0byB0aGUgRW1haWxKUyB0ZW1wbGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJRCAtIHRoZSBFbWFpbEpTIHVzZXIgSURcbiAqIEByZXR1cm5zIHtQcm9taXNlPEVtYWlsSlNSZXNwb25zZVN0YXR1cz59XG4gKi9cbmV4cG9ydCBjb25zdCBzZW5kID0gKHNlcnZpY2VJRCwgdGVtcGxhdGVJRCwgdGVtcGxhdGVQcmFtcywgdXNlcklEKSA9PiB7XG4gICAgY29uc3QgdUlEID0gdXNlcklEIHx8IHN0b3JlLl91c2VySUQ7XG4gICAgdmFsaWRhdGVQYXJhbXModUlELCBzZXJ2aWNlSUQsIHRlbXBsYXRlSUQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgbGliX3ZlcnNpb246ICczLjIuMCcsXG4gICAgICAgIHVzZXJfaWQ6IHVJRCxcbiAgICAgICAgc2VydmljZV9pZDogc2VydmljZUlELFxuICAgICAgICB0ZW1wbGF0ZV9pZDogdGVtcGxhdGVJRCxcbiAgICAgICAgdGVtcGxhdGVfcGFyYW1zOiB0ZW1wbGF0ZVByYW1zLFxuICAgIH07XG4gICAgcmV0dXJuIHNlbmRQb3N0KCcvYXBpL3YxLjAvZW1haWwvc2VuZCcsIEpTT04uc3RyaW5naWZ5KHBhcmFtcyksIHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbn07XG4iLCJleHBvcnQgY2xhc3MgRW1haWxKU1Jlc3BvbnNlU3RhdHVzIHtcbiAgICBjb25zdHJ1Y3RvcihodHRwUmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBodHRwUmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICB0aGlzLnRleHQgPSBodHRwUmVzcG9uc2UucmVzcG9uc2VUZXh0O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBzdG9yZSA9IHtcbiAgICBfb3JpZ2luOiAnaHR0cHM6Ly9hcGkuZW1haWxqcy5jb20nLFxufTtcbiIsImV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhcmFtcyA9ICh1c2VySUQsIHNlcnZpY2VJRCwgdGVtcGxhdGVJRCkgPT4ge1xuICAgIGlmICghdXNlcklEKSB7XG4gICAgICAgIHRocm93ICdUaGUgdXNlciBJRCBpcyByZXF1aXJlZC4gVmlzaXQgaHR0cHM6Ly9kYXNoYm9hcmQuZW1haWxqcy5jb20vYWRtaW4vaW50ZWdyYXRpb24nO1xuICAgIH1cbiAgICBpZiAoIXNlcnZpY2VJRCkge1xuICAgICAgICB0aHJvdyAnVGhlIHNlcnZpY2UgSUQgaXMgcmVxdWlyZWQuIFZpc2l0IGh0dHBzOi8vZGFzaGJvYXJkLmVtYWlsanMuY29tL2FkbWluJztcbiAgICB9XG4gICAgaWYgKCF0ZW1wbGF0ZUlEKSB7XG4gICAgICAgIHRocm93ICdUaGUgdGVtcGxhdGUgSUQgaXMgcmVxdWlyZWQuIFZpc2l0IGh0dHBzOi8vZGFzaGJvYXJkLmVtYWlsanMuY29tL2FkbWluL3RlbXBsYXRlcyc7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImZhY2Vib29rXzhmMzk3MzI5ZjBhNjQ2NjdjYjQxYmM2MmFmODdmNzNkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvc3ByaXRlLnN2ZyNmYWNlYm9va184ZjM5NzMyOWYwYTY0NjY3Y2I0MWJjNjJhZjg3ZjczZC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJnaXRodWJfZjY1ZDlhZGExZGVlY2U5NjM2MGRiNmFmMjFjYzVkNWQtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvc3ByaXRlLnN2ZyNnaXRodWJfZjY1ZDlhZGExZGVlY2U5NjM2MGRiNmFmMjFjYzVkNWQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaW5zdGFncmFtXzhiYmZjN2YwOTc4ZWM3MjM1MWZiYzg3ZjljM2ZkMGEzLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Nwcml0ZS5zdmcjaW5zdGFncmFtXzhiYmZjN2YwOTc4ZWM3MjM1MWZiYzg3ZjljM2ZkMGEzLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImxpbmtlZGluX2E2MmE1OTBmZGZiMDU3MTk1NjFlMTk0MDliNzk3ZjU0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgLTAuNSAyNSAyNVwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Nwcml0ZS5zdmcjbGlua2VkaW5fYTYyYTU5MGZkZmIwNTcxOTU2MWUxOTQwOWI3OTdmNTQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwibWFpbF81MDBkNTYwMDM4YWJjYTljY2YwNTcwNDA5M2Q4M2IxMC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zcHJpdGUuc3ZnI21haWxfNTAwZDU2MDAzOGFiY2E5Y2NmMDU3MDQwOTNkODNiMTAtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwidGVsZWdyYW1fODk1OWI3Y2QxYmY0NTI2OWQ3YTAyNGFjZDI0MDFjZmYtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvc3ByaXRlLnN2ZyN0ZWxlZ3JhbV84OTU5YjdjZDFiZjQ1MjY5ZDdhMDI0YWNkMjQwMWNmZi11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJ3aGF0c2FwcF85MTY3Y2U0OGY4NmRhM2E0NjY4OTY1MGQ4ZTcwNDdmMC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zcHJpdGUuc3ZnI3doYXRzYXBwXzkxNjdjZTQ4Zjg2ZGEzYTQ2Njg5NjUwZDhlNzA0N2YwLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcInlvdXR1YmVfOTQyMDQxYzg3MGQ4ZGY2MjM1ODk2NTY1NDcxMTdiNmUtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAtNyA0OCA0OFwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Nwcml0ZS5zdmcjeW91dHViZV85NDIwNDFjODcwZDhkZjYyMzU4OTY1NjU0NzExN2I2ZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJpbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl91c2VySUQgPSBcInVCNW9PVWhnRnBDZE1PWjZFXCI7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlSUQgPSBcInRlbXBsYXRlX2gyN3I3eXlcIjtcbiAgICAgICAgdGhpcy5fc2VydmljZUlEID0gXCJzZXJ2aWNlXzJ2ejYzbGxcIjtcbiAgICAgICAgdGhpcy5fZGF5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5zdWJtaXRGdW5jdGlvbiA9ICh7IHN1YmplY3QsIG1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzdWJqZWN0IHx8ICFtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRnVuY3Rpb24oXCJQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZiAoISF0aGlzLl9kYXkpXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXkgPT09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0ZVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEZ1bmN0aW9uKFwiWW91IGNhbiBvbmx5IHNlbmQgb25lIG1lc3NhZ2UgcGVyIGRheS5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVQYXJhbXMgPSB7IHN1YmplY3QsIG1lc3NhZ2UgfTtcbiAgICAgICAgICAgIGVtYWlsanMuc2VuZCh0aGlzLl9zZXJ2aWNlSUQsIHRoaXMuX3RlbXBsYXRlSUQsIHRlbXBsYXRlUGFyYW1zKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BGdW5jdGlvbihcIllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXRlXCIsIHRoaXMuX2RheSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BGdW5jdGlvbihcIlRoZXJlIHdhcyBhbiBlcnJvciBzZW5kaW5nIHlvdXIgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVtYWlsSlMgc2VuZCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGVtYWlsanMuaW5pdCh0aGlzLl91c2VySUQpO1xuICAgIH1cbiAgICA7XG4gICAgc3RvcEZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgYWxlcnQodGV4dCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3Bpbm5lclwiKTtcbiAgICB9XG4gICAgO1xufVxuO1xuIiwiaW1wb3J0IE1haWxlciBmcm9tICcuL01haWxlcic7XG5pbXBvcnQgc2tpbGxzSW5mbyBmcm9tICcuL3NraWxsc0luZm8nO1xuY29uc3Qgc3ZnQWRkID0gKCkgPT4ge1xuICAgIGNvbnN0IHN2Z0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy9pY29ucycsIGZhbHNlLCAvXFwuc3ZnJC8pLCBzdmdNYXAgPSB7fSwgc3ZnTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdmcnKTtcbiAgICBzdmdDb250ZXh0LmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBrZXkubWF0Y2goL1xcLlxcLyguKylcXC5zdmckLylbMV07XG4gICAgICAgIHN2Z01hcFtmaWxlTmFtZV0gPSBzdmdDb250ZXh0KGtleSkuZGVmYXVsdDtcbiAgICB9KTtcbiAgICBzdmdMaXN0LmZvckVhY2goaSA9PiB7XG4gICAgICAgIGNvbnN0IGhyZWZJZCA9IGkuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSB8fCAnJztcbiAgICAgICAgaWYgKHN2Z01hcFtocmVmSWRdKSB7XG4gICAgICAgICAgICBpLmlubmVySFRNTCA9IGA8dXNlIHhsaW5rOmhyZWY9XCIke3N2Z01hcFtocmVmSWRdfVwiPjwvdXNlPmA7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCBjbG9jayA9ICgpID0+IHtcbiAgICBjb25zdCB5ZWFyc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJzXCIpLCBkYXlzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5c1wiKSwgaG91cnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3Vyc1wiKTtcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShcIkFwcmlsIDEsIDIwMjBcIiksIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKSwgdGltZURpZmZlcmVuY2UgPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgLSBzdGFydERhdGUuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHllYXJzID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KSksIGRheXMgPSBNYXRoLmZsb29yKCh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLCBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgIGlmICh5ZWFyc0VsZW1lbnQgJiYgZGF5c0VsZW1lbnQgJiYgaG91cnNFbGVtZW50KSB7XG4gICAgICAgIHllYXJzRWxlbWVudC50ZXh0Q29udGVudCA9IHllYXJzLnRvU3RyaW5nKCk7XG4gICAgICAgIGRheXNFbGVtZW50LnRleHRDb250ZW50ID0gZGF5cy50b1N0cmluZygpO1xuICAgICAgICBob3Vyc0VsZW1lbnQudGV4dENvbnRlbnQgPSBob3Vycy50b1N0cmluZygpO1xuICAgIH1cbiAgICA7XG59O1xuY29uc3Qgc2tpbGxzQWRkID0gKCkgPT4ge1xuICAgIGNvbnN0IGZyb250Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3JrX19za2lsbHMtZnJvbnRcIik7XG4gICAgY29uc3QgYmFja0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya19fc2tpbGxzLWJhY2tcIik7XG4gICAgY29uc3QgdG9vbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya19fc2tpbGxzLXRvb2xcIik7XG4gICAgY29uc3QgZmlsbGluZyA9IHsgZnJvbnQ6IFwiXCIsIGJhY2s6IFwiXCIsIHRvb2w6IFwiXCIgfTtcbiAgICBpZiAoIWZyb250Q29udGFpbmVyIHx8ICFiYWNrQ29udGFpbmVyIHx8ICF0b29sQ29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIk1pc3NpbmcgY29udHNpbmVyIVwiKTtcbiAgICB9XG4gICAgO1xuICAgIHNraWxsc0luZm8gJiYgc2tpbGxzSW5mby5mb3JFYWNoKGkgPT4ge1xuICAgICAgICBmaWxsaW5nW2kudGl0bGVdICs9IGBcclxuICAgICAgPGEgY2xhc3M9XCJ3b3JrX19za2lsbHMtbGlua1wiIGhyZWY9XCIke2kubGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIiR7aS5uYW1lfVwiPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwid29ya19fc2tpbGxzLWltZ1wiIHNyYz1cIiR7aS5pbWd9XCIgbG9hZGluZz1cImxhenlcIiBhbHQ9XCIke2kuaW1nfVwiID5cclxuICAgICAgICAgICR7aS5uYW1lfVxyXG4gICAgICA8L2E+XHJcbiAgICBgO1xuICAgIH0pO1xuICAgIGZyb250Q29udGFpbmVyLmlubmVySFRNTCArPSBmaWxsaW5nLmZyb250O1xuICAgIGJhY2tDb250YWluZXIuaW5uZXJIVE1MICs9IGZpbGxpbmcuYmFjaztcbiAgICB0b29sQ29udGFpbmVyLmlubmVySFRNTCArPSBmaWxsaW5nLnRvb2w7XG59O1xuY29uc3QgbWVzc2FnZVNlbmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdF9fZm9ybVwiKSwgc3ViamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0X19mb3JtLXN1YmplY3RcIiksIG1lc3NhZ2VUQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdF9fZm9ybS1tZXNzYWdlXCIpO1xuICAgIGlmICghZm9ybSB8fCAhc3ViamVjdElucHV0IHx8ICFtZXNzYWdlVEEpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk9uZSBvciBtb3JlIGZvcm0gZWxlbWVudHMgYXJlIG1pc3NpbmcuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIDtcbiAgICBjb25zdCB7IHN1Ym1pdEZ1bmN0aW9uIH0gPSBuZXcgTWFpbGVyKCk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJzcGlubmVyXCIpO1xuICAgICAgICBjb25zdCB0YW1wbGF0ZUluZm8gPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0SW5wdXQudmFsdWUudHJpbSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVRBLnZhbHVlLnRyaW0oKVxuICAgICAgICB9O1xuICAgICAgICBzdWJtaXRGdW5jdGlvbih0YW1wbGF0ZUluZm8pO1xuICAgICAgICBzdWJqZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBtZXNzYWdlVEEudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRzKCkge1xuICAgIHN2Z0FkZCgpO1xuICAgIGNsb2NrKCk7XG4gICAgc2tpbGxzQWRkKCk7XG4gICAgbWVzc2FnZVNlbmQoKTtcbn1cbjtcbiIsImZ1bmN0aW9uIGxhbmdIYW5kbGVyKHVzZXJMYW5nKSB7XG4gICAgY29uc3QgbGFuZ3VhZ2VzID0gW1xuICAgICAgICB7IG5hbWU6IFwiRW5nbGlzaFwiLCBwYXRobmFtZTogXCJlblwiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgICB7IG5hbWU6IFwiRGV1dHNjaFwiLCBwYXRobmFtZTogXCJkZVwiLCBsaW5rOiBcIi9kZS9cIiB9LFxuICAgICAgICB7IG5hbWU6IFwi0KPQutGA0LDRl9C90YHRjNC60LBcIiwgcGF0aG5hbWU6IFwidWtcIiwgbGluazogXCIvdWsvXCIgfSxcbiAgICBdO1xuICAgIGxhbmd1YWdlcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICBpZiAodXNlckxhbmcuaW5jbHVkZXMoaS5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1MYW5nID0gY29uZmlybShgV291bGQgeW91IGxpa2Ugc3dpdGNoIHRvIFwiJHtpLm5hbWV9XCJgKTtcbiAgICAgICAgICAgIGlmIChjb25maXJtTGFuZykge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoaS5saW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfSk7XG59XG47XG5leHBvcnQgZnVuY3Rpb24gbGFuZ0RldGVjdCgpIHtcbiAgICBjb25zdCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYW5nXCIpO1xuICAgIGlmIChzdG9yYWdlKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgdXNlckxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLy9nLCBcIlwiKSB8fCBcImVuXCI7XG4gICAgaWYgKCF1c2VyTGFuZ3VhZ2UuaW5jbHVkZXMocGF0aCkpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGFuZ0hhbmRsZXIodXNlckxhbmd1YWdlKSwgMzAwMCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYW5nXCIsIHBhdGgpO1xufVxuO1xuIiwiY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2hhbWJ1cmdlclwiKSwgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX25hdlwiKSwgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fbmF2LWxpbmtcIiksIHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGVhZGVyX19oYW1idXJnZXItLWFjdGl2ZVwiKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJfX25hdi0tYWN0aXZlXCIpO1xuICAgIH07XG4gICAgaGFtYnVyZ2VyICYmIG5hdiAmJiBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbWVudVRvZ2dsZSgpO1xuICAgIH0pO1xufVxuO1xuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiAnLTUwJSdcbiAgICB9O1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uSWQgPSBzZWN0aW9uc1tpbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiI1wiICsgZW50cnkudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX25hdi1saW5rLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uc1tpbmRleF0uY2xhc3NMaXN0LmFkZChzZWN0aW9uSWQgKyBcIi0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19uYXYtbGluay0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbnNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoc2VjdGlvbklkICsgXCItLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xuICAgIH0pO1xufVxuO1xuIiwiY29uc3Qgc2tpbGxzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJIdG1sXCIsXG4gICAgICAgIGltZzogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzYvNjEvSFRNTDVfbG9nb19hbmRfd29yZG1hcmsuc3ZnLzEyMHB4LUhUTUw1X2xvZ29fYW5kX3dvcmRtYXJrLnN2Zy5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiZnJvbnRcIiwgbGluazogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IVE1MXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDc3NcIixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kNS9DU1MzX2xvZ29fYW5kX3dvcmRtYXJrLnN2Zy8xMjBweC1DU1MzX2xvZ29fYW5kX3dvcmRtYXJrLnN2Zy5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiZnJvbnRcIiwgbGluazogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DU1NcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkphdmFTY3JpcHRcIixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvOS85OS9Vbm9mZmljaWFsX0phdmFTY3JpcHRfbG9nb18yLnN2Zy83MHB4LVVub2ZmaWNpYWxfSmF2YVNjcmlwdF9sb2dvXzIuc3ZnLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJmcm9udFwiLCBsaW5rOiBcImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0phdmFTY3JpcHRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlR5cGVTY3JpcHRcIixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9mYXZpY29uLmljb1wiLFxuICAgICAgICB0aXRsZTogXCJmcm9udFwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlJlYWN0XCIsXG4gICAgICAgIGltZzogXCJodHRwczovL3JlYWN0LmRldi9mYXZpY29uLmljb1wiLFxuICAgICAgICB0aXRsZTogXCJmcm9udFwiLCBsaW5rOiBcImh0dHBzOi8vcmVhY3QuZGV2L1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTmV4dFwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9uZXh0anMub3JnL2Zhdmljb24uaWNvXCIsXG4gICAgICAgIHRpdGxlOiBcImZyb250XCIsIGxpbms6IFwiaHR0cHM6Ly9uZXh0anMub3JnL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRXhwb1wiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9zdGF0aWMuZXhwby5kZXYvc3RhdGljL2JyYW5kL2FwcC1pY29uLTUxMng1MTIucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcImZyb250XCIsIGxpbms6IFwiaHR0cHM6Ly9leHBvLmRldi9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlJlZHV4XCIsXG4gICAgICAgIGltZzogXCJodHRwczovL3JlZHV4LmpzLm9yZy9pbWcvZmF2aWNvbi9mYXZpY29uLmljb1wiLFxuICAgICAgICB0aXRsZTogXCJmcm9udFwiLCBsaW5rOiBcImh0dHBzOi8vcmVkdXguanMub3JnL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiWnVzdGFuZFwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy96dXN0YW5kL3Jhdy9tYWluL2RvY3MvZmF2aWNvbi5pY29cIixcbiAgICAgICAgdGl0bGU6IFwiZnJvbnRcIiwgbGluazogXCJodHRwczovL3p1c3RhbmQuZG9jcy5wbW5kLnJzL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiU2Fzc1wiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9zYXNzLWxhbmcuY29tL2Zhdmljb24uaWNvXCIsXG4gICAgICAgIHRpdGxlOiBcImZyb250XCIsIGxpbms6IFwiaHR0cHM6Ly9zYXNzLWxhbmcuY29tL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTVVJXCIsXG4gICAgICAgIGltZzogXCJodHRwczovL211aS5jb20vZmF2aWNvbi5pY29cIixcbiAgICAgICAgdGl0bGU6IFwiZnJvbnRcIiwgbGluazogXCJodHRwczovL211aS5jb20vXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJUaHJlZS5qc1wiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly90aHJlZWpzLm9yZy9mYXZpY29uLmljb1wiLFxuICAgICAgICB0aXRsZTogXCJmcm9udFwiLCBsaW5rOiBcImh0dHBzOi8vdGhyZWVqcy5vcmcvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJTb2NrZXRcIixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vc29ja2V0LmlvL2ltYWdlcy9mYXZpY29uLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJiYWNrXCIsIGxpbms6IFwiaHR0cHM6Ly9zb2NrZXQuaW8vXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJOb2RlLmpzXCIsXG4gICAgICAgIGltZzogXCJodHRwczovL25vZGVqcy5vcmcvZmF2aWNvbi5pY29cIixcbiAgICAgICAgdGl0bGU6IFwiYmFja1wiLCBsaW5rOiBcImh0dHBzOi8vbm9kZWpzLm9yZy9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkV4cHJlc3MuanNcIixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vZXhwcmVzc2pzLmNvbS9pbWFnZXMvZmF2aWNvbi5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiYmFja1wiLCBsaW5rOiBcImh0dHBzOi8vZXhwcmVzc2pzLmNvbS9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlVidW50dVwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly91YnVudHUuY29tL3N0YXRpYy9mYXZpY29ucy9DT0YtZmF2aWNvbi00OHg0OC5wbmc/dj1mYTNjNjNmXCIsXG4gICAgICAgIHRpdGxlOiBcImJhY2tcIiwgbGluazogXCJodHRwczovL3VidW50dS5jb20vXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJNb25nb0RCXCIsXG4gICAgICAgIGltZzogXCJodHRwczovL3d3dy5tb25nb2RiLmNvbS9mYXZpY29uLmljb1wiLFxuICAgICAgICB0aXRsZTogXCJiYWNrXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cubW9uZ29kYi5jb20vXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJNeVNRTFwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9sYWJzLm15c3FsLmNvbS9jb21tb24vdGhlbWVzL3Nha2lsYS9mYXZpY29uLmljb1wiLFxuICAgICAgICB0aXRsZTogXCJiYWNrXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cubXlzcWwuY29tL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiUG9zdGdyZVNRTFwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly93d3cucG9zdGdyZXNxbC5vcmcvZmF2aWNvbi5pY29cIixcbiAgICAgICAgdGl0bGU6IFwiYmFja1wiLCBsaW5rOiBcImh0dHBzOi8vd3d3LnBvc3RncmVzcWwub3JnL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiU2VxdWVsaXplXCIsXG4gICAgICAgIGltZzogXCJodHRwczovL3NlcXVlbGl6ZS5vcmcvaW1nL2xvZ28uc3ZnXCIsXG4gICAgICAgIHRpdGxlOiBcImJhY2tcIiwgbGluazogXCJodHRwczovL3NlcXVlbGl6ZS5vcmcvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJKZXN0XCIsXG4gICAgICAgIGltZzogXCJodHRwczovL2plc3Rqcy5pby9pbWcvamVzdC5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwidG9vbFwiLCBsaW5rOiBcImh0dHBzOi8vamVzdGpzLmlvL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiV2VicGFja1wiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9pY29uXzE4MHgxODAucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcInRvb2xcIiwgbGluazogXCJodHRwczovL3dlYnBhY2suanMub3JnL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVml0ZVwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly92aXRlLmRldi9sb2dvLnN2Z1wiLFxuICAgICAgICB0aXRsZTogXCJ0b29sXCIsIGxpbms6IFwiaHR0cHM6Ly92aXRlLmRldi9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkdpdFwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9naXQtc2NtLmNvbS9mYXZpY29uLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJ0b29sXCIsIGxpbms6IFwiaHR0cHM6Ly9naXQtc2NtLmNvbS9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInBocE15QWRtaW5cIixcbiAgICAgICAgaW1nOiBcImh0dHBzOi8vd3d3LnBocG15YWRtaW4ubmV0L3N0YXRpYy9mYXZpY29uLmljb1wiLFxuICAgICAgICB0aXRsZTogXCJ0b29sXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cucGhwbXlhZG1pbi5uZXQvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJGaWdtYVwiLFxuICAgICAgICBpbWc6IFwiaHR0cHM6Ly9zdGF0aWMuZmlnbWEuY29tL2FwcC9pY29uLzEvZmF2aWNvbi5zdmdcIixcbiAgICAgICAgdGl0bGU6IFwidG9vbFwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LmZpZ21hLmNvbS9cIlxuICAgIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgc2tpbGxzO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2ZhY2Vib29rLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pY29ucy9mYWNlYm9vay5zdmdcIixcblx0XCIuL2dpdGh1Yi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaWNvbnMvZ2l0aHViLnN2Z1wiLFxuXHRcIi4vaW5zdGFncmFtLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0uc3ZnXCIsXG5cdFwiLi9saW5rZWRpbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaWNvbnMvbGlua2VkaW4uc3ZnXCIsXG5cdFwiLi9tYWlsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pY29ucy9tYWlsLnN2Z1wiLFxuXHRcIi4vdGVsZWdyYW0uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ljb25zL3RlbGVncmFtLnN2Z1wiLFxuXHRcIi4vd2hhdHNhcHAuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ljb25zL3doYXRzYXBwLnN2Z1wiLFxuXHRcIi4veW91dHViZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaWNvbnMveW91dHViZS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ljb25zIHN5bmMgXFxcXC5zdmckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gXCIuL3NjcmlwdHMvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgaGVhZGVyLCBzY3JvbGwgfSBmcm9tIFwiLi9zY3JpcHRzL3NpdGVOYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBsYW5nRGV0ZWN0IH0gZnJvbSBcIi4vc2NyaXB0cy9sYW5nRGV0ZWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgbGFuZ0RldGVjdCgpO1xuICAgIGNvbXBvbmVudHMoKTtcbiAgICBoZWFkZXIoKTtcbiAgICBzY3JvbGwoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9