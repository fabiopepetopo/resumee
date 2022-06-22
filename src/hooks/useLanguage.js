import { useState } from "react";

export const useLanguage = () => {
  const [lang, setLang] = useState("en");

  const changeLang = (lang) => {
    setLang(lang);
  };

  return {
    lang,
    changeLang,
  };
};
