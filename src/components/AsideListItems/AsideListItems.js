import { skillEntries } from "../../data";
import { AsideItem } from "components";

export const AsideListItems = () => {
  return (
    <div>
      {skillEntries.map((skill) => (
        <AsideItem {...skill} />
      ))}
    </div>
  );
};
