import { useContext } from "react";
import { ResumeeContext } from "contexts";

export const LanguageButton = () => {
  const { lang, changeLang } = useContext(ResumeeContext);

  const handleOnClick = (event) => {
    const value = event.target.innerText;
    changeLang(value);
  };

  return (
    <div className="ml-6">
      <button
        className={lang === "es" ? "border-b-2 border-[#ff8675]" : ""}
        onClick={handleOnClick}
      >
        es
      </button>
      <span className="mx-1">/</span>
      <button
        className={lang === "en" ? "border-b-2 border-[#ff8675]" : ""}
        onClick={handleOnClick}
      >
        en
      </button>
    </div>
  );
};
