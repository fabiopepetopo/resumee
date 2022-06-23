import { skillEntries } from "../../data";
import { AsideItem } from "components";
import { useContext } from "react";
import { ResumeeContext } from "../../contexts";

export const AsideListItems = () => {
  const { lang } = useContext(ResumeeContext);

  return (
    <div>
      {skillEntries[lang].map((skill, index) => (
        <AsideItem key={index} {...skill} />
      ))}
    </div>
  );
};
