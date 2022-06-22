import { ProfileImage, AsideListItems } from "components";

export const Aside = () => {
  return (
    <aside className={"col-span-4 row-span-10 h-full order-4"}>
      <ProfileImage />
      <AsideListItems />
    </aside>
  );
};
