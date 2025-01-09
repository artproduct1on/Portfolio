import emailjs from 'emailjs-com';
import { resolve } from 'path';

export default class Mailer {
  private _userID: string = "uB5oOUhgFpCdMOZ6E";
  private _templateID: string = "template_h27r7yy";
  private _serviceID: string = "service_2vz63ll";
  private _day: string = "";

  constructor() {
    emailjs.init(this._userID);
  };

  stopFunction(text: string) {
    alert(text);
    document.querySelector(".spinner").classList.remove("spinner");
  };

  submitFunction = ({ subject, message }: { subject: string, message: string }) => {
    if (!subject || !message) {
      this.stopFunction("Please fill in all fields.");
      return;
    };

    if (!!this._day) this._day = new Date().getDate().toString();

    if (this._day === localStorage.getItem("date")) {
      this.stopFunction("You can only send one message per day.");
      return;
    }
    const templateParams = { subject, message };
    emailjs.send(this._serviceID, this._templateID, templateParams)
      .then(() => {
        this.stopFunction("Your message has been sent successfully!");
        localStorage.setItem("date", this._day);
      })
      .catch((error) => {
        this.stopFunction("There was an error sending your message. Please try again.");
        console.error("EmailJS send error:", error);
      });

  };
};