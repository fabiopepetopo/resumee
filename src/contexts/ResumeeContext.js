import React from "react";
import { useLanguage } from "hooks/useLanguage";

const ResumeeContext = React.createContext();

const ResumeeProvider = (props) => {
  const { lang, changeLang } = useLanguage();

  return (
    <ResumeeContext.Provider
      value={{
        lang,
        changeLang,
      }}
    >
      {props.children}
    </ResumeeContext.Provider>
  );
};
export { ResumeeContext, ResumeeProvider };
