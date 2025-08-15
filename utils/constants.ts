export const languages = ["en", "de", "uk"];

export const startCareer = "April 1, 2020";

export const API_CONTACT = "/api/contact";

export const socials = [
  { id: 1, title: "E-Mail", ref: "mailto:artem.99.zaikin@gamil.com", icon: "mail" },
  { id: 2, title: "GitHub", ref: "https://github.com/artproduct1on", icon: "github" },
  { id: 3, title: "LinkedIn", ref: "https://www.linkedin.com/in/zaikin-artem/", icon: "linkedin" },
  { id: 4, title: "Instagram", ref: "https://www.instagram.com/artproduct1on/", icon: "instagram" },
];

interface IHomeServices {
  title: string;
  text: string;
}

export const homeServices = (list: IHomeServices[]) => [
  {
    ...list[0],
    id: 1,
    link: "/blog/business-digitalization#personal-solution"
  },
  {
    ...list[1],
    id: 2,
    link: "/blog/business-digitalization#web-development"
  },
  {
    ...list[2],
    id: 3,
    link: "/blog/business-digitalization#app-development"
  },
  {
    ...list[3],
    id: 4,
    link: "/blog/business-digitalization#systems-and-services"
  },
];
export const homeIndustries = (list: string[]) => [
  {
    id: 1,
    title: list[0],
    icon: "Logistics",
    link: "/blog/industries#logistics"
  },
  {
    id: 2,
    title: list[1],
    icon: "eCommerce",
    link: "/blog/industries#e-commerce"
  },
  {
    id: 3,
    title: list[2],
    icon: "Healthcare",
    link: "/blog/industries#healthcare"
  },
  {
    id: 4,
    title: list[3],
    icon: "E-grocery",
    link: "/blog/industries#e-grocery"
  },
  {
    id: 5,
    title: list[4],
    icon: "Education",
    link: "/blog/industries#education"
  },
  {
    id: 6,
    title: list[5],
    icon: "Other",
    link: "/blog/industries"
  },
]


export const workList = [
  { id: 0, perc: 92.5 },
  { id: 1, perc: 69 },
  { id: 2, perc: 77.5 },
  { id: 3, perc: 59.5 },
  { id: 4, perc: 61.7 },
];



