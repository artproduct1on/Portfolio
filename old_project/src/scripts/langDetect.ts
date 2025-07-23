function langHandler(userLang: string) {
  const languages: { name: string, pathname: string, link: string }[] = [
    { name: "English", pathname: "en", link: "/" },
    { name: "Deutsch", pathname: "de", link: "/de/" },
    { name: "Українська", pathname: "uk", link: "/uk/" },
  ];
  languages.forEach(i => {
    if (userLang.includes(i.pathname)) {
      const confirmLang = confirm(`Would you like switch to "${i.name}"`)
      if (confirmLang) {
        location.replace(i.link)
      };
    };
  });
};

export function langDetect() {
  const storage: string | null = localStorage.getItem("lang");
  if (storage) return;
  const userLanguage: string = navigator.language.toLocaleLowerCase();
  const path: string = location.pathname.replace(/\//g, "") || "en";
  if (!userLanguage.includes(path)) setTimeout(() => langHandler(userLanguage), 3000);
  localStorage.setItem("lang", path);
};
